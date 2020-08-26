import styled from 'styled-components/native';

export const Small = styled.ImageBackground`
  width: 100%;
  /* background: #eee; */
  /* proipriedade css do ratio */
  aspect-ratio: ${(props) => props.ratio};
`;

export const Original = styled.Image`
  width: 100%;
  /* proipriedade css do ratio */
  aspect-ratio: ${(props) => props.ratio};
`;
