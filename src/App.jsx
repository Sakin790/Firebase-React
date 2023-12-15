import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Navbars from "./Pages/Navbar";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbars />} />
      <Route path="/login" element={<h1>LOGIN</h1>} />
      <Route path="/signin" element={<h1>SIGN IN</h1>} />
    </Routes>
  );
}

export default App;
