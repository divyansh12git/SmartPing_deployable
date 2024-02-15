import React from "react"; 
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home";
import Chat from "./pages/chat";
import Health from "./pages/health";
import AboutUs from "./pages/aboutus";
import Traffic from "./pages/traffic";
import ImageAnalyzer from "./pages/imageanalyzer";


const App=()=>{
  return(
    <Router>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/health" element={<Health />}></Route>
        <Route path="/traffic" element={<Traffic />}></Route>
        <Route path="/aboutUs" element={<AboutUs />}></Route>
        <Route path="/imageAnalyzer" element={<ImageAnalyzer />}></Route>
        </Routes>
    </Router>
  )
}
export default App;
