import styled from "styled-components";
export const ConatinerWeekChangeTemp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  width: 80%;
  height: 100%;
  padding: 0;
  margin: 0;
`;

export const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const BottomRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const LeftSide = styled.div`
  float: left;
  margin: 20px 20px;
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const RightSide = styled.div`
  float: right;
  margin: 20px 20px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const Label = styled.label`
  padding: 4px 10px;
`;
export const ImgWrap = styled.div`
  max-width: 100px;
  height: 100px;
  margin-bottom: 35px;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const ButtonStyled = styled.button`
  background: ${({ isDarkMode }) => (isDarkMode ? "dimgray" : "mediumorchid")};
  color: ${({ isDarkMode }) => (isDarkMode ? "white" : "#1b1924")};
  border: ${({ isDarkMode }) => (isDarkMode ? "solid 1px white" : "none")};
  margin: 10px 15px;
  height: fit-content;
  padding: 10px 10px;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1b1924;
  margin-bottom: 30px;
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

export const HeaderH1 = styled.h1`
  margin-bottom: 35px;
  text-shadow: 1px 1px 2px #000000;
  letter-spacing: 0.2rem;

  color: ${({ isDarkMode }) => (isDarkMode ? "honeydew" : "rosybrown")};

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;
