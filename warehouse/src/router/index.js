import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";

export default function Index () {
    return (
        <BrowserRouter>
    
          <div className="main-route-place">
            <Routes>
              <Route exact path="/" element={<Login/>} />
              <Route path="/register" element={<Register />} />
              {/* <Route path="/employee" element={} />
               <Route path="/employee-detail" element={} />  */}
            </Routes>
            </div>
        </BrowserRouter>
      )
}