import React, { useState } from "react";
import { motion } from "framer-motion";
import Welcome from "./Welcome";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -40, scale: 0.98, transition: { duration: 0.3 } },
};

export default function Create({ onSignup }) {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "no",
  });
  const [errors, setErrors] = useState({});
  const [showWelcome, setShowWelcome] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (form.fullName.length < 8)
      newErrors.fullName = "Full name must be at least 8 characters.";
    if (!/^\d{10,}$/.test(form.phone))
      newErrors.phone = "Phone number must be at least 10 digits.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email address.";
    if (form.password.length < 10)
      newErrors.password = "Password must be at least 10 characters.";
    if (!form.company) newErrors.company = "Company name is required.";
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
      if (onSignup) onSignup(form);
    }
  };

  if (showWelcome) {
    return <Welcome name={form.fullName} email={form.email} />;
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
            Create Your Account
          </h2>
          <p className="text-gray-300 mb-8 text-base md:text-lg">
            Join POPX and unlock the full power of our e-commerce platform for
            your business.
          </p>
          <ul className="text-gray-200 space-y-2 mb-8 text-base md:text-lg">
            <li>✔ Manage your products and orders</li>
            <li>✔ Connect with customers</li>
            <li>✔ Grow your agency or company online</li>
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
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            className="p-2 md:p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 text-base md:text-lg"
          />
          {errors.fullName && (
            <span className="text-red-400 text-sm">{errors.fullName}</span>
          )}
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="p-2 md:p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 text-base md:text-lg"
          />
          {errors.phone && (
            <span className="text-red-400 text-sm">{errors.phone}</span>
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
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
            className="p-2 md:p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 text-base md:text-lg"
          />
          {errors.company && (
            <span className="text-red-400 text-sm">{errors.company}</span>
          )}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mt-2">
            <span className="text-white text-base md:text-lg">
              Are you an agency?
            </span>
            <div className="flex gap-4">
              <label className="text-white flex items-center gap-1">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={form.agency === "yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label className="text-white flex items-center gap-1">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={form.agency === "no"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>
          <motion.button
            type="submit"
            className="w-full py-2 md:py-3 rounded-lg bg-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-400 transition-shadow mt-4 text-base md:text-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 0 24px #a78bfa" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Welcome to POPX
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
}
