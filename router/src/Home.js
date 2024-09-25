import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
        <Link to="/add">Add Product</Link> |  
        <Link to="/edit">Edit</Link>
        <h1>Đây là home</h1>
        </>
    )
}