import React from 'react'
import styled from 'styled-components';

export default function Button({ text, onclick }) {

  if (!text) {
    text = 'vazio'
  }

  return (
    <FlexBootButton onClick={onclick}>
      <div className='wrapper'>
        <div className='button'>
          <p className='big-text'>
            {text}
          </p>
        </div>
      </div>
    </FlexBootButton>
  )
}

const FlexBootButton = styled.div`
  margin-left: 50%;
  transform: translate(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  .wrapper{
    cursor: pointer;
    position: relative;
    height: 45px;
    width: 154px;
    margin: 10px;
  }
  .button{
    height: 40px;
    width: 150px;
    background-color: var(--cor-secundaria);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    transition-duration: 0.3s;
    color: var(--cor-primaria);
    border: 1px solid var(--cor-terciaria);
    border-radius: 5px;
  }
  .button p{
    margin: 0;
    font-family: var(--fonte-secundaria);
    font-size: 20px;
    transition-duration: 0.1s;
  }
  .button:hover{
    background-color: var(--cor-terciaria);
    color: var(--cor-secundaria);
  }
  .button p:hover{
    transform: scale(1.05);
  }
  `