import React from 'react';
import Image from 'next/image';
import EditIcon from '../public/icons'
import { 
  Main,
  Text,
  Subtitle,
  CardContainer,
  Card,
  AddButton,
  FlexC,
  Link,
  FlexR,
  InputPrice,
  Wrapper,
  Price
 } from '../styles/styles';


const InfoCards = () => {



  return (
    <Main>
      <CardContainer>
        <Card>
          <Image width={100} height={100}  src='/ball1.png' alt=''/>
          <Wrapper>
            <Subtitle>hola</Subtitle>
            <EditIcon />
          </Wrapper>
        </Card>
        
      </CardContainer>
    </Main>
  )
}

export default InfoCards;
