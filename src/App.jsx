import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import './App.css'
import Form from './components/Form';
import axios from 'axios';
import UserCard from './components/UserCard';
import plusIcon from "./assets/plusIcon.png";

function App() {
  const baseURL = 'https://users-crud1.herokuapp.com'

  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()
  const [formIsClose, setFormIsClose] = useState(true)

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

  const handleOpenForm = () => {
    setFormIsClose(false)
    setUpdateInfo()
  }
  return (
    <div className="App">
      <div className={`formSection ${formIsClose && 'formDisable'}`}>
        <Form
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          setUpdateInfo={setUpdateInfo}
          updateUserById={updateUserById}
          setFormIsClose={setFormIsClose}
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
              setFormIsClose={setFormIsClose}
            />
          ))
        }
      </div>
          <div className='buttonBox'>
            <img onClick={handleOpenForm} className="addButton" src={plusIcon} alt="Plus image" />
          </div>
    </div>
  )
}

export default App
