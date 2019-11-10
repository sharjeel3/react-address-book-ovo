import { useState } from 'react';
import hash from 'object-hash';
import { getSortedAddressBook, getFilteredAddressBook } from './helpers';
import { initialState } from './addressbook';

export const useAddressBookHook = () => {
  const [addressList, setAddressList] = useState([...initialState]);
  const [sortOption, setSortOption] = useState('_createdAt');
  const [filterOption, setFilterOption] = useState('name');
  const [searchTerm, setSearchTerm] = useState('');

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

  const deleteAddress = _id => {
    const index = addressList.findIndex(item => item._id === _id);
    if (index !== -1) {
      // Create a copy before splice
      const newAddressList = addressList.slice();
      newAddressList.splice(index, 1);
      setAddressList(newAddressList);
    }
  };

  const sortAddressList = key => {
    setSortOption(key);
  };

  const filterAddressList = option => {
    setFilterOption(option);
  };

  const searchAddressList = value => {
    setSearchTerm(value);
  };

  const filteredSortedAddressList = getFilteredAddressBook(
    getSortedAddressBook(addressList, sortOption),
    filterOption,
    searchTerm
  );

  return {
    addressList: filteredSortedAddressList,
    addAddress,
    deleteAddress,
    sortAddressList,
    filterAddressList,
    searchAddressList,
    sortOption,
    searchTerm,
    filterOption,
    isAddressBookEmpty: addressList.length === 0
  };
};
