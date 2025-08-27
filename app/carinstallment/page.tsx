"use client";

import type { NextPage } from "next";
import Image from "next/image";
import React from "react";

const CarInstallmentCalculatorPage: NextPage = () => {
  return (
    // Container หลัก: กำหนดพื้นหลังและจัดให้อยู่กึ่งกลาง
    <div
      className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4"
      style={{ fontFamily: "'Sarabun', sans-serif" }}
    >
      {/* Card หลักสำหรับเครื่องคำนวณ */}
      <div className="w-full max-w-md bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl shadow-purple-500/10 p-8 space-y-6">
        {/* ส่วนหัวของการ์ด */}
        <div className="text-center">
          <Image
            src="/calculator.png"
            alt="Car Icon"
            className="mx-auto mb-4 rounded-full border-2 border-gray-700"
            width={120}
            height={120}
          />
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Car Installment Calculator
          </h1>
          <p className="text-gray-400 mt-1">คำนวณค่างวดรถยนต์</p>
        </div>

        {/* ฟอร์มสำหรับกรอกข้อมูล */}
        <div className="space-y-4">
          {/* ราคารถยนต์ */}
          <div>
            <label
              htmlFor="car-price"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              ราคารถยนต์ (บาท)
            </label>
            <input
              type="number"
              id="car-price"
              placeholder="เช่น 800000"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>

          {/* เงินดาวน์ */}
          <div>
            <label
              htmlFor="down-payment"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              เงินดาวน์ (%)
            </label>
            <input
              type="number"
              id="down-payment"
              placeholder="เช่น 25"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>

          {/* อัตราดอกเบี้ย */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              อัตราดอกเบี้ยต่อปี (%)
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mt-2">
              {["15", "20", "25", "30", "35"].map((rate) => (
                <label
                  key={rate}
                  className="flex items-center justify-center p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 text-center transition-colors has-[:checked]:bg-purple-500 has-[:checked]:text-white has-[:checked]:font-bold"
                >
                  <input
                    type="radio"
                    name="interest-rate"
                    value={rate}
                    className="sr-only"
                  />
                  <span>{rate}%</span>
                </label>
              ))}
            </div>
          </div>

          {/* ระยะเวลาผ่อน */}
          <div>
            <label
              htmlFor="loan-term"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              ระยะเวลาผ่อน (ปี)
            </label>
            <select
              id="loan-term"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            >
              <option value="1">1 ปี (12 งวด)</option>
              <option value="2">2 ปี (24 งวด)</option>
              <option value="3">3 ปี (36 งวด)</option>
              <option value="4">4 ปี (48 งวด)</option>
              <option value="5">5 ปี (60 งวด)</option>
              <option value="6">6 ปี (72 งวด)</option>
            </select>
          </div>
        </div>

        {/* ปุ่มคำสั่ง */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
            คำนวณค่างวด
          </button>
          <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
            รีเซ็ต
          </button>
        </div>

        {/* ส่วนแสดงผลลัพธ์ */}
        <div className="text-center bg-gray-900/50 rounded-lg p-4">
          <p className="text-gray-400">ค่างวดต่อเดือน:</p>
          <p className="text-4xl font-bold text-purple-400">0.00</p>
        </div>
      </div>
    </div>
  );
};

export default CarInstallmentCalculatorPage;
