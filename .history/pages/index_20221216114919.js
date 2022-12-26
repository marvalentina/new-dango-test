import React from 'react';
import Image from 'next/image';
import EditIcon from '../public/icons'
import { 
  Main,
  Content,
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
          
          <Wrapper>
            <Subtitle>hola</Subtitle>
            <EditIcon />
          </Wrapper>
          <FlexR>
            <Price>123</Price>
            <InputPrice />
          </FlexR>
          <Text>
            lomebf sdid soubf focnfcna fcdnfd sdcoudn d shybd casbfd sbsbdx
            sb db cdhgfdhhfd dshadfcnfdsh asdfuhfbcdbd cduhfdbnfcdbc cduhfdbnfcdbc
            bdsssivviduvb
          </Text>
          <AddButton>Add to cart</AddButton>
          <Link>Learn More</Link>
        </Card>
      </CardContainer>
    </Main>
  )
}

export default InfoCards;
