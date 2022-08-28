// React Router DOM
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Redux Toolkit
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChange } from "./redux/features/userSlice";
// Components
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
// CSS File
import "remixicon/fonts/remixicon.css";

import axios from "axios";

function App() {
  const { authStateChange, currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <div className="App bg-[#eee] h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
