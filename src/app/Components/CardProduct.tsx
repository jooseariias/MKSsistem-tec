"use client"
import styled from 'styled-components';
import { montserrat } from '@/utils/fonts';
import add from "../../../public/add.svg"
import Image from 'next/image';
import useCart from '../Hooks/useCart';

interface ProductProps {
    id: number;
    name: string;
    brand: string;
    description: string;
    price: number;
    photo: string;
    quantity: number;
}

export default function CardProduct({ product }: { product: ProductProps }) {

    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product)
    };

    return (
        <div>
            <Container>
                <Img src={product.photo} alt={product.name} />
                <ContainerTwo>
                    <Title>{product.name}</Title>
                    <Price>R${product.price.toString()}</Price>
                </ContainerTwo>
                <Description>
                    {product.description}
                </Description>
                <AddCart onClick={handleAddToCart} >
                    <Image src={add} alt='add cart' />
                </AddCart>
            </Container>
        </div>
    );
}

const Container = styled.div`
    width: 218px;
    height: 285px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 8px 0px #00000022;
    border-radius: 8px;
    &:hover {
        transform: scale(1.05)
    }
    @media (max-width: 768px) {
        width: 251px;
        height: 328px;
    
  }
`;


const ContainerTwo = styled.div`
    display: flex;
    align-items: center;
    padding-left: 8px;
    padding-right: 8px;
    
    @media (max-width: 768px) {
        padding: 10px 20px 10px 20px;
    
  }
`;

const Img = styled.img`
    width: 111px;
    height: 138px;
`;

const Title = styled.h4`
    font-family: '${montserrat}';
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    color:#2C2C2C;
    padding-right: 5px;
`;

const Price = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 26px;
    border-radius: 5px;
    background-color: #373737;
    font-family: '${montserrat}';
    font-weight: 700;
    color: white;
    font-size: 15px;
    line-height: 15px;
    text-align: center;
`;

const Description = styled.article`
    font-family: '${montserrat}';
    width: 192px;
    height: 25px;
    font-size: 10px;
    font-weight: 300;
    line-height: 12px;
    color: #2C2C2C;
    margin-bottom: 3px;
`;

const AddCart = styled.button`
    width: 218px;
    height: 31.91px;
    background-color: #0F52BA;
    border:none;
    border-radius: 0px 0px 8px 8px;
    transition: background-color 0.3s ease;
    cursor: pointer;
    &:hover {
    background-color: #006eff; 
    }

    @media (max-width: 768px) {
        width: 251px;
        
    
  }
`;

