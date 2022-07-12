import { Button, loggedInEvent } from "@eminds/components";
import { useState } from "react";

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        if (!username || !password) {
            console.log("Invalid username or password");
            return
        }

        try {
            const rawResponse = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            const content = await rawResponse.json();
            console.log(content);

            if (content && content.token) {
                window.dispatchEvent(new CustomEvent(loggedInEvent.type), {detail:{token:content.token}})
            }

        } catch (error) {
            console.error(error);

        }
    }

    return <div>
        <label for="username">Username:</label><br />
        <input type="text" id="username" name="username" onChange={ev => setUsername(ev.target.value)} /><br /><br />
        <label for="password">Password:</label><br />
        <input type="password" id="password" name="password" onChange={ev => setPassword(ev.target.value)} /><br /><br />

        <Button onClick={handleLogin}>Login</Button>
    </div>
}