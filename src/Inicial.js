import React from 'react';
import styled from 'styled-components';
import Logo from './assets/img/logo.png'

export default function Inicial(props) {

   

    function IniciarJogo(){
        if(props.metas > 1){
            props.setBemVindo(false)
        }else{
            alert("Voce precisa adicionar um numero de metas,e ela deve ser maior que 1,tente novamente :D")
            return
        }
    }

    return (
        <>
            <Conteiner>
                <img src={Logo} alt="Logo em formato de raio" />
                <h1>ZapRecall</h1>
                <input data-identifier="goals-input"  onChange={(m) => props.setMetas(m.target.value)}   placeholder='Digite sua meta de zaps...'></input>
                <select data-identifier="deck-selector" name='Deck' value={props.opcao} onChange={o => props.setOpcao(o.target.value)}>
                    <option data-identifier="deck-option" value="0">React</option>
                    <option data-identifier="deck-option" value="1">JavaScript</option>
                    <option data-identifier="deck-option" value="2">Css</option>
                    <option data-identifier="deck-option" value="3">Html</option>
                </select>
                <button data-identifier="start-btn" onClick={IniciarJogo}>Iniciar Recall!</button>
            </Conteiner>
        </>
    )
}

const Conteiner = styled.div`

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    margin-top:160px;

img{
    width: 176px;
    height: 181px;
    margin-left:10px;
}

h1{
    margin-top:20px;
    font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;
}
input{
    margin-top:20px;
    width: 246px;
    height: 43px;
    background: #FFFFFF;
    border-radius: 5px;
    border:none;
}

select{
    margin-top:20px;
    width: 250px;
    height: 43px;
    background: #FFFFFF;
    border-radius: 5px;
    border:none;
}

option{

font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;

}


button{
    width: 250px;
    height: 54px;
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #D70900;
    margin-top:20px;
}



button:disabled{
    width: 246px;
    height: 54px;
    background: #E8E8E8;
    border-radius: 5px;
}
`