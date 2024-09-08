import React, { useState } from "react";
import {Form, Alert} from "react-bootstrap";
import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const {logIn} = useUserAuth();
    const navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        setError("");
        try{
            await logIn(email, password);
            navigate("/dashboard");
        }catch(err){
            setError(err.message);
        }
    };
    return(
        <>
            <div className="login-container">
                <div className="p-4 box">
                    <h1 className="mb-3">Login</h1>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email Address" 
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <div className="d-grid gap-2">
                            <Button variant="primary" type="Submit">
                                Login
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
            
        </>
    )
}

export default Login;