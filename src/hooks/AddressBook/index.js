import { useState } from 'react';
import hash from 'object-hash';

export const useAddressBookHook = () => {
  const [addressList, setAddressList] = useState([]);

  const addAddress = props => {
    const { firstName, lastName, department, phone } = props;
    const newAddress = {
      firstName,
      lastName,
      department,
      phone,
      _createdAt: new Date().getTime()
    };
    const _id = hash(newAddress);
    setAddressList([...addressList, { ...newAddress, _id }]);
  };

  const removeAddress = () => {};

  const sortAddressList = () => {};

  const filterAddressList = () => {};

  return {
    addressList,
    addAddress,
    removeAddress,
    sortAddressList,
    filterAddressList
  };
};
