import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Lista from './Lista'
import Play from './assets/img/seta_play.png'
import BotaoVirar from './assets/img/seta_virar.png'

export default function Perguntas(){


    const [fechado, setFechado] = useState(
        <Fechada onClick={() => (setFechado(<Aberta>Teste</Aberta>))}>Pergunta<img src={Play} alt="Seta de Play"/></Fechada>
        )
   
    return(
        <>
        <ul>
            {Lista.map((e, index) => <li>{fechado}</li>)}
        </ul>
        </>
    )
}

const Fechada = styled.div`
width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;

  
  `

  const Aberta = styled.div`

  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img{
    position: absolute;
  bottom: 10px;
  right: 10px;
  }
  `