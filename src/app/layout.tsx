// app/layout.tsx (Root layout file)

import React from 'react';
import "./globals.css";
import Nav from "./components/Nav";
import Image from "next/image";


export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <div className="flex flex-col min-h-screen">
            {/* ✅ Title Bar */}
            <header className="bg-primary text-white text-2xl font-bold py-4 shadow-md flex items-center justify-between px-16">
                {/* ✅ Left-Aligned Logo */}
                <Image src="/mayfairlogo.png" alt="WBS Logo" width={50} height={50} className="h-12 w-auto" />

                {/* ✅ Centered Title */}
                <div className="flex-1 text-center">
                    WBS Connect
                    <p className="text-accent text-base">Mayfair Church of Christ WBS ID: AL-025</p>
                </div>

                {/* ✅ Optional Spacer for Better Centering */}
                <div className="w-12">
                    <Image src="/wbsconnect.webp" alt="WBS Logo" width={50} height={50} className="h-12 w-auto" />
                </div>
            </header>

            <div className="flex flex-1">
                {/* Sidebar Navigation */}
                <Nav/>

                {/* Main Content */}
                <main className="bg-secondary flex-1 py-6">{children}</main>
            </div>
        </div>

        </body>
        </html>
    );
}

