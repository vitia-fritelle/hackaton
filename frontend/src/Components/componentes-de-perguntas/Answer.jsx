import React, { useState } from 'react'
import styled from 'styled-components';



export default function Answer({question, isCorrect, reveal, setReveal}) {
  return (
    <AnswerContainer onClick={()=> setReveal(true)}>
      <h1>{question}</h1>
      {reveal&&<Icon isCorrect={isCorrect}/>}
    </AnswerContainer>
  )
}

function Icon({isCorrect}){
  return(
      isCorrect?
      <div className='right'>
        <ion-icon name="checkmark-circle" />
      </div>
      :
      <div className='wrong'>
        <ion-icon name="close-circle" />
      </div>
  )
}

const AnswerContainer = styled.div`
  background-color: var(--cor-secundaria);
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 6px;
  margin-top: 20px;
  cursor: pointer;
  border: 1px solid var(--cor-terciaria);
  display: flex;
  justify-content: center;
  position: relative;

  h1{
    padding: 28px;
    font-size: 20px;
    font-family: var(--fonte-primaria);
    text-align: center;
    transition: .2s;
  }

  h1:hover{
    transform: scale(1.2);
  }

  ion-icon{
    position: absolute;
    top: 3px;
    right: 3px;
    font-size: 38px;
    
  }
  .right{
    color: green;
  }
  .wrong{
    color: red;
  }
`