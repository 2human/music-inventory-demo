export const resultSegment = (
  results,
  resultsPerPage,
  pageNumber
) => {
  const firstResultIndex = (pageNumber - 1) * resultsPerPage;
  const lastResultIndex = resultsPerPage * pageNumber;
  return results.slice(firstResultIndex, lastResultIndex);
};

const hasNoDecimal = (sourceNumberStr) =>
  sourceNumberStr.indexOf('.') === -1;

/**
 *
 * @param {*} sourceNumber Source number as double.
 * @returns Source number as string to two decimal places.
 */
export const parsedSourceNumber = (sourceNumber) => {
  const sourceStr = '' + sourceNumber;
  if (hasNoDecimal(sourceStr)) return sourceStr;
  else {
    const decimalIndex = sourceStr.indexOf('.');
    const decimalDigits = sourceStr.slice(decimalIndex + 1);

    if (decimalDigits.length < 2) {
      //not enough decimal places
      return sourceStr + '0';
    } else return sourceStr; //already enough decimal places
  }
};
