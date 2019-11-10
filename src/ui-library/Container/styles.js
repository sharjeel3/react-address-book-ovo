import styled from 'styled-components';
import { aboveMedia } from '../media';

export const StyledContainer = styled.div`
  padding: 0 1em;
  max-width: 768px;
  margin: auto;
  ${aboveMedia('xlg')`
    display: flex;
    max-width: 1140px;
  `}
`;
