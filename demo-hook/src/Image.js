import axios from "axios";
import { useEffect, useState } from "react"

export function Image() {
    const [list, setList] = useState([]);
    const getData = () => {
        axios.get("https://api.thecatapi.com/v1/images/search?limit=10").then((res) => {
            let { data } = res; // <=> let data = res.data;
            setList(data);
        })
    }
    // useEffect: đảm bảo vòng đời bên function component
    // componentDidMount ~ useEffect(() => {}, []): chạy 1 lần sau render đầu tiên, thường dùng để lấy dữ liệu từ BE để nhât lên state
    useEffect(() => {
        getData();
    }, [])
    return (
        <>
        {/* 
        map list => [] => giao diện trống
        list => lấy được dữ liệu từ backend => componentDidMount
        */}
            <button onClick={() => { getData() }}>Lấy data</button>
            <h1>List Image</h1>
            {
                list.map((item) => (
                    <>
                        <h1>Url: {item.url} - Width: {item.width} - Height: {item.height}</h1>
                        <img src={item.url} width={item.width} height={item.height}></img>
                    </>
                ))
            }
        </>
    )
}

// Bất đồng bộ và xử lý bất động bộ trong NodeJs (2 buổi)
// Router trong React (2 -3 buổi)
// Làm dự án nhỏ tương đối hoàn chỉnh (Có API)
// Ghép CSS vào React
// useContext (2 buổi)
// Luyện tập
// case


// Luyện tập bài tập demo trên và tìm hiểu xử lý bất động bộ, xử lý bất đồng bộ và ghi ra GG docs.