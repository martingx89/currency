export const convertPLNToUSD = (PLN) => {
  if (typeof PLN === 'string' || PLN === undefined) {
    return NaN;
  }

  if (PLN < 0) {
    return '$0.00';
  }

  if (
    (typeof PLN === 'object' && typeof PLN !== 'string' && typeof PLN !== 'number') ||
    PLN === [] ||
    PLN === null ||
    typeof PLN === 'function'
  ) {
    return 'Error';
  }
  const PLNtoUSD = PLN / 3.5;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
};
