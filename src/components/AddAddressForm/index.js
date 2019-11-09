import React, { useState } from 'react';
import { Form } from '../../ui-library/Form';
import { TextInput } from '../../ui-library/TextInput';
import { useAddressBookFormHook } from '../../hooks/Form';
import { Button } from '../../ui-library/Button';
import { useAddressBookHook } from '../../hooks/AddressBook';

export const AddAddressForm = () => {
  const [validation, setValidation] = useState({});

  const {
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
  } = useAddressBookFormHook();

  const { addAddress } = useAddressBookHook();

  const onFormSubmit = event => {
    event.preventDefault();
    const { error, validationResponse } = getFormValidation();
    setValidation(validationResponse);
    if (error) return false;
    addAddress({
      firstName,
      lastName,
      department,
      phone
    });
    resetForm();
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <TextInput
        id="firstName"
        onChange={setFirstName}
        message={validation.firstName}
        label="First Name"
        value={firstName}
      />
      <TextInput
        id="lastName"
        onChange={setLastName}
        message={validation.lastName}
        label="Last Name"
        value={lastName}
      />
      <TextInput
        id="department"
        onChange={setDepartment}
        message={validation.department}
        label="Department"
        value={department}
      />
      <TextInput
        id="phone"
        onChange={setPhone}
        label="Phone"
        message={validation.phone}
        value={phone}
        type="number"
      />
      <Button>Add</Button>
    </Form>
  );
};
