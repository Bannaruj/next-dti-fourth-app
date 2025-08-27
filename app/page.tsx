import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { FaWeight, FaCarSide, FaFireAlt } from "react-icons/fa";

// --- ไอคอน SVG (แทนที่ react-icons เพื่อแก้ปัญหา) ---
const BmiIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-20 w-20 text-cyan-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-7v2m0 16v2m-6.364-5.364l1.414 1.414m10.607-10.607l1.414 1.414M4 12H2m20 0h-2M12 2a2 2 0 012 2v1a2 2 0 01-4 0V4a2 2 0 012-2z"
    />
  </svg>
);

const BmrIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-20 w-20 text-blue-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A8.003 8.003 0 0117.657 18.657z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.879 16.121A3 3 0 1014.12 11.88l-4.242 4.242z"
    />
  </svg>
);

const CarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-20 w-20 text-purple-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 17H6.511a1 1 0 01-.964-.694L4.08 8.694A1 1 0 015.044 7.5h13.912a1 1 0 01.964.806l-1.468 7.809A1 1 0 0117.489 17H13m-2 0V9m2 0H9m11 8l-2-2m-2 2l-2-2"
    />
  </svg>
);

// --- Type และ Component ---
type CalculatorCardProps = {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  shadowColor: string;
};

// ใช้ <a> tag มาตรฐานแทน <Link>
const CalculatorCard: React.FC<CalculatorCardProps> = ({
  href,
  icon,
  title,
  description,
  shadowColor,
}) => (
  <a
    href={href}
    className={`group block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden shadow-lg ${shadowColor}/10 hover:${shadowColor}/20 hover:-translate-y-2 transition-all duration-300 ease-in-out`}
  >
    {/* ส่วนแสดงผลไอคอน */}
    <div className="flex items-center justify-center w-full h-48 bg-gray-900/30 group-hover:bg-gray-900/60 transition-colors duration-300">
      {icon}
    </div>
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      <p className="text-gray-400 mb-4 h-20">{description}</p>
      <div className="flex items-center text-cyan-400 font-semibold">
        <span>เริ่มต้นคำนวณ</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </div>
  </a>
);

const Home: NextPage = () => {
  const calculators: CalculatorCardProps[] = [
    {
      href: "/bmi",
      icon: <FaWeight className="w-24 h-24" />,
      title: "คำนวณค่า BMI",
      description:
        "คำนวณดัชนีมวลกาย (Body Mass Index) เพื่อประเมินภาวะน้ำหนักของคุณ",
      shadowColor: "shadow-cyan-500",
    },
    {
      href: "/bmr",
      icon: <FaFireAlt className="w-24 h-24" />,
      title: "คำนวณค่า BMR",
      description:
        "คำนวณอัตราการเผาผลาญพลังงานของร่างกายในแต่ละวัน (Basal Metabolic Rate)",
      shadowColor: "shadow-blue-500",
    },
    {
      href: "/carinstallment",
      icon: <FaCarSide className="w-24 h-24" />,
      title: "คำนวณค่างวดรถ",
      description:
        "คำนวณค่างวดรถยนต์เบื้องต้น พร้อมดอกเบี้ย เพื่อช่วยในการวางแผนการเงิน",
      shadowColor: "shadow-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white antialiased">
      <main
        className="container mx-auto px-6 py-12 md:pb-20"
        style={{ fontFamily: "'Sarabun', sans-serif" }}
      >
        <div>
          <Image
            src="/calculator.png"
            alt="calculator icon"
            width={150}
            height={150}
            className="mx-auto mb-5"
          />
        </div>
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
            คำนวณออนไลน์
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            เลือกเครื่องมือคำนวณที่คุณต้องการใช้งานได้ง่ายๆ ด้านล่างนี้
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {calculators.map((calc) => (
            <CalculatorCard
              key={calc.title}
              href={calc.href}
              icon={calc.icon}
              title={calc.title}
              description={calc.description}
              shadowColor={calc.shadowColor}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
