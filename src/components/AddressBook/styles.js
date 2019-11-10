import styled from 'styled-components';
import { aboveMedia } from '../../ui-library/media';

export const Root = styled.div`
  padding: 2em 0;
  ${aboveMedia('xlg')`
    flex-basis: 50%;
    padding: 1em 2em 2em;
  `}
`;
