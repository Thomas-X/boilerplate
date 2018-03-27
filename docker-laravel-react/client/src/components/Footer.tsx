import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 1rem;
    width: 100%;
    border: 1px solid #212121;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;

const Text = styled.span`
    font-size: 18px;
   
`;

export const Footer = (props: any) => {

    return (
        <Container>
            <Text>Copright &copy; Credito-services 2018</Text>
        </Container>
    );
};