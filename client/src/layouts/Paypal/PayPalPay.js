import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

export const Paypal = ({
  handlePayPalError,
  handlePaymentSuccess,
  handlePaymentFailed,
  className,
  cart,
  noteToSeller,
}) => {
  const paypal = useRef();

  const orderTotal = (cart) =>
    cart.reduce((acc, cur) => (acc += cur.price * cur.quantity), 0);

  const shippingRequired = cart.some(
    (item) => item.item === 'American Harmony'
  );

  useEffect(() => {
    try {
      window.paypal
        .Buttons({
          createOrder: (data, actions, err) => {
            return actions.order.create({
              intent: 'CAPTURE',
              purchase_units: [
                {
                  description: 'Early American Sacred Music',
                  amount: {
                    currency_code: 'USD',
                    value: orderTotal(cart),
                    breakdown: {
                      item_total: {
                        currency_code: 'USD',
                        value: orderTotal(cart),
                      },
                    },
                  },
                  items: cart.map((item) => ({
                    unit_amount: {
                      currency_code: 'USD',
                      value: item.price,
                    },
                    quantity: item.quantity,
                    name: item.item,
                  })),
                },
              ],
              application_context: {
                shipping_preference: shippingRequired
                  ? 'GET_FROM_FILE'
                  : 'NO_SHIPPING',
              },
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            // console.log(actions);
            // console.log(data);
            console.log(order);
            handlePaymentSuccess({
              total: order.purchase_units[0].amount.value,
              email: order.payer.email_address,
              message: noteToSeller,
              firstName: order.payer.name.given_name,
              lastName: order.payer.name.surname,
            });
          },
          onError: (err) => {
            console.log(err);
            handlePaymentFailed();
          },
        })
        .render(paypal.current);
    } catch (error) {
      handlePayPalError(true);
    }
  }, []);

  return (
    <div className="paypal">
      <div ref={paypal}></div>
    </div>
  );
};

Paypal.defaultProps = {
  donation: { amount: '0.00', note: '' },
  className: '',
  handlePaymentFailed: () => {},
  handlePaymentSuccess: () => {},
};

// export const DonateOldScreen = () => {
//   const [paymentDetails, setPaymentDetails] = useState({
//     status: null,
//   });
//   const [amount, setAmount] = useState(0.0);
//   const [donating, setDonating] = useState(false);

//   const handlePaymentSuccess = (payment) => {
//     setPaymentDetails({ status: 'success', payer: payment.payer });
//   };

//   const handlePaymentFailed = (payment) => {
//     setPaymentDetails({ status: 'failed' });
//   };

//   const handleAmountInput = ({ target }) => {
//     console.log(parseInt(target.value));
//     setAmount(parseInt(target.value));
//   };

//   const handleDonateClick = () => {
//     setDonating(true);
//   };

//   const handleCancelClick = () => {
//     setDonating(false);
//   };

//   return (
//     <div id="donate" className="donate">
//       <div className="donate__container">
//         <div className="donate__content">
//           <FlexBox
//             styles={{
//               justifyContent: 'center',
//             }}>
//             <DonatePayment>
//               <FlexBox
//                 styles={{
//                   justifyContent: 'center',
//                   flexDirection: 'column',
//                 }}>
//                 <DonatePaymentInputGroup
//                   handleAmountInput={handleAmountInput}
//                   readOnly={donating}
//                 />
//                 {donating && (
//                   <Paypal
//                     handlePaymentSuccess={handlePaymentSuccess}
//                     handlePaymentFailed={handlePaymentFailed}
//                     amount={amount}
//                   />
//                 )}
//                 {donating ? (
//                   <button
//                     className="btn btn--big"
//                     onClick={handleCancelClick}>
//                     Cancel
//                   </button>
//                 ) : (
//                   <DonateDonateBtn
//                     handleDonateClick={handleDonateClick}
//                   />
//                 )}
//               </FlexBox>
//             </DonatePayment>
//           </FlexBox>
//         </div>
//       </div>
//     </div>
//   );
// };

// const DonatePaymentInputGroup = ({ handleAmountInput, readOnly }) => (
//   <React.Fragment>
//     <input
//       type="text"
//       className="form__input donate__input"
//       name="amount"
//       placeholder="Amount"
//       readOnly={readOnly}
//       onChange={handleAmountInput}
//     />
//     <label type="text" className="donate__label" htmlFor="amount">
//       Amount
//     </label>
//   </React.Fragment>
// );
