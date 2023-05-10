import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'
import Button from '../../components/Button'
import {
  Container,
  Image,
  User
} from './styles'
import Avatar from '../../assets/avatar.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'

import axios from 'axios'
const Users = () => {
  // const users = [
  //   { id: Math.random(), name: 'Natan', age: 24 },
  //   { id: Math.random(), name: 'Maria', age: 23 }
  // ]
  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  const baseUrl = "https://register-user-api-liard.vercel.app"


  useEffect(() => {
    async function fetchUsers () {
      const { data: newUsers } = await axios.get(`${baseUrl}/users`)
      setUsers(newUsers)
    }
    fetchUsers()
  }, [])


  async function deleteUser (userId) {
    await axios.delete(`${baseUrl}/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }

  function goBack() {
    navigate('/')
  }

  return (
    <Container>
      <Image alt='logo-image' src={Avatar} />
      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>



        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt='Lata de lixo' />
              </button>
            </User>
          ))}
        </ul>

        <Button isCheck={true} onClick={goBack}>
        <img alt='arrow' src={Arrow} /> Voltar 
        </Button>
      </ContainerItens>
    </Container>
  )
}

export default Users;
