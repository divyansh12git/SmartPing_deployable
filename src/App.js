import React from "react"; 
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
} from "react-router-dom";
import Home from "./pages/home";
import Chat from "./pages/chat";
import Health from "./pages/health";
import AboutUs from "./pages/aboutus";
import Traffic from "./pages/traffic";
import Imguploader from "./pages/Imguploader";
import ImageAnalyzer from "./pages/imageanalyzer";
import Login from "./pages/login";
import Signup from "./pages/signup";


const App=()=>{
  return(
    <Router>
        <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/health" element={<Health />}></Route>
        <Route path="/traffic" element={<Traffic />}></Route>
        <Route path="/aboutUs" element={<AboutUs />}></Route>
        <Route path="/Imguploader" element={<Imguploader />}></Route>
        </Routes>
    </Router>
  )
}
export default App;
