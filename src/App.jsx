// React Router DOM
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Redux Toolkit
import { useDispatch, useSelector } from "react-redux";
// Components
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
// CSS File
import "remixicon/fonts/remixicon.css";

import axios from "axios";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const { authStateChange, currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <div className="App bg-[#fff] h-screen overflow-y-auto">
      {/*<BrowserRouter>*/}
      {/*  <Routes>*/}
      {/*    <Route path="/login" element={<Login />} />*/}
      {/*    <Route path="/register" element={<SignUp />} />*/}
      {/*  </Routes>*/}
      {/*</BrowserRouter>*/}
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
