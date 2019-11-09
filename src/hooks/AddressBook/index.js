import { useState } from 'react';

export const useAddressBookHook = () => {
  const [addressList, setAddressList] = useState([]);

  const addAddress = props => {
    const { firstName, lastName, department, phone } = props;
    setAddressList([
      ...addressList,
      {
        firstName,
        lastName,
        department,
        phone,
        _createdAt: new Date().getTime()
      }
    ]);
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
