import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import MyEditor from "./components/MyEditor";
import UserProfile from "./pages/UserProfile";
import NoteDetails from "./components/NoteDetails";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "remixicon/fonts/remixicon.css";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChange } from "./redux/features/userSlice";
import axios from "axios";

function App() {
  const { authStateChange, currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [create, setCreate] = useState(false);
  const [detail, setDetail] = useState(false);

  const fetchCurrentUser = async (token) => {
    const res = await axios.get("http://localhost:4000/users/me", {
      headers: {
        "auth-token": token,
      },
    });
    dispatch(onAuthStateChange(res.data.user));
  };

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) fetchCurrentUser(token);
    dispatch(onAuthStateChange(null));
  }, []);
  return (
    <div className="App bg-[#151515] h-screen overflow-hidden relative">
      {authStateChange && (
        <BrowserRouter>
          <div className={"h-full text-white font-poppins overflow-y-auto"}>
            <AnimatePresence>
              {create && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 h-full bg-black bg-opacity-80 grid place-items-center z-20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="w-11/12 md:w-2/6 bg-[#161616] h-auto relative rounded-md overflow-hidden"
                  >
                    <MyEditor setCreate={setCreate} />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {detail && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 h-full bg-black bg-opacity-80 grid place-items-center z-20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="w-11/12 md:w-2/6 bg-[#161616] h-auto relative rounded-md overflow-hidden"
                  >
                    <NoteDetails setDetail={setDetail} />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            {currentUser && <Header />}
            <Routes>
              <Route
                path="/"
                element={
                  currentUser ? (
                    <UserProfile setCreate={setCreate} setDetail={setDetail} />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
              <Route
                path="/login"
                element={!currentUser ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/register"
                element={!currentUser ? <SignUp /> : <Navigate to="/" />}
              />
            </Routes>
            {currentUser && <Footer />}
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
