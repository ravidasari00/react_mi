import React, { useState } from 'react';
import './LoginRegister.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom

const LoginRegister = () => {
    // State management for form fields and feedback messages
    const [action, setAction] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();  // Use useNavigate for navigation

    // Handle form switching
    const registerLink = () => {
        setAction('active');
        setMessage(''); // Clear any messages when switching forms
    };

    const loginLink = () => {
        setAction('');
        setMessage(''); // Clear any messages when switching forms
    };

    // Handle login submission
    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        const user = { username, password };

        try {
            const response = await fetch('http://localhost:8080/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                const result = await response.json();
                sessionStorage.setItem('token', result.token); // Store the token

                // Decode the token to get the user's role
                const tokenPayload = JSON.parse(atob(result.token.split('.')[1]));
                const userRole = tokenPayload.role; // Assuming 'role' is a claim in your JWT

                // Navigate based on the user's role
                if (userRole === 'ROLE_ADMIN') {
                    navigate('/admin/home'); // Navigate to admin home page
                } else if (userRole === 'ROLE_USER') {
                    navigate('/user/home'); // Navigate to user home page
                } else {
                    navigate('/'); // Navigate to home page
                }
            } else {
                setMessage('Login failed.');
            }
        } catch (error) {
            setMessage('An error occurred.');
            console.error('Error:', error);
        }
    };

    // Handle registration submission
    const handleRegisterSubmit = async (event) => {
        event.preventDefault();

        const user = { username, password, role };

        try {
            const response = await fetch('http://localhost:8080/register/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                const result = await response.json();
                setMessage(`User registered: ${result.username}`);
            } else {
                setMessage('Registration failed.');
            }
        } catch (error) {
            setMessage('An error occurred.');
            console.error('Error:', error);
        }
    };

    return (
     <div className="wrapper-container">
        <div className={`wrapper ${action}`}>
            {/* Login Form */}
            <div className="form-box login">
                <form onSubmit={handleLoginSubmit}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input 
                            type="text" 
                            placeholder='Username' 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input 
                            type="password" 
                            placeholder='Password' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        <FaLock className='icon' />
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" /> Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>
                    <button type="submit">Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>
                    </div>
                </form>
            </div>

            {/* Registration Form */}
            <div className="form-box register">
                <form onSubmit={handleRegisterSubmit}>
                    <h1>Registration</h1>
                    <div className="input-box">
                        <input 
                            type="text" 
                            placeholder='Username' 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input 
                            type="password" 
                            placeholder='Password' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        <FaLock className='icon' />
                    </div>
                    <div className="input-box">
                        <label>Role:</label>
                        <select 
                            value={role} 
                            onChange={(e) => setRole(e.target.value)} 
                            required
                        >
                            <option value="">Select a role</option>
                            <option value="ADMIN">Admin</option>
                            <option value="USER">User</option>
                        </select>
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" /> I agree to the terms & conditions</label>
                    </div>
                    <button type="submit">Register</button>
                    <div className="register-link">
                        <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
                    </div>
                </form>
            </div>

            {/* Display message */}
            {message && <p className="message">{message}</p>}
        </div>
    </div>     
    );
};

export default LoginRegister;
