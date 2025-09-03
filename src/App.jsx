import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import Create from "./Create";
import Login from "./Login";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -40, scale: 0.98, transition: { duration: 0.3 } },
};

const circleVariants = {
  initial: { scale: 1, boxShadow: "0 0 0px #facc15" },
  hover: { scale: 1.15, boxShadow: "0 0 24px #facc15" },
};

function App() {
  const [showCreate, setShowCreate] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 px-2">
      <AnimatePresence mode="wait">
        {showCreate ? (
          <motion.div
            key="create"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full"
          >
            <Create />
          </motion.div>
        ) : showLogin ? (
          <motion.div
            key="login"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full"
          >
            <Login />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-4xl rounded-2xl shadow-2xl flex flex-col md:flex-row p-4 md:p-8 bg-gradient-to-br from-gray-900 via-black to-purple-900 bg-opacity-95"
          >
           
            <div className="flex flex-col justify-center items-center flex-1 relative min-h-[220px] md:min-h-[300px] mb-8 md:mb-0">
              <motion.div
                className="absolute left-1/2 top-4 md:top-8 transform -translate-x-1/2"
                variants={circleVariants}
                initial="initial"
                whileHover="hover"
              >
                <motion.div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold text-base md:text-lg shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.2, boxShadow: "0 0 32px #facc15" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  1
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute left-1/3 top-16 md:top-32 transform -translate-x-1/2"
                variants={circleVariants}
                initial="initial"
                whileHover="hover"
              >
                <motion.div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold text-base md:text-lg shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.2, boxShadow: "0 0 32px #facc15" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  2
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute left-2/3 top-28 md:top-48 transform -translate-x-1/2"
                variants={circleVariants}
                initial="initial"
                whileHover="hover"
              >
                <motion.div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold text-base md:text-lg shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.2, boxShadow: "0 0 32px #facc15" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  3
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute left-1/2 top-40 md:top-64 transform -translate-x-1/2"
                variants={circleVariants}
                initial="initial"
                whileHover="hover"
              >
                <motion.div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold text-base md:text-lg shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.2, boxShadow: "0 0 32px #facc15" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  4
                </motion.div>
              </motion.div>
            </div>
            {/* Right side: Welcome section */}
            <div className="flex-1 flex flex-col justify-center items-center px-2 md:px-8">
              <motion.h1
                className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg text-center transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{
                  textShadow: "0 0 24px #a78bfa, 0 0 48px #a78bfa",
                  color: "#a78bfa",
                  scale: 1.05,
                }}
              >
                Welcome to PopX
              </motion.h1>
              <motion.p
                className="text-gray-200 mb-8 text-center text-base md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Manage Your Shopping, daily goods, and So much more
              </motion.p>
              <motion.button
                className="w-full py-2 md:py-3 mb-4 rounded-lg bg-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-400 transition-shadow text-base md:text-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 0 24px #a78bfa" }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => setShowCreate(true)}
              >
                Create Account
              </motion.button>
              <motion.button
                className="w-full py-2 md:py-3 rounded-lg bg-purple-200 text-purple-900 font-semibold hover:shadow-lg hover:shadow-purple-300 transition-shadow text-base md:text-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 0 24px #c4b5fd" }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => setShowLogin(true)}
              >
                Already Registered? Login
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
