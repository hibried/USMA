import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'sonner';

const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState("");

    const changeUsername = (e) => {
        setUsername(e.target.value);
    };

    const changePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async () => {
        const payload = {
            username: username,
            password: password,
        };

        const headers = {
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        }

        try {
            const response = await axios.post('https://reqres.in/api/register', payload, headers);
            console.log(response.data);
            toast.success('Successfully registered');
            // localStorage.setItem("accessToken", response.data.accessToken);
            // setSuccess("Login berhasil");

            // setTimeout(() => {
            //     useNavigate("/");
            // }, 2000);
        } catch (error) {
            console.error(error.response.data.error);
            toast.error(error.response.data.error);
        }
        
        console.log(payload);
    };

    return (
        <div>
            <p className="text-center">Register to ASG_D30</p>
            {success && <p>{success}</p>}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Register</legend>

                <label className="label">Email</label>
                <input type="email" className="input validator" placeholder="Email" onChange={changeUsername} required />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" onChange={changePassword} required />

                <button className="btn btn-neutral mt-4" onClick={handleSubmit}>Register</button>
            </fieldset>
        </div>
    )
}

export default RegisterPage