import styled from 'styled-components';
import { Form } from '../../ui-library/Form';
import { aboveMedia } from '../../ui-library/media';

export const StyledForm = styled(Form)`
  ${aboveMedia('xlg')`
    flex-basis: 50%;
    padding: 1em 2em 2em;
  `}
`;
