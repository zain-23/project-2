"use client";
import { Context } from "@/components/context/contextApp";
import "../globals.css";
import Footer from "@/components/public-pages/home/footer";
import { Suspense, useEffect, useState } from "react";
import ScreenLoading from "@/components/screenLoading";
import Navbar from "@/components/public-pages/home/navbar";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <html lang="en">
      <body className="">
        <Context>
          {loading ? (
            <div
              className={`h-[100vh] flex flex-col items-center justify-center gap-y-3 bg-gradient-to-r from-[#6F4E37] via-[#654335] to-[#51312E]`}
            >
              <img src='/logo.png' className='h-28 w-28' />
            </div>
          ) : (
            <Suspense fallback={<ScreenLoading />}>
          <Navbar />
          {children}
          <Footer />
          </Suspense>
          )}
        </Context>
      </body>
    </html>
  );
}
