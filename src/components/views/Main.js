import React from 'react'
import { useNavigate } from 'react-router-dom';

function Main(){

    let navigate = useNavigate();

    const onClickHandler1 = () =>{
        navigate('/login')
    }

    const onClickHandler2 = () =>{
        navigate('/register')
    }

    return (
        <div style={{display:'flex', flexDirection: "column",justifyContent:'center', alignItems:'center', width:'100%', height:'100vh'}}>
            <h1>Main Page</h1>
            <br/>
            <button onClick={onClickHandler1}>
                로그인 페이지
            </button>
            <br/>
            <button onClick={onClickHandler2}>
                회원가입 페이지
            </button>
        </div>
    )
}

export default Main