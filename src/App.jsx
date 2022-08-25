import Header from "./components/Header";
import MyEditor from "./components/MyEditor";
import UserProfile from "./pages/UserProfile";
import "remixicon/fonts/remixicon.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function App() {
  const [create, setCreate] = useState(false);
  return (
    <div className="App h-screen overflow-hidden relative">
      <div
        className={
          "bg-[#151515] h-full text-white font-poppins overflow-y-auto"
        }
      >
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
                className="w-2/6 bg-[#161616] h-auto relative"
              >
                <MyEditor setCreate={setCreate} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <Header />
        <UserProfile setCreate={setCreate} />
      </div>
    </div>
  );
}

export default App;
