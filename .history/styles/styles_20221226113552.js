import styled from "styled-components";


export const Main = styled.div`
  display:flex;
  width: 100%;
  font-family: 'Poppins';
  justify-content: center;
  min-height: 90vh;
  flex-direction: column;
`;
export const Form = styled.form`
  display:flex;
  flex-direction: column;
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
  flex-direction: column;

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

export const Input = styled.input`
  width: 100%;
margin-top: 10px;
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
  font-size: ${(props) => ` ${props.font}px`};
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

export const EditContainer = styled.div`
  width: 100%;
margin: 10px;
padding: 10px ;
display: flex ;
flex-direction: row;
align-items: center;
justify-content: space-around;
`;

export const EditText = styled.a`
font-weight: 500;
line-height: 33px;
padding: 0 10px;
background-color: transparent;
border: 1px solid #2F2B2E;
font-size: 14px;
color: #470F45;
cursor: pointer;
`;

export const Slider = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  height: 12px;
  border-radius: 40px;
  background: ${(props) =>
    `linear-gradient(to right, #ff9800 0%, #ff9800 ${props.value}%, #fff ${props.value}%, #fff 100%);`};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }

  ::-moz-range-thumb {
    width: 24px;
    height: 24px;
    -moz-appearance: none;
    background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }
`;