import { useState } from "react";
import axios from 'axios';

const Account = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()
        const rest = await axios.post("http://localhost:4000/user/signup", {username, email, password})
        console.log(rest.data)
    }
    return (
        <div>
            <h2>Accounts Page</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Account;