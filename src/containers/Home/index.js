import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'
import {Button} from '../../components/Button/styles'
import {
  Container,
  InputLabel,
  Image,
  Input
} from './styles'
import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'


import axios from 'axios'
const App = () => {
  // const users = [
  //   { id: Math.random(), name: 'Natan', age: 24 },
  //   { id: Math.random(), name: 'Maria', age: 23 }
  // ]

  const navigate = useNavigate()

  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const baseUrl = "https://register-user-api-liard.vercel.app"

  async function addNewUser () {
    const {data: newUser} = await axios.post(`${baseUrl}/users`, {
      name: inputName.current.value,
      age: inputAge.current.value
    })
    // setUsers([{ id: Math.random(), name: 'Natan', age: 24}] )
    setUsers([
      ...users, newUser,
    ]);

    navigate('/usuarios')
  }




  return (
    <Container>
      <Image alt='logo-image' src={People} />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder='Idade' type={'number'} Idade />

        <Button onClick={addNewUser}>
          Cadastrar <img alt='arrow' src={Arrow} />
        </Button>

      </ContainerItens>
    </Container>
  )
}

export default App
