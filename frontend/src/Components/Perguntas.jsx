import React from 'react'
import Header from './componentes-de-perguntas/Header'
import Quizz from './componentes-de-perguntas/Quizz'
import Answer from './componentes-de-perguntas/Answer'
import Button from './componentes-de-perguntas/Button'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const URL = "https://hackathon02.herokuapp.com/question";

export default function Testes() {

  const [score, setScore] = useState(0);

  function postScore(){
    axios.post(URL, score, {headers: {_id: "62884ebad05f4620700b88b3"}})
    .then(res => alert(res.data))
    .catch(err => alert(err))
  }

  const mockObject = [
  {
    "_id": "62880afb6edca75ff3ba1c8c",
    "Question": "O que é Node?",
    "Answer": [
      {
        "Answer": "Um compilador de JavaScript.",
        "isCorrect": false
      },
      {
        "Answer": "Uma versão do JavaScript.",
        "isCorrect": false
      },
      {
        "Answer": "Um transpilador de JavaScript.",
        "isCorrect": false
      },
      {
        "Answer": "Um ambiente de execução de JavaScript.",
        "isCorrect": true
      }
    ]
  },
 {
    "_id": "6288135f6edca75ff3ba1c99",
    "Question": "O que compõe um servidor back-end?",
    "Answer": [
      {
        "Answer": "Uma aplicação express.",
        "isCorrect": false
      },
      {
        "Answer": "Um computador da nuvem.",
        "isCorrect": false
      },
      {
        "Answer": "Qualquer código Node.",
        "isCorrect": false
      },
      {
        "Answer": "Um computador ligado 24/7 conectado na internet que possua um software que entenda como receber e responder requisições.",
        "isCorrect": true
      }
    ]
  },
 {
    "_id": "628813a66edca75ff3ba1c9a",
    "Question": "Quais as maneiras de receber dados de requisições?",
    "Answer": [
      {
        "Answer": "Path params, body e headers.",
        "isCorrect": false
      },
      {
        "Answer": "Query string, headers e path params.",
        "isCorrect": false
      },
      {
        "Answer": "Body, status code, headers, path params e query string.",
        "isCorrect": false
      },
      {
        "Answer": "Query string, path params, headers e body.",
        "isCorrect": true
      }
    ]
  },
 {
    "_id": "628815eb6edca75ff3ba1c9c",
    "Question": "Sed vitae nibh velit?",
    "Answer": [
      {
        "Answer": "Integer elit felis, luctus et commodo at, viverra vel quam.",
        "isCorrect": false
      },
      {
        "Answer": "Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas lectus nisl, auctor a nibh a, posuere commodo nunc. ",
        "isCorrect": false
      },
      {
        "Answer": "Praesent vel condimentum quam, feugiat finibus leo. ",
        "isCorrect": false
      },
      {
        "Answer": "Curabitur sit amet augue arcu. ",
        "isCorrect": true
      }
    ]
  },
  {
    "_id": "6288164d6edca75ff3ba1c9d",
    "Question": "Sed vitae nibh velit?",
    "Answer": [
      {
        "Answer": "Integer elit felis, luctus et commodo at, viverra vel quam.",
        "isCorrect": false
      },
      {
        "Answer": "Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas lectus nisl, auctor a nibh a, posuere commodo nunc. ",
        "isCorrect": false
      },
      {
        "Answer": "Praesent vel condimentum quam, feugiat finibus leo. ",
        "isCorrect": false
      },
      {
        "Answer": "Curabitur sit amet augue arcu. ",
        "isCorrect": true
      }
    ]
  },
  {
    "_id": "628816536edca75ff3ba1c9e",
    "Question": "Sed vitae nibh velit?",
    "Answer": [
      {
        "Answer": "Integer elit felis, luctus et commodo at, viverra vel quam.",
        "isCorrect": false
      },
      {
        "Answer": "Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas lectus nisl, auctor a nibh a, posuere commodo nunc. ",
        "isCorrect": false
      },
      {
        "Answer": "Praesent vel condimentum quam, feugiat finibus leo. ",
        "isCorrect": false
      },
      {
        "Answer": "Curabitur sit amet augue arcu. ",
        "isCorrect": true
      }
    ]
  },]

  const [reveal, setReveal] = useState(false)

  return (
    <>
      <Header/>
      {mockObject.map((question, index) =>
      <>
      <Quizz 
        question={question.Question}
        index={index}
      />
      {question.Answer.sort(() => Math.random() - 0.5).map
      (question => 
        <Answer
          question={question.Answer} 
          isCorrect={question.isCorrect} 
          reveal={reveal}
          setReveal={setReveal}
          score={score}
          setScore={setScore}
        />)}
      </>
      )}
        <Button text={'Enviar'}/>
    </>
  )
}
