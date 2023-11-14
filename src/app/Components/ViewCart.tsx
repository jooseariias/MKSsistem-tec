import styled from 'styled-components';
import { montserrat } from '@/utils/fonts';
export interface Product {
  id: number;
  name: string;
  price: number;
  photo: string;
  quantity: number; 
}

import CardCart from './CardCart';
import useCart from '../Hooks/useCart';
import { useState } from 'react';

export default function ViewCart() {
  ; const { getCart, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const [forceUpdate, setForceUpdate] = useState(0);
  const priceTotal = getTotalPrice();
  const cart: Product[] = getCart();

  const handleRemove = (productId: number) => {
    removeFromCart(productId);
    setForceUpdate((prev) => prev + 1);
  };
  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
  }

  return (
    <div className='cont'>
      <Container className='cont'>
        <Header>
          <Title>Carrinho de compras</Title>
        </Header>
        <Containertwo>
          {cart.map((product) => (
            <CardCart key={product.id} product={product} onRemove={() => handleRemove(product.id)} handleUpdateQuantity={handleUpdateQuantity} />
          ))}
        </Containertwo>
        <ContainerFre>
          <Text>Total:</Text>
          <Price>{priceTotal}</Price>
        </ContainerFre>
        <AddCart>FinalizarCompra</AddCart>
      </Container>
    </div>
  );
}


export const Container = styled.div`
  width: 440px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: space-between;
  align-items: center;
  background-color: #0F52BA;
  min-height: 100vh;
`;

export const Containertwo = styled.div`
margin-bottom: 20px;
`;

export const ContainerFre = styled.div`
display: flex;
justify-content: space-evenly;
margin-bottom: 20px;
color: white;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 30px;
`;

export const Title = styled.h2`
  font-family: '${montserrat}';
  font-size: 27px;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
`;


export const Text = styled.h2`
  font-family: '${montserrat}';
  font-size: 28px;
 font-weight: 700;
 line-height: 15px;
 letter-spacing: 0px;
margin-right: 100px;

`;
export const Price = styled.h2`
  font-family: '${montserrat}';
  font-size: 28px;
 font-weight: 700;
 line-height: 15px;
 letter-spacing: 0px;
`;

const AddCart = styled.button`
  font-family: '${montserrat}';
  height: 97px;
  width: 440px;
  background-color: black;
  color :white;
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: center;
  border: none;
`;