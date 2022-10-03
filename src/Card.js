import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Play from "./assets/img/seta_play.png"
import Virar from "./assets/img/seta_virar.png"


 import IconeSim from './assets/img/icone_certo.png'
 import IconeTalvez from './assets/img/icone_quase.png'
 import IconeNao from './assets/img/icone_erro.png'

export default function Card(props){
   
    const [Clicou, setClicou] = useState(false)
    const [Resultado, setResultado] = useState(IconeSim)
    const [cor, setCor] = useState("Black")

    function naoLembrei(){
       props.setConcluidas(props.concluidas+1)
       const Clicado = props.pergunta.Numero
       props.setRespondido([...props.respondido,Clicado])
       props.setAbriu()
       setResultado(IconeNao)
       setCor("Red")
    }

    function quaseNaoLembrei(){
      props.setConcluidas(props.concluidas+1)
      const Clicado = props.pergunta.Numero
       props.setRespondido([...props.respondido,Clicado])
       props.setAbriu()
       setResultado(IconeTalvez)
       setCor("Orange")
    }


    function zap(){
      props.setConcluidas(props.concluidas+1)
      const Clicado = props.pergunta.Numero
      props.setRespondido([...props.respondido,Clicado])
      props.setAbriu()
      setResultado(IconeSim)
      setCor("Green")
      props.setZap(props.zaps+1)
    }


    return(
        <li>
            {props.aberto 
            
            ? 
            
            <Aberta data-identifier="flashcard-question-flashcard-answer-flashcard-index-item"> {Clicou ? props.pergunta.R : props.pergunta.Q} {Clicou 
            ?
             <ConteinerBotoes>
                <BotaoNaoLembrei data-identifier="forgot-btn" onClick={naoLembrei} >Não <br/> lembrei</BotaoNaoLembrei>
                <BotaoQuaseLembrei data-identifier="almost-forgot-btn" onClick={quaseNaoLembrei}>quase não <br/> lembrei</BotaoQuaseLembrei>
                  <BotaoRespostaZap data-identifier="zap-btn" onClick={zap}>Zap!</BotaoRespostaZap>
             </ConteinerBotoes> 
             :
              <img data-identifier="flashcard-turn-btn-flashcard-status" src={Virar} alt="Botao de girar" onClick={() => setClicou(true)} />} 
            </Aberta> 

            :

             <Fechada  data-identifier="flashcard"  disabled final={props.respondido} numeroclicado={props.pergunta.Numero} cor={cor}>
              <p>Pergunta {props.pergunta.Numero}</p>
              <img data-identifier="flashcard-show-btn" onClick={props.respondido.includes(props.pergunta.Numero) ? undefined : (() => props.setAbriu(props.pergunta.Numero))} src={props.respondido.includes(props.pergunta.Numero) ? Resultado : Play} alt="Seta de play generica"/>
              </Fechada>}
        </li>

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

  p{
    text-decoration: ${props => props.final.includes(props.numeroclicado) ? "line-through" : ""};
    color: ${props => props.cor};
  }

  img{
    cursor:pointer;
  }

  `;

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
width:20px;
height:20px;
bottom: 10px;
right: 10px;
cursor:pointer;
}

button{
  cursor:pointer;
}

`
const ConteinerBotoes = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
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
  
            
               