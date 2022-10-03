import React from 'react';
import { useState } from 'react';
import Lista from './Lista'
import Card from './Card';

export default function Perguntas(props){

    const [Abriu, setAbriu] = useState()
    const [Escolhido] = useState(Lista[props.opcao])
    const [PerguntaRespondida, setRespondida] = useState([])
 

    return(
    <ul> 
        {Escolhido.map((p, index) => <Card setZap={props.setZap} zaps={props.zaps} setMetas={props.setMetas} respondido={PerguntaRespondida} setRespondido={setRespondida}  clicadas={props.clicadas} setClicadas={props.setClicadas}  concluidas={props.concluidas}  setConcluidas={props.setConcluidas} t={props.clicadas} pergunta={p} key={index} aberto={p.Numero === Abriu} setAbriu={setAbriu}/> )}
        </ul>

    )
}

