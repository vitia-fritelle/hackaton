import React from 'react'
import styled from 'styled-components';

export default function Header() {
  return (
  <HeaderContainer>
      <img src='./codebird.png' alt='logo'/>
      <h1>codebird</h1>
      <ion-icon name="menu-outline"/>
  </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
font-family: var(--fonte-secundaria);
background-color:  var(--cor-secundaria);
color: var(--cor-primaria);
height: 80px;
display: flex;
align-items: center;
position: relative;
width: 100%;
h1{
  font-size: 30px;
  font-weight: bold;
}
img{
  height: 60px;
  margin: 20px;
  cursor: pointer;
}
ion-icon{
  font-size: 35px;
  position: absolute;
  right: 15px;
  cursor: pointer;
}
`
