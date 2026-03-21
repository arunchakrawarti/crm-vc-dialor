"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import React from "react";


const Signin = () => {
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg space-y-4">
        
        <h2 className="text-xl font-semibold text-center">
          Create Account
        </h2>
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          icon="ri-mail-line"
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
          icon="ri-lock-line"
        />
        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm password"
          icon="ri-lock-password-line"
        />
        <div className="flex items-center gap-2">
          <input type="checkbox" className="h-4 w-4" />
          <label className="text-sm text-gray-600">
            I agree to Terms & Conditions
          </label>
        </div>
        <Button className="w-full bg-black text-white py-2 rounded-lg">
          Sign Up
        </Button>

      </div>
    </div>
  );
};

export default Signin;