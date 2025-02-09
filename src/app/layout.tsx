// app/layout.tsx (Root layout file)

import React from 'react';
import "./globals.css";
import Nav from "./components/Nav";


export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <div className="flex flex-col min-h-screen">
            {/* ✅ Title Bar */}
            <header className="bg-primary text-white text-2xl font-bold text-center py-4 shadow-md">
                WBS Connect
                <p className="text-accent">Mayfair Church of Christ WBS ID: AL-025</p>
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

