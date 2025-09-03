import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -40, scale: 0.98, transition: { duration: 0.3 } },
};

export default function Welcome({
  name = "Marry Doe",
  email = "Marry@Gmail.Com",
}) {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 px-2"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="w-full max-w-5xl bg-gradient-to-br from-gray-900 via-black to-purple-900 bg-opacity-95 rounded-2xl shadow-2xl flex flex-col p-4 md:p-12"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center md:text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Account Settings
        </motion.h2>
        <motion.div
          className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <FaUserCircle className="text-5xl md:text-6xl text-purple-400 bg-gray-900 rounded-full p-2" />
          <div className="text-center md:text-left">
            <div className="text-lg md:text-xl font-bold text-white">
              {name}
            </div>
            <div className="text-sm md:text-md text-purple-200">{email}</div>
          </div>
        </motion.div>
        <motion.div
          className="text-gray-200 text-base md:text-lg mb-8 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          POPX is your e-commerce store dashboard. Manage products, track
          orders, and grow your business online with ease.
          <br />
          <br />
          With POPX, you can easily add new products, monitor your inventory,
          and keep track of all your orders in one place. Connect with your
          customers, analyze your sales, and expand your business with powerful
          tools designed for agencies and companies.
          <br />
          <br />
          Start exploring your dashboard and unlock new opportunities for your
          online store!
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
