import React from 'react';
// import styled from 'styled-components';
import { useState } from 'react';
import Cabecalho from './Cabecalho';
import Footer from './Footer';
import Perguntas from './Perguntas';

export default function Game(props){

    const [Clicadas, setClicadas] = useState([])
    const [Concluidas, setConcluidas] = useState(0)
    const [zaps, setZap] = useState(0)

    console.log(props.metas)

    return(
    <>
         <Cabecalho/>
         <Perguntas  zaps={zaps} setZap={setZap} setMetas={props.setMetas} opcao={props.opcao} setOpcao={props.setOpcao}  clicadas={Clicadas} setClicadas={setClicadas}  concluidas={Concluidas}  setConcluidas={setConcluidas} />
        <Footer zaps={zaps} setZap={setZap} metas={props.metas} setMetas={props.setMetas} clicadas={Clicadas} opcao={props.opcao} concluidas={Concluidas} />
    </>)
}

