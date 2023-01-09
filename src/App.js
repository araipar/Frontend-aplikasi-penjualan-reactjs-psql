import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import Login from "./components/Login";
import EditUser from "./components/EditUser";
import ReportList from "./components/ReportList";
import ProductList from "./components/ProductList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="add" element={<AddUser/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="edit/:id" element={<EditUser/>}/>
        <Route path="report" element={<ReportList/>}/>
      </Routes>
    </BrowserRouter>
  );
}
// test
export default App;
