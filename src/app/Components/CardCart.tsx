import styled from 'styled-components';
import { montserrat } from '@/utils/fonts';
import  { useState } from 'react';
import img from "../../../public/Vector 2.svg"
import NextImage from 'next/image';
interface Product {
    id: number;
    name: string;
    price: number;
    photo: string;
    quantity: number;
 
}

interface CardCartProps {
    product: Product;
    onRemove: () => void;
    handleUpdateQuantity: (productId: number, newQuantity: number) => void; 
  }
  

const CardCart: React.FC<CardCartProps> = ({ product, onRemove, handleUpdateQuantity}) => {
    const [quantity, setQuantity] = useState(product.quantity);

    const handleQuantityChange = (newQuantity: number) => {
        setQuantity(newQuantity);
        handleUpdateQuantity(product.id, newQuantity); 
      };

    const handleIncrement = () => {
        const newQuantity = quantity + 1;
        handleQuantityChange(newQuantity);
    };

    const handleDecrement = () => {
        const newQuantity = quantity > 0 ? quantity - 1 : 0;
        handleQuantityChange(newQuantity);
    };
    return (
        <CardContainer>
            <RemoveButton onClick={onRemove}>X</RemoveButton>
            <Image src={product.photo} alt={product.name} />
            <Name>{product.name}</Name>
            <Details>
                <ProductName>{product.name}</ProductName>
                <QuantityContainer>
                  
                  <ButtonLess onClick={handleDecrement}>-</ButtonLess>
                  <NextImage src={img} alt={''}/>
                    <QuantityInput
                        type="text"
                        pattern="\d*"
                        inputMode="numeric"
                        value={quantity}
                        onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10) || 0)}
                    />
                     <NextImage src={img} alt={''}/>
                    <Buttonfurther onClick={handleIncrement}>+</Buttonfurther>
                </QuantityContainer>
                <ProductPrice>R${product.price.toString()}</ProductPrice>
            </Details>
        </CardContainer>
    );
};

const CardContainer = styled.div`
  position: relative;
  width: 379px;
  height: 95px;
  border-radius: 8px;
  background-color: white;
  box-shadow: -2px 2px 10px 0px #0000000D;
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  align-items: center;
  margin-top: 15px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 220.05px;

  }



`;
const Image = styled.img`
  width: 46px;
  height: 57px;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 80px;
    height: 95.1px;
  }

`;

const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
`;

const ProductName = styled.h3`
  font-family: '${montserrat}';
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
  width: 112px;
  @media (max-width: 768px) {
      display: none;
  }
`;

const ProductPrice = styled.p`
    font-family: '${montserrat}';
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;

    @media (max-width: 768px) {
     background-color: #373737;
     color:white;
     padding: 3px;
     border-radius: 5px;
    }

`;

const QuantityContainer = styled.div`
    width: 50px;
    height: 19px;
    border-radius: 4px;
    border: 0.3px solid;
    display: flex;
    justify-content: center;
    align-items: center;

`;

const QuantityInput = styled.input`
  width: 15px;
  height: 15px;
  font-family: '${montserrat}';
  font-size: 14px;
  font-weight: 500;
  color: #2C2C2C;
  border: none;
  padding-left:5px;
 
`;
const RemoveButton = styled.button`
    position: absolute;
    top: 1px;
    right: 1px;
    background-color: black;
    border: none;
    font-size: 14px;
    color:white;
    width: 18px;
    height: 18px;
    border-radius: 8px;
    cursor: pointer;
`;

const Buttonfurther = styled.button`
   background-color:transparent;
   border:none;
    
`;


const ButtonLess = styled.button`
    background-color:transparent;
    border:none;
`;

const Name = styled.h3`
font-family: Montserrat;
font-size: 16px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0px;
text-align: left;
margin-bottom: 20px;
margin-top: 20px;
    @media (min-width: 601px) {
    display: none;
  }
`;


export default CardCart;
