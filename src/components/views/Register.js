import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {registerUser} from "../../actions/user_action";
import { useNavigate } from 'react-router-dom';

function Register(){

    const[Email, setEmail] = useState("")
    const[Password, setPassword] = useState("")
    const[Name, setName] = useState("")
    const[ConfirmPassword, setConfirmPassword] = useState("")
    const dispatch = useDispatch()
    let navigate = useNavigate();

    //register check handler
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onNamedHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onConfirmPassword = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()

        if(Password !== ConfirmPassword){
            return alert('비밀번호가 다릅니다.')
        }
        let body = {
            email: Email,
            password:Password,
            name: Name
        }
        dispatch(registerUser(body))
            .then(res =>{
                if(res.payload.success){
                    navigate('/login')
                }
                else {
                    alert('err')
                }
            })
    }

    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100vh'}}>
            <form style={{display:'flex', flexDirection:'column'}} onSubmit={onSubmitHandler}>
                <h1>Register Page</h1>
                <br/>
                <label>Name</label>
                <input type = "name" value ={Name} onChange={onNamedHandler}/>
                <label>Email</label>
                <input type = "email" value ={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type = "password" value ={Password} onChange={onPasswordHandler}/>
                <label>Confirm Password</label>
                <input type = "password" value ={ConfirmPassword} onChange={onConfirmPassword}/>
                <br/>
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register
