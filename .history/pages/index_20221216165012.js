import React from 'react';
import {EditIcon} from '../public/icons'
import { useForm } from 'react-hook-form';
import { 
  Main,
  Text,
  Subtitle,
  CardContainer,
  Card,
  Form,
  AddButton,
  FlexC,
  Link,
  FlexR,
  InputPrice,
  Wrapper,
  Image,
  Price
 } from '../styles/styles';


const InfoCards = () => {

  const {register, handleSubmit} = useForm();

  const data = [
    {
      key: '1',
      title: 'Tourmaline & Eucalyptus Bar Soap',
      price: 12.00,
      text: 'Recharge your skin width the super energizing power of finely crushed tourmaline powder blended width natural complexion',
    },
    {
      key: '2',
      title: 'Tourmaline & Eucalyptus Bar Soap',
      price: 12.00,
      text: 'Recharge your skin width the super energizing power of finely crushed tourmaline powder blended width natural complexion',
    },
    {
      key: '3',
      title: 'Tourmaline & Eucalyptus Bar Soap',
      price: 12.00,
      text: 'Recharge your skin width the super energizing power of finely crushed tourmaline powder blended width natural complexion',
    },
    {
      key: '4',
      title: 'Tourmaline & Eucalyptus Bar Soap',
      price: 12.00,
      text: 'Recharge your skin width the super energizing power of finely crushed tourmaline powder blended width natural complexion',
    },
    {
      key: '5',
      title: 'Tourmaline & Eucalyptus Bar Soap',
      price: 12.00,
      text: 'Recharge your skin width the super energizing power of finely crushed tourmaline powder blended width natural complexion',
    },
    {
      key: '6',
      title: 'Tourmaline & Eucalyptus Bar Soap',
      price: 12.00,
      text: 'Recharge your skin width the super energizing power of finely crushed tourmaline powder blended width natural complexion',
    }
  ]


  return (
    <Main>
      <Form>
      <CardContainer>
          {data.map((product) => (
        <Card key={product.key}>
          <Image  src='/ball1.png' alt=''/>
          <Wrapper>
            <Subtitle>{product.title}</Subtitle>
            <EditIcon />
          </Wrapper>
          <FlexR>
            <Price>$123</Price>
            <InputPrice 
            defaultValue={1}
                step="any"
                type="number"
                name="price"
                id="price"
                />
          </FlexR>
          <Text>
            lomebf sdid soubf focnfcna fcdnfd sdcoudn d shybd casbfd sbsbdx
            sb db cdhgfdhhfd dshadfcnfdsh asdfuhfbcdbd cduhfdbnfcdbc cduhfdbnfcdbc
            bdsssivviduvb
          </Text>
          <AddButton type='submit'>Add to cart</AddButton>
          <Link>Learn More</Link>
        </Card>
        ))}
        
      </CardContainer>
      </Form>
    </Main>
  )
}

export default InfoCards;
