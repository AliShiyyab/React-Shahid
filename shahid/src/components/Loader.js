import styled, {keyframes} from 'styled-components';

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  width: 50px;
  height: 50px;
  border: 10px solid #eee;
  border-top: 10px solid #363b3e;
  border-radius: 100%;
  animation: ${spin} 1s infinite linear;
`;
