import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Add } from "./Add";
import { Edit } from "./Edit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;


// Luyện tập lại router cơ bản
// Tìm hiểu về <Outlet> của react router
// Buổi sau: CRUD hoàn chỉnh có chia router và tương tác với API
