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
  

  const {register, watch, handleSubmit} = useForm();
  const [open, setOpen] = useState(false);

  const onSubmit = (body) => {
    console.log(body);
  }

  const handleClick = () => {
    setOpen(true);
  console.log(open);

  };

  const getValue = () =>{
    let title = document?.getElementById("title");
    let newTitle = title.value;

    let result = document.getElementById("resultTitle");
    result.innerText = newTitle;
  }


  const data = [
    {
      key: '1',
      title: 'Tourmaline & Eucalyptus Bar Soap',
      price: 12.00,
      text: 'Recharge your skin width the super energizing power of finely crushed tourmaline powder blended width natural complexion',
      image:'/img1.jpg'
    },
    {
      key: '2',
      title: 'Tourmaline & Argan Oil Bar Soap',
      price: 12.00,
      text: 'Recharge your skin width the super energizing power of finely crushed tourmaline powder blended width natural complexion',
      image:'/img2.jpg'
    },
    {
      key: '3',
      title: 'Tourmaline & Eucalyptus Bar Soap',
      price: 12.00,
      text: 'Recharge your skin width the super energizing power of finely crushed tourmaline powder blended width natural complexion',
      image:'/img3.jpg'
    },
    {
      key: '4',
      title: 'Tourmaline & Eucalyptus Bar Soap',
      price: 12.00,
      text: 'Recharge your skin width the super energizing power of finely crushed tourmaline powder blended width natural complexion',
      image:'/img4.jpg'
    },
    {
      key: '5',
      title: 'Tourmaline & Eucalyptus Bar Soap',
      price: 12.00,
      text: 'Recharge your skin width the super energizing power of finely crushed tourmaline powder blended width natural complexion',
      image:'/img5.jpg'
    },
    {
      key: '6',
      title: 'Tourmaline & Eucalyptus Bar Soap',
      price: 12.00,
      text: 'Recharge your skin width the super energizing power of finely crushed tourmaline powder blended width natural complexion',
      image:'/img6.jpg'
    }
  ]


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
          {data.map((product) => (
        <Card key={product.key}>
          <Image  src={product.image} alt=''/>
          <Wrapper>
            <Subtitle id="resultTitle"></Subtitle>
            
            {open === true ?
             <Input
             type="text"
             onInput={getValue()}
             defaultValue={product.title}
             id="title"
             />
             :
            <></>
              }
            
          </Wrapper>
          <FlexR>
            <Price>${product.price}</Price>
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
          {product.text}
          </Text>
          <AddButton type='submit'>Add to cart</AddButton>
          <Link onClick={() => handleClick()}>Learn More</Link>
        </Card>
        ))}
        
      </CardContainer>
      </Form>
    </Main>
  )
}

export default InfoCards;
