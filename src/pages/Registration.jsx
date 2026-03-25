import React, { useState } from "react";
import { Link } from "react-router";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Registration = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Password validation regex
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*]/.test(password);
  const hasMinLength = password.length >= 8;

  const passwordStrength = () => {
    if (hasMinLength && hasNumber && hasSpecial) return "Strong";
    if (hasMinLength && (hasNumber || hasSpecial)) return "Medium";
    if (password.length > 0) return "Weak";
    return "";
  };

  const passwordColor = () => {
    const strength = passwordStrength();
    if (strength === "Strong") return "text-green-600";
    if (strength === "Medium") return "text-yellow-500";
    if (strength === "Weak") return "text-red-500";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(hasMinLength && hasNumber && hasSpecial)) return;
    if (!isSignIn && password !== confirmPassword) return;

    alert(isSignIn ? "Signed In!" : "Signed Up!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Link to="/">
            <img src="/logo.png" alt="MegaMart" className="w-32 md:w-36" />
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>

        {/* Toggle */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsSignIn(true)}
            className={`px-4 py-2 rounded-tl-lg rounded-bl-lg font-semibold ${
              isSignIn ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignIn(false)}
            className={`px-4 py-2 rounded-tr-lg rounded-br-lg font-semibold ${
              !isSignIn ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {/* Password Field */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {/* Password Strength Indicator */}
          {password.length > 0 && (
            <p className={`text-sm ${passwordColor()}`}>
              Password Strength: {passwordStrength()}
            </p>
          )}

          {/* Confirm Password */}
          {!isSignIn && (
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          )}

          {/* Confirm Password Mismatch */}
          {!isSignIn && confirmPassword && confirmPassword !== password && (
            <p className="text-red-500 text-sm">Passwords do not match.</p>
          )}

          <button
            type="submit"
            disabled={
              (!isSignIn && (password !== confirmPassword || !hasMinLength || !hasNumber || !hasSpecial)) ||
              (!isSignIn && password.length === 0)
            }
            className="bg-blue-500 disabled:bg-blue-300 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-gray-500">
          {isSignIn ? (
            <>
              Don't have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setIsSignIn(false)}
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setIsSignIn(true)}
              >
                Sign In
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Registration;