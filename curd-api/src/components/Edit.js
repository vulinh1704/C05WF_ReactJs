import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom"

export function Edit() {
    const { id } = useParams();
    const [oldData, setOldData] = useState({});
    const [name, setName] = useState('');
    const [score, setScore] = useState('');


    const getOlData = () {
        axios.get("http://localhost:3000/students/" + id).then((res) => {
            setOldData(res.data);
        })
    }

    const update = () => {
        // let data = {...}
        axios.put("http://localhost:3000/students/"+ id, data);
    }
    return (
        <>
        {/* Input */}
            <h1>Đây là edit {id}</h1>
            // btn update
        </>
    )
}