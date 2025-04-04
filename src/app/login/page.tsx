"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

const Page = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      await res.json(); 

      if (res.ok) {
        toast.success("Login successful");
        router.push("/");
      } else {
        toast.error("Invalid credentials.");
      }
    } catch {
      toast.error("Error connecting to server.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full ring-2 py-14 ring-sky-500 max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
              className="w-full p-3 border text-black rounded-lg focus:ring focus:ring-blue-200 outline-none"
            />
            {errors.email?.message && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="relative">
            <label className="block text-gray-600">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
              placeholder="Enter your Password"
              className="w-full p-3 border text-black rounded-lg focus:ring focus:ring-blue-200 outline-none"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-10 right-4 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.password?.message && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-blue-500 font-semibold">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Page;
