import React from 'react'
import Header from './componentes-de-perguntas/Header'
import Quizz from './componentes-de-perguntas/Quizz'
import Answer from './componentes-de-perguntas/Answer'
import Button from './componentes-de-perguntas/Button'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


export default function Testes() {

  // useEffect({},[])


  const mockObject = {
    "_id":{"$oid":"62880afb6edca75ff3ba1c8c"},
    
    "Question":"O que é Node?",
    
    "Answer":
      [
      {"Answer":"Um compilador de JavaScript.","isCorrect":false},
      
      {"Answer":"Uma versão do JavaScript.","isCorrect":false},
      
      {"Answer":"Um transpilador de JavaScript.","isCorrect":false},
      
      {"Answer":"Um ambiente de execução de JavaScript.","isCorrect":true}
    ]
  }

  const [reveal, setReveal] = useState(false)

  return (
    <>
      <Header/>
      <Quizz question={mockObject.Question}/>
      {mockObject.Answer.map
      (question => 
        <Answer 
          question={question.Answer} 
          isCorrect={question.isCorrect} 
          reveal={reveal}
          setReveal={setReveal}
        />
      )
      }
        <Button text={'Próxima'}/>
    </>
  )
}
