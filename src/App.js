import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Inicial from './Inicial';
import Game from './Game';

export default function App(){

    const [bemvindo, setBemVindo] = useState(false)
    


    return(
    <>
    <Screen>
         {bemvindo ? <Inicial/> : <Game/>}
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

