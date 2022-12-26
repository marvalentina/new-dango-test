import React from 'react';
import {EditIcon} from '../public/icons';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { 
  Main,
  Text,
  Subtitle,
  CardContainer,
  Card,
  Form,
  AddButton,
  Input,
  FlexC,
  EditText,
  EditContainer,
  Link,
  FlexR,
  InputPrice,
  Wrapper,
  Image,
  Price
 } from '../styles/styles';


const InfoCards = () => {
  

  const {register, watch, getValues, handleSubmit} = useForm();
  const [open, setOpen] = useState(false);

  const onSubmit = (body) => {
    console.log(body);
  }

  const handleClick = () => {
    setOpen(true);
  console.log(open);
  };

  console.log(watch());

  return (
    <Main>
      <Form onSubmit={handleSubmit(onSubmit)}>
      <EditContainer>
      {open === true ?
             <EditText onClick={() => setOpen(false)}>Guardar Titulos</EditText>
             :
             <EditText onClick={() => setOpen(true)}>Editar Titulos</EditText>
              }
        
        <EditText onClick={() => setOpen(false)}>Editar tamaño del precio</EditText>
      </EditContainer>
      <CardContainer>
        <Card>
          <Image  src='/img6.jpg' alt=''/>
          <Wrapper>
          <Subtitle>Tourmaline & Eucalyptus Bar Soap</Subtitle>
            {open === true ?
             <Input
             {...register('title')}
             placeholder="product title"
             />
             :
            <></>
              }
            
          </Wrapper>
          <FlexR>
            <Price>$12.00</Price>
            <InputPrice 
            defaultValue={1}
                step="any"
                type="number"
                name="price"
                id="price"
                {...register('price')}
                />
          </FlexR>
          <Text>
          Recharge your skin width the super energizing power of finely crushed tourmaline powder blended width natural complexion
          </Text>
          <AddButton type='submit'>Add to cart</AddButton>
          <Link onClick={() => handleClick()}>Learn More</Link>
        </Card>
    
        
      </CardContainer>
      </Form>
    </Main>
  )
}

export default InfoCards;
