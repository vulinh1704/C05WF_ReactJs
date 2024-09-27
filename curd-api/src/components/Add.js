import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export function Add() {
    const [name, setName] = useState('');
    const [score, setScore] = useState('');
    const navigate = useNavigate();

    const add = () => {
        // let data = {...}
        axios.post("http://localhost:3000/students", data);
        navigate("/home/list"); 
    }
    return (
        <>
        {/* Input */}
            <h1>Đây là add</h1>
            <button>Thêm mới</button>
        </>
    )
}

