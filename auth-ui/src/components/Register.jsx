import { Button } from "@eminds/components";
import { useState } from "react";

export const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = async () => {
        if (!username || !password) {
            console.log("Invalid username or password");
            return
        }

        try {
            const rawResponse = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            const content = await rawResponse.json();
            console.log(content);
        } catch (error) {
            console.error(error);
        }
    }

    return <div>
        <label for="username">Username:</label><br />
        <input type="text" id="username" name="username" onChange={ev => setUsername(ev.target.value)} /><br /><br />
        <label for="password">Password:</label><br />
        <input type="password" id="password" name="password" onChange={ev => setPassword(ev.target.value)} /><br /><br />

        <Button onClick={handleRegister}>Register</Button>
    </div>
}