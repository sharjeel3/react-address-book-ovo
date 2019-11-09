import React from 'react';
import PropTypes from 'prop-types';
import { Root } from './styles';
import { AddressCard } from './AddressCard';

export const AddressBook = props => {
  const { addressList, onDelete } = props;
  if (!addressList || addressList.length === 0) {
    return <Root>No addresses found. Start by creating a new one.</Root>;
  }

  return (
    <Root>
      {addressList.map((address, ii) => {
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
      })}
    </Root>
  );
};

AddressBook.propTypes = {
  addressList: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};
