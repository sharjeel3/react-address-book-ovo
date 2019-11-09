import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../ui-library/Text';
import { PersonIcon } from '../../ui-library/PersonIcon';
import { Card } from '../../ui-library/Card';
import { PhoneIcon } from '../../ui-library/PhoneIcon';
import { CogIcon } from '../../ui-library/CogIcon';

export const AddressCard = props => {
  const { firstName, lastName, department, phone } = props;
  return (
    <Card>
      <Text cardText bold>
        <PersonIcon /> {firstName} {lastName}
      </Text>
      <Text>
        <CogIcon /> {department}
      </Text>
      <Text>
        <PhoneIcon /> {phone}
      </Text>
    </Card>
  );
};

AddressCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};
