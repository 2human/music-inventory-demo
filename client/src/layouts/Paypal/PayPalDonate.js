import React from 'react';

export const PayPalDonate = ({ className, styles }) => (
  <form
    action="https://www.paypal.com/donate"
    method="post"
    target="_blank"
    className={className}
    style={{ ...styles }}>
    <input type="hidden" name="business" value="LNPBY46FCSAF2" />
    <input type="hidden" name="no_recurring" value="0" />
    <input type="hidden" name="currency_code" value="USD" />
    <input
      type="hidden"
      name="item_name"
      value="If you'd like to support the completion of further inventories to be added to this database, please contribute!"
    />
    <input
      type="image"
      src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
      border="0"
      name="submit"
      title="PayPal - The safer, easier way to pay online!"
      alt="Donate with PayPal button"
    />
    <img
      alt=""
      border="0"
      src="https://www.paypal.com/en_US/i/scr/pixel.gif"
      width="1"
      height="1"
    />
  </form>
);

PayPalDonate.defaultProps = {
  className: '',
  styles: {},
};
