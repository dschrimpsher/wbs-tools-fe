"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Nav() {
    const pathname = usePathname();

    return (
        <nav className="navigationContent">
            <div className="logo">
                <Image src="/wbslogo.png" alt="WBS Logo" width={120} height={50} />
            </div>
            <div className="navigation1">
            <Link href="/" className={`nav-link ${pathname === "/" ? "nav-link-active" : ""}`}>
                Home
            </Link>
            <Link href="/grading" className={`nav-link ${pathname === "/grading" ? "nav-link-active" : ""}`}>
                Grading Lessons
            </Link>
            <Link href="/students" className={`nav-link ${pathname === "/students" ? "nav-link-active" : ""}`}>
                Students
            </Link>
            <Link href="/coordinators" className={`nav-link ${pathname === "/coordinators" ? "nav-link-active" : ""}`}>
                Coordinators
            </Link>
            </div>
        </nav>
    );
}
