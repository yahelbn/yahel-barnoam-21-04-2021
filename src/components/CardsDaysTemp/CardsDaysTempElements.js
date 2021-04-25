import styled from "styled-components";

export const Row = styled.div`
  margin: 20px 20px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
