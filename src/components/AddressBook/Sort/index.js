import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../../../ui-library/Dropdown';

const options = [
  {
    name: 'Default',
    value: '_createdAt'
  },
  {
    name: 'Last Name',
    value: 'lastName'
  }
];

export const AddressBookSort = props => {
  const { onSort, sortOption } = props;
  return <Dropdown onChange={onSort} value={sortOption} options={options} id="sort-address-book" />;
};

AddressBookSort.propTypes = {
  onSort: PropTypes.func.isRequired,
  sortOption: PropTypes.string.isRequired
};
