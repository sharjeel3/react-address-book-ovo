import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from '../../ui-library/TextInput';
import { useAddressBookFormHook } from '../../hooks/Form';
import { Button } from '../../ui-library/Button';
import { StyledForm } from './styles';
import { Text } from '../../ui-library/Text';

export const AddAddressForm = props => {
  const { onAdd } = props;

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

  const onFormSubmit = event => {
    event.preventDefault();
    const { error, validationResponse } = getFormValidation();
    setValidation(validationResponse);
    if (error) return false;
    onAdd({
      firstName,
      lastName,
      department,
      phone
    });
    resetForm();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Text heading>Add a new address here</Text>
      <TextInput
        id="firstName"
        onChange={setFirstName}
        message={validation.firstName}
        label="First name *"
        value={firstName}
      />
      <TextInput
        id="lastName"
        onChange={setLastName}
        message={validation.lastName}
        label="Last name *"
        value={lastName}
      />
      <TextInput
        id="department"
        onChange={setDepartment}
        message={validation.department}
        label="Department *"
        value={department}
      />
      <TextInput
        id="phone"
        onChange={setPhone}
        label="Phone *"
        message={validation.phone}
        value={phone}
        type="number"
      />
      <Button>Add</Button>
    </StyledForm>
  );
};

AddAddressForm.propTypes = {
  onAdd: PropTypes.func.isRequired
};
