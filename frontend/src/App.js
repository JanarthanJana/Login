import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
//import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";


const App = () => {
    return (
        <div classNamme="App">
            <Router>
                <div>
                
                <Routes>
                  <Route path="/" element={<Header></Header>}></Route>
                </Routes>
                <Routes>
                  <Route path="/" element={<Home/>}></Route>
                </Routes>
                <Routes>
                <Route path="/product/:id" element={<ProductDetail />} /> </Routes>
                <Routes>
                <Route path="/login" element={<Login />} /> </Routes>
                <Routes>
                <Route path="/dashboard" element={<Dashboard />} /> </Routes>
                </div>
                
            </Router>
            
            
            <Footer></Footer>
        
        </div>
        // <AuthProvider>
        //     <Router>
        //         <nav>
        //             <Link to="/register">Register</Link>
        //             <Link to="/login">Login</Link>
        //             <Link to="/dashboard">Dashboard</Link>
        //         </nav>
        //         <Routes>
        //             <Route path="/register" element={<Register />} />
        //             <Route path="/login" element={<Login />} />
        //             <Route path="/dashboard" element={<Dashboard />} />

        //             <Route path="*" element={<Navigate to="/register"/>}></Route>
        //         </Routes>
        //     </Router>
        // </AuthProvider>
    );
};

export default App;