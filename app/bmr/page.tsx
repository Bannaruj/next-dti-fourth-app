"use client";

import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const BmrCalculatorPage: NextPage = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [bmr, setBmr] = useState("");
  const [gender, setGender] = useState("");

  const handlereset = () => {
    setWeight("");
    setHeight("");
    setAge("");
    setBmr("");
    setGender("");
  };

  const calculateBmr = () => {
    let result = 0;
    if (gender === "male") {
      result =
        88.362 +
        13.397 * parseInt(weight) +
        4.799 * parseInt(height) -
        5.677 * parseInt(age);
    } else if (gender === "female") {
      result =
        447.593 +
        9.247 * parseInt(weight) +
        3.098 * parseInt(height) -
        4.33 * parseInt(age);
    }
    setBmr(result.toFixed(2));
  };

  return (
    <div
      className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4"
      style={{ fontFamily: "'Sarabun', sans-serif" }}
    >
      <div className="w-full max-w-md bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl shadow-blue-500/10 p-8 space-y-6">
        <div className="text-center">
          <Image
            src="/calculator.png"
            alt="BMR Icon"
            className="mx-auto mb-4 rounded-full border-2 border-gray-700"
            width={120}
            height={120}
          />
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            BMR Calculator
          </h1>
          <p className="text-gray-400 mt-1">คำนวณอัตราการเผาผลาญพลังงาน</p>
        </div>

        <div className="space-y-4">
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
              placeholder="เช่น 70"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

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
              placeholder="เช่น 175"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              ป้อนอายุ (ปี)
            </label>
            <input
              type="number"
              id="age"
              placeholder="เช่น 25"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              เลือกเพศ
            </label>
            <div className="flex gap-4 items-center mt-2">
              <label className="flex items-center gap-2 p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 flex-1 justify-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="form-radio text-blue-500 bg-gray-800 border-gray-600 focus:ring-blue-500"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <span className="text-white">ชาย</span>
              </label>
              <label className="flex items-center gap-2 p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 flex-1 justify-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="form-radio text-pink-500 bg-gray-800 border-gray-600 focus:ring-pink-500"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <span className="text-white">หญิง</span>
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
            onClick={calculateBmr}
          >
            คำนวณ BMR
          </button>
          <button
            className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
            onClick={handlereset}
          >
            รีเซ็ต
          </button>
        </div>

        <div className="text-center bg-gray-900/50 rounded-lg p-4">
          <p className="text-gray-400">ค่า BMR ที่คำนวณได้:</p>
          <p className="text-4xl font-bold text-blue-400">{bmr}</p>
        </div>
      </div>
    </div>
  );
};

export default BmrCalculatorPage;
