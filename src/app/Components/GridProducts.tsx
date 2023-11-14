"use client"
import styled from 'styled-components';
import fetchProduct from "@/app/Hooks/fetchProduct"
import CardProduct from "@/app/Components/CardProduct"


function GridProducts() {

    const products = fetchProduct();

    return (
        <div>
            <Comtainer>
                <Comtainertwo>
                    {products.map((product) => (
                        <ComtainerThree key={product.id}>
                            <CardProduct product={product} />
                        </ComtainerThree>
                    ))}
                </Comtainertwo>
            </Comtainer>
        </div>
    );
}

export default GridProducts;


const Comtainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

`;
const Comtainertwo = styled.ul`
    width: 938px;
    height: 601px;
    margin-top: 80px;
    margin-bottom: 80px;
    display: flex;
    flex: 25% 25% 25% 25%;
    flex-wrap: wrap;
    gap: 20px;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
  }
  
`;
const ComtainerThree = styled.li`
    list-style: none;
`;
