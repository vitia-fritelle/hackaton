import React from 'react'
import styled from 'styled-components';
import {useState} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const URL = "https://hackathon02.herokuapp.com/question";

export default function TelaInicialDePerguntas() {

  const [questions, setQuestions] = useState([]);
  
  console.log(questions)

  function getQuestions(params){
    axios.get(`${URL}/${params}`)
    .then(res => {
      setQuestions(res.data)
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <Wrapper>
        <h1 > Escolha um tema:</h1>
        <img 
        onClick={() => getQuestions("NodejsCollection")}

        src={'https://miro.medium.com/max/1400/0*MNVJq_8e0SJoqZb5.jpg'}
        
        alt={'tema'}
        />

        <img 
        onClick={() => getQuestions("MongoDBCollection")}

        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Q9gBO5DT_m7HkiB68QLHOZ5PnMn7eF4VXWmQ2qYwJ0eS3fw2U6asdk8w3gtAgrqAU6A&usqp=CAU'}
        
        alt={'tema'}
        />
        <Link to={'/'}>
        <ion-icon name="reload-circle"/>
        
        </Link>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
margin-top: 50%;
margin-left: 50%;
transform: translate(-50%, -20%);
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
h1{
  font-size: 30px;
  font-family: var(--fonte-secundaria);
  background-color: var(--cor-secundaria);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}
img{
  margin-top: 20px;
  width: 200px;
  height: auto;
  cursor: pointer;
}
ion-icon{
  margin-top: 14px;
  font-size: 46px;
  color: var(--cor-terciaria);
  cursor: pointer;
}
`