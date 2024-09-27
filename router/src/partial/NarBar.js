import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <>
            <h1>Đây là NavBar</h1>
            <Link to={"/home/product"}>Home</Link> |
            <Link to={"/home/category"}>Category</Link> |
            <Link to={"/home/blog"}>Blog</Link> |
            <hr></hr>
        </>
    )
}