"use client";

import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const BmiCalculatorPage: NextPage = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBmi = () => {
    const result =
      parseInt(weight) / ((parseInt(height) / 100) * (parseInt(height) / 100));
    setBmi(result.toFixed(2));
  };

  return (
    // Container หลัก: กำหนดพื้นหลังและจัดให้อยู่กึ่งกลางแนวตั้งและแนวนอน
    <div
      className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4"
      style={{ fontFamily: "'Sarabun', sans-serif" }}
    >
      {/* Card หลักสำหรับเครื่องคำนวณ */}
      <div className="w-full max-w-md bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl shadow-cyan-500/10 p-8 space-y-6">
        {/* ส่วนหัวของการ์ด */}
        <div className="text-center">
          <Image
            src="/calculator.png"
            alt="BMI Icon"
            className="mx-auto mb-4 rounded-full border-2 border-gray-700"
            width={100}
            height={100}
          />
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            BMI Calculator
          </h1>
          <p className="text-gray-400 mt-1">คำนวณดัชนีมวลกาย</p>
        </div>

        {/* ฟอร์มสำหรับกรอกข้อมูล */}
        <div className="space-y-4">
          {/* ช่องป้อนน้ำหนัก */}
          <div>
            <label
              htmlFor="weight"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              ป้อนน้ำหนัก (กิโลกรัม)
            </label>
            <input
              type="number"
              id="weight"
              placeholder="ป้อนน้ำหนัก"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          {/* ช่องป้อนส่วนสูง */}
          <div>
            <label
              htmlFor="height"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              ป้อนส่วนสูง (เซนติเมตร)
            </label>
            <input
              type="number"
              id="height"
              placeholder="ป้อนส่วนสูง"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
        </div>

        {/* ปุ่มคำสั่ง */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
            onClick={calculateBmi}
          >
            คำนวณ BMI
          </button>
          <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
            รีเซ็ต
          </button>
        </div>

        {/* ส่วนแสดงผลลัพธ์ */}
        <div className="text-center bg-gray-900/50 rounded-lg p-4">
          <p className="text-gray-400">ค่า BMI ที่คำนวณได้:</p>
          <p className="text-4xl font-bold text-cyan-400">{bmi}</p>
        </div>
        <Link href="/">
          <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
            ย้อนกลับ
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BmiCalculatorPage;
