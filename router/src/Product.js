import { Link } from "react-router-dom";

export function Product() {
    return (
        <>
            <Link to="/add">Add Product</Link> |
            <Link to="/edit">Edit</Link>
            <h1>Đây là Product</h1>
        </>
    )
}