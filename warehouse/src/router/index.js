import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";


export default function Index () {
    return (
        <BrowserRouter>
    
          <div className="main-route-place">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
               <Route path="/home" element={<Home />} />
               {/* <Route path="/employee-detail" element={} />   */}
            </Routes>
            </div>
        </BrowserRouter>
      )
}