import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

export default function Perguntas(){
    return(
        <>
        <Pergunta>Pergunta 1</Pergunta>
        <Pergunta>Pergunta 2</Pergunta>
        <Pergunta></Pergunta>
        <Pergunta></Pergunta>
        <Pergunta></Pergunta>
        <Pergunta></Pergunta>
        <Pergunta></Pergunta>
        </>
    )
}

const Pergunta = styled.div`
width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;`