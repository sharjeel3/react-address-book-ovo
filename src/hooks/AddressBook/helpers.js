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

/***
 * Simple function to get the filtered addresses
 * @param list: array to filter
 * @param key: filter option
 * @param searchTerm: string to search for
 * @returns a new array with filtered results
 */
export const getFilteredAddressBook = (list, key = 'name', searchTerm) => {
  if (!searchTerm) return list;

  return list.filter(address => {
    const { firstName, lastName, department } = address;
    switch (key) {
      case 'name':
        return firstName.indexOf(searchTerm) !== -1 || lastName.indexOf(searchTerm) !== -1;
      case 'department':
        return department.indexOf(searchTerm) !== -1;
      default:
        return true;
    }
  });
};
