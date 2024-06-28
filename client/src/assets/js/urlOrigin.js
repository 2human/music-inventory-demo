/**
 *
 * @param {*} hostname Host name of current environment.
 * @returns URL origin for requests.
 */
export const urlOrigin = (hostname) => {
  if (hostname === 'localhost') {
    return 'http://localhost';
  } else if (hostname.includes('ec2-3-128-55-111')) {
    return 'http://ec2-3-128-55-111.us-east-2.compute.amazonaws.com:8080';
  } else return 'https://www.earlyamericansacredmusic.org';
};
