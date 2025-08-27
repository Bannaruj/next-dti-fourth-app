import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700",]
});


export const metadata: Metadata = {
  title: "Calculator Varity 2025 by DTI-SAU",
  description: "เครื่องคำนวนโดยNinNin",
  keywords :["เครื่องคำนวน","BMI","BMR","Car Installment"],
  icons:{
    icon: "/calculator.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className}`}
      >
        {children}
      </body>
    </html>
  );
}
