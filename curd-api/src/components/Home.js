import "../css/Home.css";
import { Outlet } from "react-router-dom";
import { Footer } from "../partial/Footer";
import { Header } from "../partial/Header";

export function Home() {
    return (
        <>
            <div className="container">
                <Header />
                <div className="main">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    )
}

// Ôn tập lại CSS và ghép thuần vào dự án

// Validate (yoi)
// Phân quyền
// Context
// Tai
