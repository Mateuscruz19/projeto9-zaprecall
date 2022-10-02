import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Lista from './Lista';
import Card from './Card';
import Sad from './assets/img/sad.png'
import Party from './assets/img/party.png'

// import IconeSim from './assets/img/icone_certo.png'
// import IconeTalvez from './assets/img/icone_quase.png'
// import IconeNao from './assets/img/icone_erro.png'

export default function Footer(props){

    return(
        <>
        <FooterInicial concluidas={props.concluidas} total={Lista[props.opcao].length}>
            <p>{props.concluidas}/{Lista[props.opcao].length} CONCLUÍDOS</p>
            {props.concluidas === Lista[props.opcao].length ? 
            props.zaps >= props.metas ? <Result>Parabéns,voce bateu a meta de Zaps!!! <img src={Party}></img></Result>
            : <Result>Putz,você não bateu sua meta de zaps,mas nao desista!<img src={Sad}/></Result> : <></>}
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

const Result = styled.span`
 font-family: 'Recursive';
font-weight: 400;
font-size: 18px;
color: #333333;
padding: 10px;`

