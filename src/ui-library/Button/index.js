import React from 'react';
import { StyledButton } from './styles';
import PropTypes from 'prop-types';

export const Button = props => {
  const { children, onClick } = props;

  const handleClick = event => {
    // Local handler may not be needed but kept it here for completeness
    onClick(event);
  };

  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};

Button.defaultProps = {
  onClick: Function.prototype
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onClick: PropTypes.func.isRequired
};
