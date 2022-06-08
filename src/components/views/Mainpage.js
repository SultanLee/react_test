import React from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Mainpage(){

    let navigate = useNavigate();

    //logout
    const onClickHandler = () =>{
        axios.get('/api/users/logout')
            .then(res => {
                if(res.data.success){
                    alert('로그아웃 되었습니다.')
                    navigate('/login')
                }
                else {
                    alert('err')
                }
            })
    }

    return (
        <div style={{display:'flex', flexDirection: "column",justifyContent:'center', alignItems:'center', width:'100%', height:'100vh'}}>
            <h1>MainPage</h1>
            <br/>
            <button onClick={onClickHandler}>
                로그아웃
            </button>
        </div>
    )
}

export default Mainpage