// src/Auth/Register.js
import React, { useState } from 'react';
import './styles.css';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const submit = async (e) => {
        e.preventDefault();

        if (name === '' || pwd === '' || email === '') {
            alert('Please fill in all fields');
            return;
        }

        const userData = {
            username: name,
            password: pwd,
            email: email,
        };

        try {
            const response = await fetch('http://localhost:3001/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const result = await response.json();
            if (result.success) {
                alert('Registration successful!');
            } else {
                alert('Registration failed: ' + result.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className='reg-container'>
            <h3>Register</h3>
            <form onSubmit={submit}>
                <label htmlFor='name'>Enter name</label>
               
                <input
                    type='text'
                    id='name'
                    placeholder='Jotham Murimi'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor='email'>Enter email</label>
                <input
                    type='email'
                    id='email'
                    placeholder='jothammurimi@gmail.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='password'>Enter password</label>
                <input
                    type='password'
                    id='password'
                    placeholder='Your password'
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '400px', marginTop: '30px' }}>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Register;
