import React from 'react';
import PropTypes from 'prop-types';
import { CardText, NormalText } from './styles';

const getTextComponent = props => {
  const { cardText } = props;
  switch (true) {
    case cardText:
      return CardText;
    default:
      return NormalText;
  }
};

export const Text = props => {
  const { children, cardText, bold } = props;

  const C = getTextComponent({ cardText });

  const textProps = { bold };

  return <C {...textProps}>{children}</C>;
};

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  cardText: PropTypes.bool,
  bold: PropTypes.bool
};
