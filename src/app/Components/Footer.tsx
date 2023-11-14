"use client"
import styled from 'styled-components';
import { montserrat } from '@/utils/fonts';

export default function Footer() {
    return (
        <footer>
            <Container>
                <Text>MKS sistemas © Todos os direitos reservados</Text>
            </Container>
        </footer>
    );
}

const Container = styled.footer`
  height: 34px;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-family: '${montserrat}';
  font-weight: 400;
  font-size: 12px; 
  line-height: 14px;
`;
