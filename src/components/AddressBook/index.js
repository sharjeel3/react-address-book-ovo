import React from 'react';
import PropTypes from 'prop-types';
import { Root } from './styles';
import { AddressCard } from './AddressCard';
import { AddressBookSort } from './Sort';
import { AddressBookFilter } from './Filter';
import { Text } from '../../ui-library/Text';

export const AddressBook = props => {
  const {
    addressList,
    onDelete,
    onSort,
    sortOption,
    searchTerm,
    onSearch,
    onFilterChange,
    filterOption,
    isAddressBookEmpty
  } = props;

  const hasFilteredAddresses = Array.isArray(addressList) && addressList.length > 0;

  // No need to check isAddressBookEmpty as search input is not rendered then
  const errorMessage =
    searchTerm.length > 0 && !hasFilteredAddresses
      ? 'No addresses found. Try searching a different combination'
      : 'No addresses found. Start by creating a new one.';

  return (
    <Root>
      {isAddressBookEmpty ? null : (
        <>
          <AddressBookSort onSort={onSort} sortOption={sortOption} />
          <AddressBookFilter
            filterOption={filterOption}
            onFilterChange={onFilterChange}
            onSearch={onSearch}
            searchTerm={searchTerm}
          />
        </>
      )}
      {hasFilteredAddresses ? (
        addressList.map((address, ii) => {
          const { firstName, lastName, department, phone, _id } = address;
          return (
            <AddressCard
              key={`${firstName}${ii}`}
              firstName={firstName}
              lastName={lastName}
              department={department}
              phone={phone}
              _id={_id}
              onDelete={onDelete}
            />
          );
        })
      ) : (
        <Text>{errorMessage}</Text>
      )}
    </Root>
  );
};

AddressBook.propTypes = {
  addressList: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  sortOption: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
  filterOption: PropTypes.string.isRequired,
  isAddressBookEmpty: PropTypes.bool.isRequired
};
