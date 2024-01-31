"use client";
import { useState } from "react";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="email"
          placeholder="Email"
          className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
        />
        <input
          type="email"
          placeholder="Confirm Email"
          className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
        />
        <input
          type="text"
          placeholder="Username"
          className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-red-500 rounded-md focus:outline-none hover:bg-red-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
