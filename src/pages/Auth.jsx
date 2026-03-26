import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    fullName: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (
      !formData.username ||
      !formData.password ||
      (!isLogin && !formData.fullName)
    ) {
      setError("Please fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (isLogin) {
      const user = users.find(
        (u) =>
          u.username === formData.username && u.password === formData.password,
      );
      if (user) {
        localStorage.setItem("user", JSON.stringify(user)); // save current session
        navigate("/profile");
      } else {
        setError("Invalid username or password");
      }
    } else {
      const exists = users.find((u) => u.username === formData.username);
      if (exists) {
        setError("Username already exists");
        return;
      }
      const newUser = {
        username: formData.username,
        password: formData.password,
        fullName: formData.fullName,
      };
      const updatedUsers = [...users, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      localStorage.setItem("user", JSON.stringify(newUser)); // login after signup
      navigate("/profile");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md flex flex-col gap-4"
      >
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Mega Mart
        </h1>

        <div className="flex justify-center gap-4 mb-4">
          <button
            type="button"
            className={`px-4 py-2 rounded-xl font-semibold transition ${
              isLogin ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Sign In
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-xl font-semibold transition ${
              !isLogin ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {!isLogin && (
          <div className="flex flex-col">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="border rounded-xl p-2 mt-1"
              value={formData.fullName}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, fullName: e.target.value }))
              }
            />
          </div>
        )}

        <div className="flex flex-col">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            className="border rounded-xl p-2 mt-1"
            value={formData.username}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, username: e.target.value }))
            }
          />
        </div>

        <div className="relative flex flex-col">
          <label>Password</label>
          <input
            type={showPass ? "text" : "password"}
            placeholder="Enter password"
            className="border rounded-xl p-2 mt-1"
            value={formData.password}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          {showPass ? (
            <IoEye
              onClick={() => setShowPass(!showPass)}
              className="absolute right-2 top-9 cursor-pointer"
            />
          ) : (
            <IoEyeOff
              onClick={() => setShowPass(!showPass)}
              className="absolute right-2 top-9 cursor-pointer"
            />
          )}
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="bg-blue-600 text-white rounded-xl py-2 mt-2 hover:bg-blue-700 transition"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Auth;
