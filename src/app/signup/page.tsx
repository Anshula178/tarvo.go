"use client"

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation"; 


const SignupPage = () => {
  const router=useRouter()
  const [user, setUser] = useState({
    email: "",
    password: "",
    userName: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword,setshowPassword]=useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const res = await fetch("/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(" Registration successful! ");
          router.push("/login")
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch {
      setError("Error connecting to server.");
    } finally {
      setLoading(false);
    }
  };
    const toggleP=()=>{
        setshowPassword(!showPassword)
    }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full ring-2 py-14 rign-sky-500 max-w-md p-8 bg-white rounded-2xl  shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        {message && <p className="text-center text-green-500">{message}</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600">Username</label>
            <input
              type="text"
              name="userName"
              placeholder="Enter your username"
              value={user.userName}
              onChange={handleChange}
              className="w-full p-3 border text-black rounded-lg focus:ring focus:ring-blue-200 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleChange}
              className="w-full p-3 border text-black rounded-lg focus:ring focus:ring-blue-200 outline-none"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-gray-600">Password</label>
            <input
              type={showPassword? "text":"password"}
              name="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={handleChange}
              className="w-full p-3 border text-black rounded-lg focus:ring focus:ring-blue-200 outline-none"
              required
            />
              <button
              type="button"
              onClick={toggleP}
              className="absolute top-10 right-4 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            disabled={loading}
          >
            {loading ? "Registering..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 font-semibold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
