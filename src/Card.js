import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Play from "./assets/img/seta_play.png"
import Virar from "./assets/img/seta_virar.png"


// import IconeSim from './assets/img/icone_certo.png'
// import IconeTalvez from './assets/img/icone_quase.png'
// import IconeNao from './assets/img/icone_erro.png'

export default function Card(props){
   
    const [Clicou, setClicou] = useState(false)
    const [Finalizado, setFinalizado] = useState(false)
   
    function naoLembrei(){
       props.setConcluidas(props.concluidas+1)
       setFinalizado(true)
       const Clicado = props.pergunta.Numero
       props.setRespondido([...props.respondido,Clicado])
       props.setAbriu()
    }

    function quaseNaoLembrei(){
      props.setConcluidas(props.concluidas+1)
      setFinalizado(true)
      const Clicado = props.pergunta.Numero
       props.setRespondido([...props.respondido,Clicado])
       props.setAbriu()
    }

    function zap(){
      props.setConcluidas(props.concluidas+1)
      setFinalizado(true)
      const Clicado = props.pergunta.Numero
      props.setRespondido([...props.respondido,Clicado])
      props.setAbriu()
      // setAberto(false)

    }


    return(
        <li>
            {props.aberto 
            
            ? 
            
            <Aberta> {Clicou ? props.pergunta.R : props.pergunta.Q} {Clicou 
            ?
             <ConteinerBotoes>
                <BotaoNaoLembrei onClick={naoLembrei} >Não <br/> lembrei</BotaoNaoLembrei>
                <BotaoQuaseLembrei onClick={quaseNaoLembrei}>quase não <br/> lembrei</BotaoQuaseLembrei>
                  <BotaoRespostaZap onClick={zap}>Zap!</BotaoRespostaZap>
             </ConteinerBotoes> 
             :
              <img  src={Virar} alt="Botao de girar" onClick={() => setClicou(true)} />} 
            </Aberta> 

            :

             <Fechada final={props.respondido} numeroclicado={props.pergunta.Numero} onClick={() => props.setAbriu(props.pergunta.Numero)}><p>Pergunta {props.pergunta.Numero}</p> <img src={Play} alt="Seta de play generica"/></Fechada>}
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
  color: #333333;

  p{
    text-decoration: ${props => props.final.includes(props.numeroclicado) ? "line-through" : ""}
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
  
            
               