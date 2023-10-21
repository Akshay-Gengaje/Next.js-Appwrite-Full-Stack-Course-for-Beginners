"use client";

import React, { useState } from "react";
// import { axios } from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import TextField from "@mui/material/TextField";

export default function SignupPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignUp = () => {};
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-10 md:px-20 text-center min-h-screen">
      <div className="border border-white px-24 py-5 rounded-xl">
        <h1 className="text-3xl font-serif m-5 uppercase">Sign Up </h1>
        <div className="flex flex-col mt-5">
          <label htmlFor="username" className="text-left my-1">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter Username"
            className="p-2 rounded-md outline-none focus-within:border-2  focus-within:border-blue-400"
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="email" className="text-left my-1">
            Email Address
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Email Address"
            className="p-2 rounded-md outline-none focus-within:border-2  focus-within:border-blue-400"
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="password" className="text-left my-1">
            Password
          </label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Enter password"
            className="p-2 rounded-md outline-none focus-within:border-2  focus-within:border-blue-400"
          />
        </div>

        <button className="text-white py-3 px-7 border border-white rounded-md m-5 hover:bg-white hover:text-black ">
          Sign Up
        </button>

        <div className="m-5 hover:text-blue-400">
          <Link href="/login">Go to Login Page</Link>
        </div>
      </div>
    </div>
  );
}
