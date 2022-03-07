import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service"
import Blog from "../pages/Blog"
import CarInfo from "../pages/CarInfo";
import NewCar from "../pages/NewCar";
import Manager from "../pages/Manage";
export default function Index () {
    return (
        <BrowserRouter>
    
          <div className="main-route-place">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
               <Route path="/home" element={<Home />} />
               <Route path="/about" element={<About />} /> 
               <Route path="/service" element={<Service />} /> 
               <Route path="/blog" element={<Blog />} />  
               <Route exact path={'/car/add'} element={<NewCar/>} />
                <Route exact path={`/car/:carId`} element={<CarInfo/>} />
                <Route path="/manager" element={<Manager />} />  
            </Routes>
            </div>
        </BrowserRouter>
      )
}