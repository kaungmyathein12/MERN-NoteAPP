// React Router DOM
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Redux Toolkit
import { useDispatch, useSelector } from "react-redux";
// Components
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
// CSS File
import "remixicon/fonts/remixicon.css";

import axios from "axios";
import { useEffect } from "react";
import { onAuthStateChange } from "./redux/features/userSlice.js";
import Create from "./pages/Create.jsx";
import Detail from "./pages/Detail.jsx";
import Update from "./pages/Update.jsx";

function App() {
  const { authStateChange, currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const fetchData = async (token) => {
    try {
      const apiKey = import.meta.env.VITE_REACT_API_URL;
      const res = await axios.get(`${apiKey}/users/me`, {
        headers: {
          "auth-token": token,
        },
      });
      dispatch(onAuthStateChange({ token, user: res.data.user }));
    } catch (e) {
      localStorage.removeItem("jwtToken");
      dispatch(onAuthStateChange({ user: null }));
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      const app = fetchData(token);
    } else {
      dispatch(onAuthStateChange({ user: null }));
    }
  }, []);
  return (
    <div className="App bg-[#fff] h-screen overflow-y-auto">
      {authStateChange && (
        <BrowserRouter>
          {currentUser && <Header />}
          <Routes>
            <Route
              path="/"
              element={currentUser ? <Home /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/create"
              element={currentUser ? <Create /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/notes/detail/:id"
              element={currentUser ? <Detail /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/notes/update/:id"
              element={currentUser ? <Update /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/login"
              element={!currentUser ? <Login /> : <Navigate to={"/"} />}
            />
            <Route
              path="/register"
              element={!currentUser ? <SignUp /> : <Navigate to={"/"} />}
            />
          </Routes>
          {currentUser && <Footer />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
