import React from 'react';
import { Container } from '../../ui-library/Container';
import { AddAddressForm } from '../../components/AddAddressForm';
import { useAddressBookHook } from '../../hooks/AddressBook';
import { AddressBook } from '../../components/AddressBook';

export const AddressBookView = () => {
  const {
    addAddress,
    addressList,
    deleteAddress,
    sortAddressList,
    filterAddressList,
    searchAddressList,
    sortOption,
    searchTerm,
    filterOption,
    isAddressBookEmpty
  } = useAddressBookHook();

  const formProps = { onAdd: addAddress };

  const addressBookProps = {
    addressList,
    onDelete: deleteAddress,
    onSort: sortAddressList,
    onSearch: searchAddressList,
    onFilterChange: filterAddressList,
    sortOption,
    searchTerm,
    filterOption,
    isAddressBookEmpty
  };

  return (
    <Container>
      <AddAddressForm {...formProps} />
      <AddressBook {...addressBookProps} />
    </Container>
  );
};
