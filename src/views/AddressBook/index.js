import React from 'react';
import { Container } from '../../ui-library/Container';
import { AddAddressForm } from '../../components/AddAddressForm';
import { useAddressBookHook } from '../../hooks/AddressBook';
import { AddressBook } from '../../components/AddressBook';

export const AddressBookView = () => {
  const { addAddress, addressList } = useAddressBookHook();

  const formProps = { addAddress };
  const addressBookProps = { addressList };

  return (
    <Container>
      <AddAddressForm {...formProps} />
      <AddressBook {...addressBookProps} />
    </Container>
  );
};
