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
          <Image width={100} height={100}  src='https://images.unsplash.com/photo-1571354188019-9a5038b88457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt=''/>
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
