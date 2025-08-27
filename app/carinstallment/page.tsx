"use client";

import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const CarInstallmentCalculatorPage: NextPage = () => {
  // --- State Management ---
  const [price, setPrice] = useState("");
  const [downPayment, setDownPayment] = useState("25"); // กำหนดค่าเริ่มต้นสำหรับเงินดาวน์
  const [interestRate, setInterestRate] = useState("");
  const [term, setTerm] = useState("4"); // กำหนดค่าเริ่มต้นสำหรับระยะเวลาผ่อน
  const [installment, setInstallment] = useState(0); // ใช้ 0 เป็นค่าเริ่มต้นสำหรับผลลัพธ์

  // --- Calculation Logic ---
  /**
   * Method สำหรับคำนวณค่างวดรถ (Installment)
   */
  const handleCalculate = () => {
    // แปลงค่าจาก String เป็นตัวเลข
    const numPrice = parseFloat(price);
    const numDownPayment = parseFloat(downPayment);
    const numInterestRate = parseFloat(interestRate);
    const numTerm = parseInt(term, 10);

    // ตรวจสอบข้อมูลเบื้องต้น
    if (
      isNaN(numPrice) ||
      isNaN(numInterestRate) ||
      numPrice <= 0 ||
      interestRate === ""
    ) {
      alert("กรุณากรอกราคารถและอัตราดอกเบี้ยให้ถูกต้อง");
      return;
    }

    // คำนวณเงินดาวน์ (บาท)
    const downPaymentAmount = numPrice * (numDownPayment / 100);
    // คำนวณยอดจัดไฟแนนซ์
    const loanPrincipal = numPrice - downPaymentAmount;
    // คำนวณดอกเบี้ยทั้งหมด
    const totalInterest = loanPrincipal * (numInterestRate / 100) * numTerm;
    // คำนวณยอดหนี้ทั้งหมด
    const totalLoanAmount = loanPrincipal + totalInterest;
    // คำนวณจำนวนเดือนที่ผ่อน
    const numberOfMonths = numTerm * 12;
    // คำนวณค่างวดต่อเดือน
    const monthlyInstallment = totalLoanAmount / numberOfMonths;

    // อัปเดต State ของผลลัพธ์
    setInstallment(parseFloat(monthlyInstallment.toFixed(2)));
  };

  /**
   * Method สำหรับรีเซ็ตค่าทั้งหมด
   */
  const handleReset = () => {
    setPrice("");
    setDownPayment("25");
    setInterestRate("");
    setTerm("4");
    setInstallment(0);
  };

  return (
    <div
      className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4"
      style={{ fontFamily: "'Sarabun', sans-serif" }}
    >
      <div className="w-full max-w-md bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl shadow-purple-500/10 p-8 space-y-6">
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
        <div className="space-y-4">
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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="interest-rate-input"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              อัตราดอกเบี้ยต่อปี (%)
            </label>
            <input
              type="number"
              id="interest-rate-input"
              placeholder="เช่น 5"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              เงินดาวน์ (%)
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mt-2">
              {["15", "20", "25", "30", "35"].map((percent) => (
                <label
                  key={percent}
                  className={`flex items-center justify-center p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 text-center transition-colors ${
                    downPayment === percent
                      ? "bg-purple-500 text-white font-bold"
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="down-payment"
                    value={percent}
                    className="sr-only"
                    checked={downPayment === percent}
                    onChange={(e) => setDownPayment(e.target.value)}
                  />
                  <span>{percent}%</span>
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
              value={term}
              onChange={(e) => setTerm(e.target.value)}
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
          <button
            onClick={handleCalculate}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            คำนวณค่างวด
          </button>
          <button
            onClick={handleReset}
            className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            รีเซ็ต
          </button>
        </div>

        {/* ส่วนแสดงผลลัพธ์ */}
        <div className="text-center bg-gray-900/50 rounded-lg p-4">
          <p className="text-gray-400">ค่างวดต่อเดือน:</p>
          <p className="text-4xl font-bold text-purple-400">
            {installment > 0 ? installment.toLocaleString("en-US") : "0.00"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarInstallmentCalculatorPage;
