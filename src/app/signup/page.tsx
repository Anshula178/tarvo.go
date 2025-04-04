"use client"

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation"; 
import { toast } from "sonner";
import { useForm } from "react-hook-form";


const SignupPage = () => {
  const router=useRouter()
  
 
  const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm()
 
  
  const [showPassword,setshowPassword]=useState(false)

  const OnSubmit = async (data:any) => {
    try {
      const res = await fetch("/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        toast.success(" Registration successful! ");
          router.push("/login")
      } else {
        toast.error(result.error || "Something went wrong.");
      }
    } catch {
        toast.error("Error connecting to server.");
    } 
  };
    const toggleP=()=>{
        setshowPassword(!showPassword)
    }
   
  return (
    <div className="flex justify-center   items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full ring-2 py-14  rign-sky-500 max-w-md p-8 bg-white rounded-2xl  shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

       

        <form onSubmit={handleSubmit( OnSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-600">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              {...register("userName",{required:"Username is required"})}
              className="w-full p-3 border text-black rounded-lg focus:ring focus:ring-blue-200 outline-none"
              
            />
            {errors.userName && (
              <p className="text-red-500 text-sm mt-1">{errors.userName.message as String}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              
              placeholder="Enter your email"
              {...register("email",{required:"Email is required"})}
              className="w-full p-3 border text-black rounded-lg focus:ring focus:ring-blue-200 outline-none"
              
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message as String}</p>
            )}
          </div>

          <div className="relative">
            <label className="block text-gray-600">Password</label>
            <input
              type={showPassword? "text":"password"}
             
              placeholder="Enter your password"
              {...register("password",{required:"Password is required"})}
              className="w-full p-3 border text-black rounded-lg focus:ring focus:ring-blue-200 outline-none"
            
            />
           

              <button
              type="button"
              onClick={toggleP}
              className="absolute top-10 right-4 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message as String}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Registering..." : "Sign Up"}
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
