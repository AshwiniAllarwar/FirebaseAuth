import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom';

export const Signin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
    return (
        <>
            <div className="gap-5 md:grid-cols-2 mt-5">
                <input 
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email" 
                    placeholder="Email*"
                    required                                                                                
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                    className="w-full bg-gray-100 text-gray-900 mt-5 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="Password*"
                    id="password"
                    name="password"                                  
                    required
                    onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <div className="my-2 w-1/2 lg:w-1/4 mt-5">
                <button
                    className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                            focus:outline-none focus:shadow-outline"
                    onClick={onLogin}
                >
                Login
                </button>
            </div>

            <p className="text-black">
                No account yet? {' '}
                <NavLink to="/signup">
                    Sign up
                </NavLink>
            </p>
        </>
    )
}
