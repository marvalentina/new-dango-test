import styled from "styled-components";


export const Main = styled.div`
  display:flex;
  flex-direction: row;
  width: 100%;
  font-family: 'Poppins';
  height: 100%;
  min-height: 100vh;
`;

export const Subtitle = styled.button`
font-weight: 500;
font-size: 18px;
line-height: 27px;
color: #283540;
margin-top: 50px;
`;

export const FlexC = styled.div`
  display:flex;
  flex-direction: column;
  align-items: flex-start;
    margin-left: 32px;
`;

export const Aling = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
`

export const Title = styled.span`
font-weight: 600;
font-size: 22px;
line-height: 33px;
color: #283540;
`;

export const BackgroundContainer = styled.div`
  background: #EFF3F6;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 42px 0 60px;
`;
