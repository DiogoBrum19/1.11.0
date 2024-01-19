import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Message from './message'
import Titulo from './titulo'
import Button from './button'
const mensagens = [
  {
    mensagem: 'Oi...',
    visualizado: true,
    remetente: false,
  },
  {
    mensagem: 'Tu não me ama mais?',
    visualizado: true,
    remetente: false,
  },
  {
    mensagem: 'Oi, boa tarde.',
    visualizado: false,
    remetente: true,
  },
  {
    mensagem: 'Quem é você mesmo?',
    visualizado: false,
    remetente: true,
  },
];

function App() {
  return (
    <>
      <body>
        <div class="chat">
          <Titulo></Titulo>
          <div class="content">
            <ul>
              <Message mensagem={"Oi..."} visualizado={true} remetente={false}/>
              <Message mensagem={"Tu não me ama mais?"} visualizado={true} remetente={false}/>
              <Message mensagem={"Oi, boa tarde."} visualizado={false} remetente={true}/>
              <Message mensagem={"Quem é você mesmo?"} visualizado={false} remetente={true}/>
            </ul>
          </div>
        </div>
      </body>
    </>
  )
}

export default App