'use client'
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleButton } from "@/reduxStore/pricingSlice";

import { RootState } from '@/reduxStore/store';

const ModalForm= () => {
  const dispatch=useDispatch()
  const isOpen=useSelector((state:RootState)=>state.pricing.button)
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    business: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    dispatch(toggleButton(false));
    setFormData({
      fullName: "",
      address: "",
      business: "",
      phone: "",
      email: "",
    });
  };

  return (
    <div>
  
      {isOpen? (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            <button
              onClick={() => dispatch(toggleButton(false))}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">Fill Your Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                name="business"
                placeholder="Your Business"
                value={formData.business}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      ):null}
    </div>
  );
};

export default ModalForm;
