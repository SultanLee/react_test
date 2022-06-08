import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {loginUser} from "../../actions/user_action";
import { useNavigate } from 'react-router-dom';

function Login(){

    const[Email, setEmail] = useState("")
    const[Password, setPassword] = useState("")
    const dispatch = useDispatch()
    let navigate = useNavigate();

    //login check handler
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        let body = {
            email: Email,
            password:Password
        }
        dispatch(loginUser(body))
            .then(res =>{
                if(res.payload.loginSuccess){
                    navigate('/')
                }
                else {
                    alert('err')
                }
            })
    }

    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100vh'}}>
            <form style={{display:'flex', flexDirection:'column'}} onSubmit={onSubmitHandler}>
                <h1>LogIn Page</h1>
                <br/>
                <label>Email</label>
                <input type = "email" value ={Email} onChange={onEmailHandler} />
                <label>password</label>
                <input type = "password" value ={Password} onChange={onPasswordHandler}/>
                <br/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
