import React from 'react';
import styled from 'styled-components';
import Cabecalho from './Cabecalho';
import Footer from './Footer';


export default function App(){
    console.log("Ola")
    return(
    <>
    <Screen>
        <Cabecalho/>
        <Footer/>
    </Screen>
    </>)
}

const Screen = styled.main`
 background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`

