import { urlOrigin } from '../../assets/js/urlOrigin';

export const sendEmailFetch = (orderData) => {
  return window.fetch(
    `${urlOrigin(window.location.hostname)}/orderSuccess`,
    {
      body: JSON.stringify(orderData),
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
    }
  );
};
