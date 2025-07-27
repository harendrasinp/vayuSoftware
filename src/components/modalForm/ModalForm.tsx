'use client'
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleButton } from "@/reduxStore/pricingSlice";
import axios from "axios";
import { RootState } from '@/reduxStore/store';

const ModalForm = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.pricing.button)
  const [formData, setFormData] = useState({
    fullname: "",
    Address: "",
    BusinessName: "",
    Phone: "",
    Email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://vayusoftwarebackend.onrender.com/VayuApi/enquiry", formData);
      console.log("Data sent successfully:", res.data);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form.");
    }
    dispatch(toggleButton(false));
    setFormData({
      fullname: "",
      Address: "",
      BusinessName: "",
      Phone: "",
      Email: "",
    });
  };

  return (
    <div>

      {isOpen ? (
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
                name="fullname"
                placeholder="Full Name"
                value={formData.fullname}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                name="Address"
                placeholder="Address"
                value={formData.Address}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                name="BusinessName"
                placeholder="Your Business"
                value={formData.BusinessName}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="tel"
                name="Phone"
                placeholder="Phone Number"
                value={formData.Phone}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="email"
                name="Email"
                placeholder="Email Address"
                value={formData.Email}
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
      ) : null}
    </div>
  );
};

export default ModalForm;
