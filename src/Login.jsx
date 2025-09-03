import React, { useState } from "react";
import { motion } from "framer-motion";
import Welcome from "./Welcome";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -40, scale: 0.98, transition: { duration: 0.3 } },
};

export default function Login({ onLogin }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showWelcome, setShowWelcome] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (form.name.length < 8)
      newErrors.name = "Name must be at least 8 characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email address.";
    if (form.password.length < 10)
      newErrors.password = "Password must be at least 10 characters.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setShowWelcome(true);
      if (onLogin) onLogin(form);
    }
  };

  if (showWelcome) {
    return <Welcome name={form.name} email={form.email} />;
  }

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 px-2"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="w-full max-w-5xl bg-gradient-to-br from-gray-900 via-black to-purple-900 bg-opacity-95 rounded-2xl shadow-2xl flex flex-col md:flex-row p-4 md:p-12 gap-8 md:gap-12">
        
        <motion.div
          className="flex-1 flex flex-col justify-center items-start pr-0 md:pr-8 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Login to POPX
          </h2>
          <p className="text-gray-300 mb-8 text-base md:text-lg">
            Access your POPX account and manage your e-commerce business with
            ease.
          </p>
          <ul className="text-gray-200 space-y-2 mb-8 text-base md:text-lg">
            <li>✔ Track orders and inventory</li>
            <li>✔ Connect with your customers</li>
            <li>✔ Grow your business online</li>
          </ul>
        </motion.div>
        
        <motion.form
          className="flex-1 bg-black bg-opacity-60 rounded-xl shadow-lg p-4 md:p-8 flex flex-col gap-4 md:gap-6 justify-center"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="p-2 md:p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 text-base md:text-lg"
          />
          {errors.name && (
            <span className="text-red-400 text-sm">{errors.name}</span>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="p-2 md:p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 text-base md:text-lg"
          />
          {errors.email && (
            <span className="text-red-400 text-sm">{errors.email}</span>
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="p-2 md:p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 text-base md:text-lg"
          />
          {errors.password && (
            <span className="text-red-400 text-sm">{errors.password}</span>
          )}
          <motion.button
            type="submit"
            className="w-full py-2 md:py-3 rounded-lg bg-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-400 transition-shadow mt-4 text-base md:text-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 0 24px #a78bfa" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Welcome To POPX
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
}
