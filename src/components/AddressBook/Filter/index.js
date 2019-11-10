import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../../../ui-library/Dropdown';
import { TextInput } from '../../../ui-library/TextInput';

const options = [
  {
    name: 'By Name',
    value: 'name'
  },
  {
    name: 'By Department',
    value: 'department'
  }
];

export const AddressBookFilter = props => {
  const { onFilterChange, filterOption, searchTerm, onSearch } = props;
  return (
    <>
      <TextInput
        value={searchTerm}
        onChange={onSearch}
        type="search"
        id="search-address-book"
        label="Search address book"
      />
      <Dropdown
        onChange={onFilterChange}
        value={filterOption}
        options={options}
        label="Filter by"
        id="filter-options-address-book"
      />
    </>
  );
};

AddressBookFilter.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  filterOption: PropTypes.string.isRequired
};
