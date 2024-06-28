import React from 'react';
import { Center } from '../../components/abstract/Center';
import { HeadingPrimary } from '../../components/abstract/HeadingPrimary';
import { Paragraph } from '../../components/abstract/Paragraph';
import { PageContainer } from '../../components/abstract/PageContainer';
import { PageContent } from '../../components/abstract/PageContent';
import { useState } from 'react';
import { Paypal } from '../../layouts/Paypal/PayPalPay';
import { HeadingTertiary } from '../../components/abstract/HeadingTertiary';
import { FlexBox } from '../../components/abstract/FlexBox';
import { HeadingSecondary } from '../../components/abstract/HeadingSecondary';
import { sendEmailFetch } from './donateHelpers';

export const Donate = ({ openBookPreview }) => {
  return (
    <div id="donate">
      <PageContainer>
        <PageContent>
          <Donate__Introduction />
          <Donate__Store openBookPreview={openBookPreview} />
        </PageContent>
      </PageContainer>
    </div>
  );
};

const Donate__Introduction = () => (
  <React.Fragment>
    <HeadingPrimary>Support Our Work</HeadingPrimary>

    <Paragraph textSize={'small'}>
      We are happy to provide free access to these valuable resources
      for the study of early American music. If you appreciate our
      efforts and would like to support our work, please consider
      making a donation. 100% of donated funds will be used to support
      the creation of additional inventories, and the further
      expansion of our database’s purview. Many thanks for your
      support!
    </Paragraph>
  </React.Fragment>
);

const Donate__Store = ({ openBookPreview }) => {
  const [checkingOut, setCheckingOut] = useState(false);
  const [cart, setCart] = useState([]);
  const [paypalError, setPayPalError] = useState(false);
  const [noteToSeller, setNoteToSeller] = useState('');
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const [buyerName, setBuyerName] = useState('');

  const openCheckout = (cartArray, note) => {
    setPaymentSuccessful(false);
    setCart(cartArray);
    setNoteToSeller(note);
    setPayPalError(false);
    setCheckingOut(true);
  };

  const closeCheckout = () => {
    setCheckingOut(false);
  };

  const handlePayPalError = () => {
    setPayPalError(true);
    setCheckingOut(false);
  };

  const sendEmail = async (orderData) => {
    sendEmailFetch(orderData);
  };

  const handlePaymentSuccess = (orderData) => {
    setPaymentSuccessful(true);
    setBuyerName(orderData.firstName);
    closeCheckout();
    sendEmail(orderData);
  };

  return (
    <React.Fragment>
      <Donate__OrderScreen
        openCheckout={openCheckout}
        checkingOut={checkingOut}
        paypalError={paypalError}
        paymentSuccessful={paymentSuccessful}
        buyerName={buyerName}
        setPaymentSuccessful={setPaymentSuccessful}
        openBookPreview={openBookPreview}
      />

      {checkingOut && (
        <Donate__CheckoutScreen
          closeCheckout={closeCheckout}
          cart={cart}
          handlePayPalError={handlePayPalError}
          sendEmail={sendEmail}
          noteToSeller={noteToSeller}
          handlePaymentSuccess={handlePaymentSuccess}
        />
      )}
    </React.Fragment>
  );
};

const Donate__CheckoutScreen = ({
  closeCheckout,
  cart,
  handlePayPalError,
  noteToSeller,
  handlePaymentSuccess,
}) => {
  return (
    <React.Fragment>
      <Center>
        <Donate__EditOrderBtn closeCheckout={closeCheckout} />
      </Center>
      <HeadingSecondary className="fadeIn" fontWeight="bold">
        Pay with Paypal
      </HeadingSecondary>
      <Center>
        <Paypal
          handlePaymentSuccess={handlePaymentSuccess}
          handlePayPalError={handlePayPalError}
          cart={cart}
          noteToSeller={noteToSeller}
        />
      </Center>
    </React.Fragment>
  );
};

const Donate__EditOrderBtn = ({ closeCheckout }) => (
  <button
    className="btn btn--big donate__btn"
    onClick={closeCheckout}>
    Edit Order
  </button>
);
const Donate__OrderScreen = ({
  openCheckout,
  checkingOut,
  paypalError,
  paymentSuccessful,
  buyerName,
  setPaymentSuccessful,
  openBookPreview,
}) => {
  const [donating, setDonating] = useState(false);
  const [orderInfo, setOrderInfo] = useState({
    donation: '0',
    donationWithCurrency: '$0.00',
    bookQuantity: 1,
    firstName: '',
    lastName: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    zip: '',
    phone: '',
    note: '',
  });
  const [buyingBook, setBuyingBook] = useState(false);
  const [checkoutError, setCheckoutError] = useState(false);

  const BOOK_PRICE = 39.99;

  const isNumeric = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  const handleDonateInput = ({ target }) => {
    let donation = parseFloat(target.value.indexOf('$') + 1) || '';
    if (
      (target.value === '' || isNumeric(target.value)) &&
      target.value !== '-'
    ) {
      setOrderInfo({
        ...orderInfo,
        donation: target.value,
        donationWithCurrency: `$${donation}`,
      });
    }
  };

  const handleBookQuantitySelect = ({ target }) => {
    setOrderInfo({
      ...orderInfo,
      bookQuantity: parseInt(target.value),
    });
  };

  const handleBuyerInfoInput = ({ target }) => {
    setOrderInfo({ ...orderInfo, [target.name]: target.value });
  };

  const handleCheckoutClick = () => {
    if (orderTotal() <= 0) {
      setPaymentSuccessful(false);
      setCheckoutError(true);
    } else {
      setCheckoutError(false);
      openCheckout(cartArray(), orderInfo.note);
    }
  };

  const cartArray = () => {
    let cart = [];

    if (donating && orderInfo.donation >= 0.01) {
      cart.push({
        item: 'Donation',
        price: parseFloat(orderInfo.donation).toFixed(2),
        quantity: 1,
      });
    }

    if (buyingBook) {
      cart.push({
        item: 'American Harmony',
        price: BOOK_PRICE,
        quantity: orderInfo.bookQuantity,
      });
    }

    return cart;
  };

  const orderTotal = () =>
    cartArray().reduce(
      (acc, cur) => (acc += cur.price * cur.quantity),
      0
    );

  return (
    <div className={`donate__order-screen`}>
      <Donate__ItemSelection
        donating={donating}
        setDonating={setDonating}
        handleDonateInput={handleDonateInput}
        orderInfo={orderInfo}
        buyingBook={buyingBook}
        setBuyingBook={setBuyingBook}
        handleBookQuantitySelect={handleBookQuantitySelect}
        checkingOut={checkingOut}
        openBookPreview={openBookPreview}
      />

      <Donate__NoteInput
        handleBuyerInfoInput={handleBuyerInfoInput}
        note={orderInfo.note}
        readOnly={checkingOut}
      />

      <Paragraph size="small" className={'u-margin-bottom-tiny'}>
        <Center>
          <b>Total: ${orderTotal().toFixed(2)}</b>
        </Center>
      </Paragraph>

      <Center>
        {!checkingOut && (
          <Donate__CheckoutButton
            handleCheckoutClick={handleCheckoutClick}
            readOnly={checkingOut}
          />
        )}
      </Center>
      <Center>
        {checkoutError && orderTotal() <= 0 && (
          <Donate__CheckoutError />
        )}
      </Center>
      {paymentSuccessful && (
        <Center>
          <Donate__PaymentSuccessful name={buyerName} />
        </Center>
      )}
      {paypalError && (
        <Center>
          <Donate__PayPalError />
        </Center>
      )}
    </div>
  );
};

Donate__Store.defaultProps = {
  hidden: false,
};

const Donate__ToggleDonate = ({
  donating,
  setDonating,
  readOnly,
}) => (
  <FlexBox styles={{ alignItems: 'center' }}>
    <label
      type="text"
      className="donate__label donate__label--nonflex"
      htmlFor="donation">
      Donate
    </label>
    <input
      type="checkbox"
      className="basic-inputs__checkbox"
      id="donation"
      name="donation"
      checked={donating}
      disabled={readOnly}
      onChange={() => setDonating(!donating)}
    />
  </FlexBox>
);

const Donate__DonationInput = ({
  handleDonateInput,
  amount,
  readOnly,
}) => (
  <div className="u-margin-bottom-tiny">
    <label
      type="text"
      className="donate__label donate__label--nonflex"
      htmlFor="amount">
      Amount ($)
    </label>
    <input
      type="text"
      className="form__input donate__input donate__input--nonflex"
      name="amount"
      maxLength="10"
      onChange={handleDonateInput}
      value={amount}
      disabled={readOnly}
    />
  </div>
);

const Donate__ToggleBook = ({
  buyingBook,
  setBuyingBook,
  readOnly,
}) => (
  <FlexBox styles={{ alignItems: 'center' }}>
    <label
      type="text"
      className="donate__label donate__label--nonflex"
      htmlFor="book">
      {' '}
      <b>
        <i>American Harmony</i>
      </b>
    </label>
    <input
      type="checkbox"
      className="basic-inputs__checkbox"
      id="book"
      name="book"
      checked={buyingBook}
      disabled={readOnly}
      onChange={() => setBuyingBook(!buyingBook)}
    />
  </FlexBox>
);

const Donate__BookPrice = () => (
  <span className="donate__book-price">
    $39.99 (shipping included)
  </span>
);

const Donate__BookQuantitySelect = ({
  readOnly,
  handleBookQuantitySelect,
}) => (
  <div className="u-margin-right-small">
    <label
      type="text"
      className="donate__label donate__label--nonflex"
      htmlFor="email">
      Quantity
    </label>
    <select
      id="state"
      name="state"
      className="form__select donate__select donate__input--nonflex"
      placeholder=""
      disabled={readOnly}
      onChange={handleBookQuantitySelect}>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
      <option value={6}>6</option>
      <option value={7}>7</option>
      <option value={8}>8</option>
      <option value={9}>9</option>
      <option value={10}>10</option>
    </select>
  </div>
);

const Donate__PaymentInfo = ({
  handleBuyerInfoInput,
  orderInfo,
  buyingBook,
}) => (
  <div className="donate__payment-info">
    <HeadingTertiary className={'fadeIn'}>
      Payment Info
    </HeadingTertiary>

    <Donate__InputRow>
      <Donate__TextInput
        fieldName="firstName"
        label="First Name"
        handleChange={handleBuyerInfoInput}
        value={orderInfo.firstName}
      />
      <Donate__TextInput
        fieldName="lastName"
        label="Last Name"
        handleChange={handleBuyerInfoInput}
        value={orderInfo.lastName}
      />
    </Donate__InputRow>

    {buyingBook && (
      <React.Fragment>
        <Donate__InputRow>
          <Donate__TextInput
            fieldName="address1"
            label="Address 1"
            handleChange={handleBuyerInfoInput}
            value={orderInfo.address1}
          />
          <Donate__TextInput
            fieldName="address2"
            label="Address 2"
            handleChange={handleBuyerInfoInput}
            value={orderInfo.address2}
          />
        </Donate__InputRow>
        <Donate__InputRow>
          <Donate__TextInput
            fieldName="city"
            label="City"
            handleChange={handleBuyerInfoInput}
            value={orderInfo.city}
          />
          <Donate__StateSelect
            handleBuyerInfoInput={handleBuyerInfoInput}
            value={orderInfo.state}
          />
        </Donate__InputRow>

        <Donate__InputRow>
          <Donate__TextInput
            fieldName="zip"
            label="Zip Code"
            handleChange={handleBuyerInfoInput}
            value={orderInfo.zip}
          />
        </Donate__InputRow>
      </React.Fragment>
    )}
    <Donate__InputRow>
      <Donate__TextInput
        fieldName="email"
        label="E-mail"
        handleChange={handleBuyerInfoInput}
        value={orderInfo.email}
      />
      <Donate__TextInput
        fieldName="phone"
        label="Phone"
        handleChange={handleBuyerInfoInput}
        value={orderInfo.phone}
      />
    </Donate__InputRow>
    <Donate__InputRow>
      <Donate__NoteInput
        handleBuyerInfoInput={handleBuyerInfoInput}
        note={orderInfo.note}
      />
    </Donate__InputRow>
  </div>
);

const Donate__InputRow = ({ children }) => (
  <div className="donate__input-row">{children}</div>
);

const Donate__ItemSelection = ({
  donating,
  setDonating,
  handleDonateInput,
  orderInfo,
  buyingBook,
  setBuyingBook,
  handleBookQuantitySelect,
  checkingOut,
  openBookPreview,
}) => (
  <React.Fragment>
    <Donate__ItemContainer>
      <Donate__InputRow>
        <Donate__ToggleDonate
          donating={donating}
          setDonating={setDonating}
          readOnly={checkingOut}
        />
        <Donate__DonationInput
          handleDonateInput={handleDonateInput}
          amount={orderInfo.donation}
          donating={donating}
          readOnly={checkingOut || !donating}
        />
      </Donate__InputRow>
    </Donate__ItemContainer>

    <Paragraph textSize={'small'}>
      You can also purchase a copy of Nym’s choral anthology{' '}
      <i>American Harmony</i> (2 vols. with CD) at a substantial
      discount.{' '}
      <span className="btn-text" onClick={openBookPreview}>
        Click here for additional information about{' '}
        <b>
          <i>American Harmony</i>
        </b>
        .
      </span>
    </Paragraph>

    <Donate__ItemContainer>
      <FlexBox
        justifyContent={'space-between'}
        styles={{ width: '100%', alignItems: 'center' }}>
        <FlexBox styles={{ flexDirection: 'column' }}>
          <Donate__InputRow>
            <Donate__ToggleBook
              buyingBook={buyingBook}
              setBuyingBook={setBuyingBook}
              readOnly={checkingOut}
            />
            <Donate__BookQuantitySelect
              buyingBook={buyingBook}
              handleBookQuantitySelect={handleBookQuantitySelect}
              readOnly={checkingOut || !buyingBook}
            />
          </Donate__InputRow>
          <Donate__BookPrice />
        </FlexBox>
        <Donate__BookImage />
      </FlexBox>
    </Donate__ItemContainer>
  </React.Fragment>
);

const Donate__ItemContainer = ({ children }) => (
  <div className="donate__item-container">{children}</div>
);

const Donate__BookImage = () => (
  <img
    className="u-margin-left-tiny"
    src={require('../../assets/images/book/book-three-small.jpg')}
    width={100}
  />
);

const Donate__TextInput = ({
  handleChange,
  label,
  fieldName,
  value,
}) => (
  <Donate__InputGroupOuter>
    <Donate__InputGroupInner>
      <label
        type="text"
        className="donate__label"
        htmlFor={fieldName}>
        {label}
      </label>
      <input
        type="text"
        className="form__input donate__input"
        id={fieldName}
        name={fieldName}
        onChange={handleChange}
        value={value}
        maxLength="25"
      />
    </Donate__InputGroupInner>
  </Donate__InputGroupOuter>
);

const Donate__InputGroupOuter = ({ children }) => (
  <span className="donate__input-group--outer">{children}</span>
);

const Donate__InputGroupInner = ({ children }) => (
  <div className="donate__input-group--inner">{children}</div>
);

const Donate__StateSelect = ({ handleBuyerInfoInput }) => (
  <Donate__InputGroupOuter>
    <Donate__InputGroupInner>
      <label type="text" className="donate__label" htmlFor="email">
        State
      </label>
      <select
        id="state"
        name="state"
        className="form__select donate__select"
        placeholder=""
        onChange={handleBuyerInfoInput}>
        <option value=""></option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District Of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>
    </Donate__InputGroupInner>
  </Donate__InputGroupOuter>
);

const Donate__NoteInput = ({
  handleBuyerInfoInput,
  note,
  readOnly,
}) => (
  <React.Fragment>
    <Paragraph textSize="small">
      If you wish, you can write a note to Nym (below) with any
      comments or suggestions.
    </Paragraph>

    <Center>
      <textarea
        className="form__textarea donate__textarea"
        id="note"
        name="note"
        onChange={handleBuyerInfoInput}
        value={note}
        maxLength="500"
        readOnly={readOnly}
      />
    </Center>
  </React.Fragment>
);

const Donate__CheckoutButton = ({ handleCheckoutClick }) => (
  <button
    className="btn btn--big donate__btn"
    onClick={handleCheckoutClick}>
    Checkout
  </button>
);

const Donate__CheckoutError = () => (
  <span className="donate__checkout-error">
    Make a selection in order to checkout.
  </span>
);

const Donate__PayPalError = () => (
  <span className="donate__paypal-error">
    There was an error loading PayPal. Please check your connection
    and try again.
  </span>
);

const Donate__PaymentSuccessful = ({ name }) => (
  <span className="donate__thankyou">
    Payment successful. Thank you so much for your support, {name}!
  </span>
);

Donate.defaultProps = {
  openBookPreview: () => {
    console.log('clicked');
  },
};
