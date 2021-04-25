import styled from "styled-components";
export const ConatinerWeather = styled.div`
  background: ${({ isDarkMode }) => (isDarkMode ? "dimgray" : "white")};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

export const SearchInput = styled.input`
  margin-top: 3rem;
  border-radius: 15px;
  padding: 10px 10px;
  border: solid 1.5px gray;
  margin-bottom: 50px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
`;

export const ButtonStyled = styled.button`
  margin: 10px 15px;
  height: fit-content;
  //background: mediumorchid;
  background: ${({ isDarkMode }) => (isDarkMode ? "dimgray" : "mediumorchid")};
  color: ${({ isDarkMode }) => (isDarkMode ? "white" : "#1b1924")};
  border: ${({ isDarkMode }) => (isDarkMode ? "solid 1px white" : "none")};

  padding: 10px 10px;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.9);

  &:disabled {
    background-color: #e2e3e2;
  }
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: mediumorchid;
    box-shadow: 0px 15px 20px mediumorchid;
    color: #fff;
    transform: translateY(-7px);
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`;

export const MessageText = styled.div`
  margin-top: 20px;
  font-size: 15px;
  color: ${({ error }) => (error ? "salmon" : "green")};
  border: ${({ error }) => (error ? "1px solid salmon" : "1px solid green")};

  background-color: mintcream;
  padding: 10px 10px;
  border-radius: 20px;
`;
