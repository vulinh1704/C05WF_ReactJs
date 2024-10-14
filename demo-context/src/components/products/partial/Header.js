import { Link } from "react-router-dom";

export function Header() {
    // thông tin user
    return (
        <>
            <h1>Header</h1>

            <Link to={"/home"}>Home</Link> |
            <Link to={"/add"}>Add</Link> |
            <hr/>
        </>
    )
}