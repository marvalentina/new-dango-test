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
  Slider,
  FlexR,
  InputPrice,
  Wrapper,
  Image,
  Price
 } from '../styles/styles';


const InfoCards = () => {
  

  const {register, watch, getValues, handleSubmit} = useForm();
  const [open, setOpen] = useState(false);
  const [changeTitle, setChangeTitle] = useState(false);
  const [value, setValue] = useState(12);
  //const [price, setPrice] = useState(0);
  const [newSize, setNewSize] = useState(false);
  var totalPrice = 0;

  const data = [
    {
      key: '1',
      title: 'Tourmaline & Argan Oil Bar Soap',
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
  

  const onSubmit = (body) => {
    console.log(body);
  }

  const handleClick = () => {
    setOpen(true);
  console.log(open);
  };

  useEffect(() => {
    console.log(watch(`price${product?.key}`));
  });

  return (
    <Main>
      <Form onSubmit={handleSubmit(onSubmit)}>
      <EditContainer>
      {open === true ?
             <EditText onClick={() => setOpen(false)}>Guardar Titulos</EditText>
             :
             <EditText onClick={() => setOpen(true)}>Editar Titulos</EditText>
              }
           {newSize === true ?
           <FlexC>
             <EditText onClick={() => setNewSize(false)}>Guardar Cambios</EditText>
             <Slider value={value} onChange={e => setValue(e.target.value)}/>
            </FlexC>
             :
             <EditText onClick={() => setNewSize(true)}>Editar tamaño del precio</EditText>
              }
      </EditContainer>
      <CardContainer>
          {data.map((product) => (
        <Card key={product.key}>
          <Image  src={product.image} alt=''/>
          <Wrapper>
          {changeTitle === true ?
             <Subtitle>{watch(`title${product.key}`)}</Subtitle>
             :
             <Subtitle>{product.title}</Subtitle>
              }
                    {open === true ?
                       <Input
                       {...register(`title${product.key}`)}
                       defaultValue={product.title}
                       onInput={() => setChangeTitle(true)}
                       /> 
             :
             <></>
              }

          </Wrapper>
          <FlexR>
            <Price font={value}>${product.price}</Price>
            <InputPrice 
            defaultValue={1}
                step="any"
                type="number"
                name="price"
                id="price"
                {...register(`price${product.key}`)}
                />
                {totalPrice = parseInt(totalPrice) + (parseInt(product?.price) * parseFloat(watch(`price${product?.key}`)))}
          </FlexR>
          <Text>
          {product.text}
          </Text>
          <AddButton type='submit'>Add to cart</AddButton>
          <Link onClick={() => handleClick()}>Learn More</Link>
        </Card>
        ))}

      </CardContainer>
      <Text>
          {parseInt(totalPrice)}
          </Text>
      </Form>
    </Main>
  )
}

export default InfoCards;
