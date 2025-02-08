// app/layout.tsx (Root layout file)

import React from 'react';
import "./globals.css";
import Nav from "./components/Nav";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <div className="flex min-h-screen">
            {/* Sidebar Navigation */}
            <Nav />

            {/* Main Content */}
            <main className="bg-secondary flex-1 py-6">{children}</main>
        </div>
        </body>
        </html>
    );
}

