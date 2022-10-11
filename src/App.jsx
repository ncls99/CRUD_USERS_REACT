import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import './App.css'
import Form from './components/Form';
import axios from 'axios';
import UserCard from './components/UserCard';

function App() {
  const baseURL = 'https://users-crud1.herokuapp.com'

  const [users, setUsers] = useState()
  const { handleSubmit, register } = useForm()
  const [updateInfo, setUpdateInfo] = useState()

  const getAllUsers = () => {
    const URL = `${baseURL}/users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getAllUsers()
  }, [])

  const createNewUser = (data) => {
    const URL = `${baseURL}/users/`
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const deleteUserById = (id) => {
    const URL = `${baseURL}/users/${id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const updateUserById = (id, data) => {
    const URL = `${baseURL}/users/${id}/`
    axios.patch(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <div className='formSection'>
        <Form
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          setUpdateInfo={setUpdateInfo}
          updateUserById={updateUserById}
        />
      </div>
      <div className='usersSection'>

        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
            />
          ))
        }

      </div>
    </div>
  )
}

export default App
