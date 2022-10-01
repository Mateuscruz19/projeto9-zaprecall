import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Lista from './Lista';
import Card from './Card';

// import IconeSim from './assets/img/icone_certo.png'
// import IconeTalvez from './assets/img/icone_quase.png'
// import IconeNao from './assets/img/icone_erro.png'

export default function Footer(props){

    return(
        <>
        <FooterInicial concluidas={props.concluidas} total={Lista[props.opcao].length}>
            <p>{props.concluidas}/{Lista[props.opcao].length} CONCLUÍDOS</p>
            {Lista.map(() => <img/>)}
        </FooterInicial>
        </>
    )
}

const FooterInicial = styled.footer` width: 100%;
min-height: 50px;
background-color: #FFFFFF;
position: fixed;
bottom: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;

color: #333333;


p{
    font-family: 'Recursive';
font-weight: 400;
font-size: 18px;
color: #333333;
padding: 10px;
text-decoration: ${props => props.concluidas === props.total ? "line-through" : ""}
}
`



