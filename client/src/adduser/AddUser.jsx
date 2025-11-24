import React, { useState } from 'react'
import "./adduser.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const AddUser = () => {
    const users = {
        name: "",
        email: "",
        address: "",
    };
    const [user, setUsers] = useState(users);
    const navigate = useNavigate();

    const intputHandler = (e) => {
        const { name, value } = e.target;
        console.log(name, value);

        setUsers({ ...user, [name]: value });
    }

    const submitForm = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/user/create", user)
            .then((response) => {
                toast.success(response.data.message, {position:"top-right"})
                navigate("/");
            })

            .catch((err) => {
                console.log(err);
            })
    };
    return (
        <div className='addUser'>
            <Link to="/" type='button' class="btn btn-secondary">
                <i class="fa-solid fa-backward"></i> Back
            </Link>
            <h3>Add New User</h3>
            <form className='addUserForm' onSubmit={submitForm}>
                <div className='inputGroup'>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        id='name'
                        onChange={intputHandler}
                        name='name'
                        autoComplete='off'
                        placeholder='Enter your name'
                    />
                </div>
                <div className='inputGroup'>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='email'
                        id='email'
                        onChange={intputHandler}
                        name='email'
                        autoComplete='off'
                        placeholder='Enter your email'
                    />
                </div>
                <div className='inputGroup'>
                    <label htmlFor='address'>Address:</label>
                    <input
                        type='text'
                        id='address'
                        onChange={intputHandler}
                        name='address'
                        autoComplete='off'
                        placeholder='Enter your address'
                    />
                </div>
                <div className='inputGroup'>
                    <button type='submit' class="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddUser