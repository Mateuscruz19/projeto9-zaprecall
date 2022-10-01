import React from 'react';
// import styled from 'styled-components';
import { useState } from 'react';
import Cabecalho from './Cabecalho';
import Footer from './Footer';
import Perguntas from './Perguntas';

export default function Game(props){

    const [Clicadas, setClicadas] = useState([])
    const [Concluidas, setConcluidas] = useState(0)
    
    return(
    <>
         <Cabecalho/>
         <Perguntas  opcao={props.opcao} setOpcao={props.setOpcao}  clicadas={Clicadas} setClicadas={setClicadas}  concluidas={Concluidas}  setConcluidas={setConcluidas} />
        <Footer clicadas={Clicadas} concluidas={Concluidas} />
    </>)
}

