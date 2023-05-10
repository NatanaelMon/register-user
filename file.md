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

          useEffect(() => {
    async function fetchUsers () {
      const { data: newUsers } = await axios.get('http://localhost:3001/users')
      setUsers(newUsers)
    }
    fetchUsers()
  }, [])

  export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  width: 342px;
  height: 58px;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`



  async function deleteUser (userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }