"use client";
import React, { useState, useEffect } from "react";
import Input from "./Input";

type Props = {};

export default function Entrance({}: Props) {
  const [toggle, setToggle] = useState("SignIn");

  function handleToggle() {
    setToggle((t) => (t == "SignIn" ? "Create" : "SignIn"));
  }

  return (
    <div className="relative w-full h-full bg-[url(/images/hero.jpg)] bg-no-repeat bg-cover">
      <div className="md:bg-black/50 bg-black h-full">
        <nav className="px-6 py-3">
          <img src="/images/logo.png" alt="Logo" className="h-12" />
        </nav>
        <div className="flex justify-center mt-4">
          <div className=" bg-black/80 px-16 py-8 self-center rounded-md">
            <h2 className="text-white font-semibold text-2xl mb-8">
              {toggle == "Create" ? "Sign Up" : "Sign In"}
            </h2>
            {toggle == "Create" && (
              <Input placeholder="Username" type="text" onClick={() => {}} />
            )}
            <Input placeholder="Email" type="email" onClick={() => {}} />
            <Input placeholder="Password" type="password" onClick={() => {}} />
            <button className="w-full bg-red-600 hover:bg-red-700 text-center p-3 rounded-md text-white">
              {toggle == "Create" ? "Create Account" : "Sign In"}
            </button>
            <h2 className="text-zinc-400 mt-3">
              Dont have an account?{" "}
              <span
                className="text-white cursor-pointer"
                onClick={handleToggle}
              >
                Create Now
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
