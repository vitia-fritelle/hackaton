import React from 'react'
import styled from 'styled-components';

export default function Quizz({question, index}){
  return (
    <QuizzContainer>
      <h1>Pergunta {index + 1}:</h1>
      <h2>{question}</h2>
    </QuizzContainer>
    )
}

const QuizzContainer = styled.div`
margin-top: 60px;
background-color: var(--cor-secundaria);
margin-left: 30px;
margin-right: 30px;
border-radius: 10px;
border: 3px solid var(--cor-terciaria);
display: flex;
flex-direction: column;
h1{
  margin: 0;
  padding: 10px;
  font-family: var(--fonte-secundaria);
  color: var(--cor-terciaria);
  font-size: 30px;
}
h2{
  margin: 0;
  margin-bottom: 10px;
  font-size: 24px;
  padding: 10px;
  font-family: var(--fonte-primaria);
  font-size: 22px;
}
`