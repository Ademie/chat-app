import React, { useState} from 'react'
import axios from 'axios'


const LoginForm = () =>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
     const [error, setError] = useState('')

    // asynchronous function
    const handleSubmit = async (e) =>{
        e.preventDefault()

        // authentication
        const authObject = { 'Project-ID': "43abc399-c6c8-4622-aee3-caa5d089898c", 'User-Name': username, 'User-Secret': password }

        try{
            await axios.get('https://api.chatengine.io/chats', { headers: authObject})
            // if login is successful, store username and password to local storage
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload()
        } catch(error){
            setError("Sorry, Incorrect details")

        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat App</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        className="input" placeholder="Ademie" required
                    />
                    <input type="password" value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        className="input" placeholder="123456" required
                    />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Login</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
