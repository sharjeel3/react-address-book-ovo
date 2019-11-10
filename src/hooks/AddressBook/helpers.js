/***
 * The default sorting is by time with most recent item first.
 * @param list: array to sort
 * @param key : sort option
 * @returns a new array sorted by given key
 */
export const getSortedAddressBook = (list, key = '_createdAt') => {
  return list.slice().sort((a, b) => {
    if (key === '_createdAt') return b[key] - a[key];
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
};
