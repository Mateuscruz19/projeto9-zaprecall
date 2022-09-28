import React from 'react';
import styled from 'styled-components';


export default function Footer(){
    return(
        <>
        <FooterInicial>
            <ConteinerBotoes>
                <BotaoNaoLembrei>Não <br/> lembrei</BotaoNaoLembrei>
                <BotaoQuaseLembrei>quase não <br/> lembrei</BotaoQuaseLembrei>
                <BotaoRespostaZap>Zap!</BotaoRespostaZap>
            </ConteinerBotoes>
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
font-weight: 400;
font-size: 18px;
color: #333333;
padding: 10px;
`
const ConteinerBotoes = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
`



const BotaoNaoLembrei = styled.button`
    width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: #FF3030;
  border-radius: 5px;
  border: 1px solid #FF3030;
  padding:5px;
`
const BotaoQuaseLembrei = styled(BotaoNaoLembrei)`
background: #FF922E;
border: 1px solid #FF922E;
`

const BotaoRespostaZap = styled(BotaoNaoLembrei)`
background: #2FBE34;
border: 1px solid #2FBE34;
`
  

