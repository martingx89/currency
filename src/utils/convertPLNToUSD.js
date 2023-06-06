export const convertPLNToUSD = (PLN) => {
  if (typeof PLN === 'string' || PLN === undefined) {
    return NaN;
  }
  const PLNtoUSD = PLN / 3.5;
  debugger;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
};
