import React from 'react'
import plusIcon from "../assets/plusIcon.png";
import deleteIcon from "../assets/deleteIcon.png";
import editIcon from "../assets/editIcon.png";

const UserCard = ({ key, user, deleteUserById, setUpdateInfo }) => {
    
    const handleEdit = () => {
        setUpdateInfo(user)
    }

    return (
        <div className='usersCard'>
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <p><span>Email: </span>{user.email}</p>
            <p><span>Birthday: </span>{user.birthday}</p>
            <footer>
                <div className='boxIcon'>
                    <img src={deleteIcon} alt="delete image" onClick={() => deleteUserById(user.id)} />
                </div>
                <div className='boxIcon'>
                    <img src={editIcon} alt="pencil image" onClick={handleEdit}/>
                </div>
            </footer>
        </div>
    )
}

export default UserCard