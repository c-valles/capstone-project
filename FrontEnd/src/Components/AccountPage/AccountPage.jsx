import { useState } from "react";
import axios from "axios";
import "../AccountPage/accountpage.css"

const Account = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (isLoginMode) {
            if (!email || !password) {
                setError("Please fill out all fields");
                return;
            }
        } else {
            if (!username || !email || !password) {
                setError("Please fill out all fields");
                return;
            }
        }
    
        try {
            let response;
            if (isLoginMode) {
                response = await axios.post("http://localhost:4000/user/login", { email, password });
            } else {
                response = await axios.post("http://localhost:4000/user/signup", { username, email, password });
            }
    
        
            if (response && response.data) {
                console.log(response.data); // Handle response data as needed
            } else {
                setError("Empty response from server"); 
            }
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
        <div className="account-container">
            <h2>{isLoginMode ? 'Login' : "Sign Up"}</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                {!isLoginMode && (
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                )}
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">{isLoginMode ? 'Login' : 'Sign Up'}</button>
            </form>
            <p onClick={() => setIsLoginMode(!isLoginMode)}>
                {isLoginMode ? "Create an account" : "Already have an account? Login"}
            </p>
        </div>
    );
};

export default Account;