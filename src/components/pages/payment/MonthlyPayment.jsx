"use client";
import Button from '@/components/common/Button';
import React from 'react';

const MonthlyPayment = () => {
  return (
    <div className="w-full bg-white border border-gray-100 rounded-sm font-inter shadow-sm p-2">
    
      <div className="flex items-center border-b border-gray-100 bg-[#f8f9fa]">
        <div className="w-1/2 p-4 text-gray-800 font-medium text-sm md:text-base">
          Number of Users<span className="text-red-500">*</span>
        </div>
        <div className="w-1/2 p-2 flex items-center justify-center">
          <Button variant='success'>
            <i className="ri-add-line text-xl font-bold"></i>
          </Button>
          <input 
            type="text" 
            placeholder="0"
            className="w-full max-w-[120px] h-10 border border-gray-200 text-center focus:outline-none bg-white font-medium"
          />
          <Button variant='success'>
            <i className="ri-subtract-line text-xl font-bold"></i>
          </Button>
        </div>
      </div>
      <div className="flex items-center border-b border-gray-100 bg-white">
        <div className="w-1/2 p-4 text-gray-800 font-medium text-sm md:text-base">
          Number of Month
        </div>
        <div className="w-1/2 p-2 flex items-center justify-center">
          <Button variant='success'>
            <i className="ri-add-line text-xl font-bold"></i>
          </Button>
          <input 
            type="text" 
            placeholder="0"
            className="w-full max-w-[120px] h-10 border border-gray-200 text-center focus:outline-none bg-white font-medium"
          />
          <Button variant='success'>
            <i className="ri-subtract-line text-xl font-bold"></i>
          </Button>
        </div>
      </div>
      <div className="flex bg-[#f1f3f5] border-b border-gray-200 items-start">
        <div className="w-1/2 p-4">
          <p className="font-bold text-gray-900 leading-tight">Total Monthly Amount</p>
          <p className="text-[10px] md:text-xs text-gray-600 mt-1">
            (Number of users x plan Amount x Months)
          </p>
        </div>
        <div className="w-1/2 p-4 text-[#e11d48] font-semibold text-sm">
          <p className="mb-1">User X ₹ 1000 X month = ₹</p>
          <p className="text-lg md:text-xl font-bold">0.00</p>
        </div>
      </div>
      <div className="flex bg-[#f8f9fa] border-b border-gray-100 items-center">
        <div className="w-1/2 p-4">
          <p className="font-bold text-gray-900 leading-tight">Taxes</p>
          <p className="text-[10px] md:text-xs text-gray-600 mt-1">(18% GST)</p>
        </div>
        <div className="w-1/2 p-4 text-[#e11d48] font-bold text-lg md:text-xl flex items-center gap-1">
          <span>₹</span> 0.00
        </div>
      </div>
      <div className="p-5 bg-white flex justify-center">
        <Button variant='greenbtn'>
          PAY ₹ 0.00
        </Button>
      </div>
    </div>
  );
};

export default MonthlyPayment;