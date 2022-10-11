import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

const defaultValues = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    birthday: ""
}

const Form = ({ createNewUser, updateInfo, updateUserById, setUpdateInfo }) => {

    useEffect(() => {
        if (updateInfo) {
            reset(updateInfo)
        }
    }, [updateInfo])

    const { handleSubmit, register, reset } = useForm()

    const submit = data => {
        // setDataForm(data)
        if (updateInfo) {
            updateUserById(updateInfo.id, data)
            setUpdateInfo()
        }else {
            createNewUser(data)
        }
        reset(defaultValues)
    }
    return (
        <div className='formBox'>
            <form className="form" onSubmit={handleSubmit(submit)} >
                <h2 className='formTitle'>{updateInfo ? "Edit User" : "Register User"}</h2>
                <div className='formContainer'>
                    <div className='formGroup'>
                        <input type="email" id='email' className='formInput' placeholder=' '{...register('email')} />
                        <label htmlFor="email" className='formLabel'>Email</label>
                        <span className='formLine'></span>
                    </div>
                    <div className='formGroup'>
                        <input type="password" id='password' className='formInput' placeholder=' ' {...register('password')} />
                        <label htmlFor="password" className='formLabel'>Password</label>
                        <span className='formLine'></span>
                    </div>
                    <div className='formGroup'>
                        <input type="text" id='first_name' className='formInput' placeholder=' ' {...register('first_name')} />
                        <label htmlFor="first_name" className='formLabel'>First Name</label>
                        <span className='formLine'></span>
                    </div>
                    <div className='formGroup'>
                        <input type="text" id='last_name' className='formInput' placeholder=' ' {...register('last_name')} />
                        <label htmlFor="last_name" className='formLabel'>Last Name</label>
                        <span className='formLine'></span>
                    </div>
                    <div className='formGroup'>
                        <input type="date" id='birthday' className='formInput' placeholder=' ' {...register('birthday')} />
                        <label htmlFor="birthday" className='formLabel'>Birthday</label>
                        <span className='formLine'></span>
                    </div>

                    <input type="submit" className='formSubmit' value={updateInfo ? "Update" : "Create"} />
                </div>
            </form>
        </div>
    )
}

export default Form