import "../css/Header.css";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <>
            <div className="header">
                <Link to="/home/list">Trang chủ</Link> |
                <Link to="/home/add">Add</Link>
            </div>
        </>
    )
}