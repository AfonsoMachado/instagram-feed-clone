import styled from 'styled-components/native';

export const Small = styled.Image`
  width: 100%;
  /* proipriedade css do ratio */
  aspect-ratio: ${(props) => props.ratio};
`;
