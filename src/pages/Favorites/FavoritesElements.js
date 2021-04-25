import styled from "styled-components";
export const ConatinerFav = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    height: 900px;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
  background: ${({ isDarkMode }) => (isDarkMode ? "dimgray" : "white")};
`;

export const Column = styled.div`
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderH1 = styled.h1`
  margin-bottom: 35px;
  text-shadow: 1px 1px 2px #000000;
  letter-spacing: 0.2rem;

  color: ${({ isDarkMode }) => (isDarkMode ? "honeydew" : "rosybrown")};

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;
