import React, {useRef} from 'react';
import './Login.css';
import Home from './Home'

export default function Login() {

    const email=useRef()
    const password=useRef()
    const getEmail=localStorage.getItem("emailData")
    const getPassword=localStorage.getItem("passwordData")
    const handleSubmit=()=>{
        if(email.current.value==="abc@gmail.com"&&password.current.value==="12345"){
            localStorage.setItem("emailData", "abc@gmail.com")
            localStorage.setItem("passwordData", "12345")
        }
    }

    return(
        <div className="Bob">
            {
                getEmail&&getPassword?
                <Home />:
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={email}/>
                </div>
                <div>
                    <input type="password" ref={password} />
                </div>
                <button>Login</button>
            </form>
}
        </div>
    )
}