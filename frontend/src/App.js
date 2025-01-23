import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
//import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {
    return (
        <div classNamme="App">
            <Header></Header>
            <Home></Home>
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