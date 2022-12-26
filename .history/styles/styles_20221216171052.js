import styled from "styled-components";


export const Main = styled.div`
  display:flex;
  width: 100%;
  font-family: 'Poppins';
  background: blue;
  justify-content: center;
  min-height: 90vh;
`;
export const Form = styled.form`
  display:flex;
`;
export const CardContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
    gap: 20px;
  padding: 20px ;
  margin:15px ;
  font-family: 'Poppins';
  background: white;
  justify-content: left;
  width: auto;
`;

export const Subtitle = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: black;
  margin-right: 15px;

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
  margin-top: 35px;
  margin-bottom: 18px;
`;

export const Wrapper = styled.div`
  text-align: left;
  width: 100%;
  display: flex;
    align-items: center;

    svg{
      cursor: pointer;
    }
`;
export const InputPrice = styled.input`
  width: 20%;
  min-width: 30px;
  margin-left: 15px;
  text-align: center;
`;

export const Text = styled.span`
font-weight: 500;
font-size: 12px;
line-height: 16px;
color: #283540;
margin-bottom: 20px;
`;

export const Link = styled.span`
font-weight: 500;
line-height: 16px;
font-size: 14px;
    color: #470F45;
    text-decoration: underline;
  cursor: pointer;
`;

export const Price = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: black;
`;
export const AddButton = styled.button`
    font-weight: 500;
    line-height: 33px;
    margin-bottom: 15px;
    padding: 0 10px;
    background-color: #F2DFEF;
    border: 1.5px solid #2F2B2E;
    font-size: 14px;
    color: #470F45;
    cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 127px ;
  border-radius: 16px;
  margin-bottom: 20px;
`;

export const Card = styled.div`
  width: 190px;
  height: auto;
  padding: 25px 15px 40px;
  border: solid 2px black;
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
