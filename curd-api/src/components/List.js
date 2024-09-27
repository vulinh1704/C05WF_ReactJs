import { useEffect, useState } from "react"

export function List() {
    const [list, setList] = useState([]);

    const getData = () => {
        // axios.get()
    }


    useEffect(() => {
        getData()
    },[])
    return (
        <>
        <h1>Đây là list</h1>
        {/* list.map */}
        </>
    )
}

// Luyện tập lại phần router (tạo router, link, params, navigate)
// Get ra được thông students từ BE
// Hoàn thành CRUD
