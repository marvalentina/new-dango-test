import styled from "styled-components";


export const Main = styled.div`
  display:flex;
  width: 100%;
  font-family: 'Poppins';
  background: blue;
  justify-content: center;
  min-height: 90vh;
`;

export const CardContainer = styled.div`
  display:flex;
  flex-direction: row;
  width: 100%;
  padding: 20px ;
  margin:15px ;
  font-family: 'Poppins';
  background: red;
  justify-content: center;
`;

export const Subtitle = styled.span`
font-weight: 500;
font-size: 18px;
line-height: 27px;
color: white;
`;

export const FlexC = styled.div`
  display:flex;
  flex-direction: column;
  align-items: flex-start;
    margin-left: 32px;
`;
export const FlexR = styled.div`
  display:flex;
  flex-direction: row;
`;

export const Wrapper = styled.div`
  display:flex;
`;
export const Input = styled.input`
`;

export const Title = styled.span`
font-weight: 600;
font-size: 22px;
line-height: 33px;
color: #283540;
`;

export const Price = styled.span`
font-weight: 600;
font-size: 17px;
line-height: 20px;
color: Black;
`;

export const Card = styled.div`
  width: 180px;
  height: auto;
  padding: 40px 15px 60px;
  border: solid 2px black;
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
