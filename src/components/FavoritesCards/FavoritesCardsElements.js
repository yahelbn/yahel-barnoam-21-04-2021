import styled from "styled-components";

export const Row = styled.div`
  margin: 20px 2px;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  width: 100%;

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
