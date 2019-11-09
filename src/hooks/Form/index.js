import { useState } from 'react';

export const useAddressBookFormHook = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [department, setDepartment] = useState('');
  const [phone, setPhone] = useState('');

  const getFormValidation = () => {
    // Should be enhanced with proper validation rules
    const validate = value => value !== '';

    const validationResponse = {
      firstName: validate(firstName) ? '' : 'First name is required',
      lastName: validate(lastName) ? '' : 'Last name is required',
      department: validate(department) ? '' : 'Department name is required',
      phone: validate(phone) ? '' : 'Phone is required'
    };

    const error = Object.values(validationResponse).filter(item => item).length > 0;

    return { error, validationResponse };
  };

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setDepartment('');
    setPhone('');
  };

  return {
    firstName,
    lastName,
    department,
    phone,
    setFirstName,
    setLastName,
    setDepartment,
    setPhone,
    getFormValidation,
    resetForm
  };
};
