"use client"
import styled from 'styled-components';
import { BsFillCartFill } from 'react-icons/bs';
import { montserrat } from '@/utils/fonts';
import Drawer from '@mui/material/Drawer';
import useDrawer from "@/app/Hooks/useDrawer"
import { useState, useEffect } from 'react';
import ViewCart from './ViewCart';

interface Product {
  quantity: number;

}

export default function Header(): JSX.Element {

  const [cartQuantity, setCartQuantity] = useState(0);
  const { toggleDrawer, drawerProps } = useDrawer({});
  
  useEffect(() => {
    const currentCart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const quantity = currentCart.reduce((total, product) => total + product.quantity, 0);
    setCartQuantity(quantity);
  }, []);;


  return (
    <header>
      <Container>
        <Logo>
          <TextUne>MKS</TextUne>
          <TextTwo>Sistemas</TextTwo>
        </Logo>
        <ButtonCard onClick={toggleDrawer('right', true)}>
          <BsFillCartFill />
          {cartQuantity}
        </ButtonCard>
      </Container>
      <Drawer {...drawerProps('right')}>
        <ViewCart />
      </Drawer>
    </header>
  );
}

const Container = styled.div`
  height: 101px;
  display: flex;
  justify-content: space-between;
  background-color: #0F52BA;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
`;

const Logo = styled.div`
  display: flex;
`;

const TextUne = styled.h1`
  color: white;
  font-family: '${montserrat}';
  size: 40px;
`;

const TextTwo = styled.h3`
  color: #b6b2b2;
  width: 300;
  size: 20px;
  line-height: 19px;
  padding-top: 15px;
  padding-left: 5px;
  font-weight: 300;
`;

const ButtonCard = styled.button`
  background-color: white;
  width: 90px;
  height: 45px;
  border-radius: 5px;
  border: none;
  font-size: 15px;
  
`;