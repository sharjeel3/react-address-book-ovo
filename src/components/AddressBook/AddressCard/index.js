import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../../ui-library/Text';
import { PersonIcon } from '../../../ui-library/PersonIcon';
import { Card } from '../../../ui-library/Card';
import { PhoneIcon } from '../../../ui-library/PhoneIcon';
import { CogIcon } from '../../../ui-library/CogIcon';
import { DeleteIcon } from './styles';

export const AddressCard = props => {
  const { firstName, lastName, department, phone, _id, onDelete } = props;

  const handleDeleteClick = () => {
    onDelete(_id);
  };

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
      <DeleteIcon onClick={handleDeleteClick} />
    </Card>
  );
};

AddressCard.defaultProps = {
  onDelete: Function.prototype
}

AddressCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};
