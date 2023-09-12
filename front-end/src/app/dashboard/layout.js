"use client";
import "./dashboard.css";
import { Context } from "@/components/context/contextApp";
import { Navbar } from "@/components/navbar";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <Context>
      <html lang="en">
        <Head>
          <title>Bitcafe</title>
        </Head>
        <body>
          <header>
            <Navbar />
          </header>
          <main>
            <div className="overflow-y-auto p-4 sm:ml-64 bg-gradient-to-r from-[#6F4E37] via-[#654335] to-[#51312E] h-[100vh]">
              <div className="p-4 rounded-lg">{children}</div>
            </div>
          </main>
        </body>
      </html>
    </Context>
  );
}
