import { NavBar } from "./partial/NarBar";
import { Footer } from "./partial/Footer";
import { Outlet } from "react-router-dom";

export function Home() {
    return (
        <>
            <NavBar />  
            <Outlet/> 
            {/* Component đại diện cho các component sẽ thay thể vào đây
            phụ thuộc vào đường dẫn tương ứng mà ta định nghĩa bên App */}
            <Footer />
        </>
    )
}