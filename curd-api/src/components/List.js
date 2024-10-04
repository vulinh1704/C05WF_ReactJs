import "../css/List.css";
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function List() {
    const [list, setList] = useState([]);

    const getData = () => {
        axios.get("http://localhost:3000/students").then((res) => {
            let { data } = res;
            console.log(data);
            setList(data);
        })
    }

    useEffect(() => {
        getData()
    }, [])
    // ComponentDidMount

    const remove = (id) => {

        axios.delete("http://localhost:3000/students/" + id).then(() => {
            alert("Xóa thành công");
            getData();
        })
    }

    return (
        <>
            {/* <table border={1}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Score</th>
                    <th colSpan={3}>Action</th>
                </tr>
                {list.map((item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.action}</td>
                        <td>{item.score}</td>
                        <td><button onClick={() => { remove(item.id) }}>Remove</button></td>
                        <td><Link to={"/home/edit/" + item.id}><button>Edit</button></Link></td>
                        <td><Link to={"/home/detail/" + item.id}><button>Detail</button></Link></td>
                    </tr>
                ))}
            </table> */}

            <div className="list">
                {list.map((item) => (
                    <div className="item">
                        <div className="img">
                            <img src={item.img} alt="" />
                        </div>
                        <div class="name">
                            {item.name}
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}

// Luyện tập lại CRUD như demo
// Hoàn thành chức năng xem chi tiết sinh viên (detail)


// Buổi sau
// Update thêm chức năng tìm kiếm
// Validate dữ liệu
