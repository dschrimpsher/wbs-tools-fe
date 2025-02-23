import React from 'react';
import Image from "next/image";

const Home: React.FC = () => {
    return (
        <div className="mainContent flex flex-col items-center text-center p-6">
            {/* ✅ Centered Logo with Spacing */}
            <Image src="/wbsconnect.webp" alt="WBS Logo" width={200} height={200} className="mb-4" />

            <h1>Welcome to WBS Connect</h1>

            <p>
                WBS Connect is designed to make it easier than ever to connect with, manage, and grade your
                World Bible School students worldwide. Whether you're a teacher guiding students through their
                faith journey or an administrator overseeing progress, our platform provides the tools you need
                in one seamless experience.
            </p>

            <p>
                With an intuitive interface and streamlined workflow, you can effortlessly track student progress,
                manage lessons, and provide meaningful feedback—all from one central dashboard.
            </p>

            <p>
                Join us in spreading the Gospel and empowering students through structured, engaging Bible studies.
                WBS Connect makes online Bible education simple, effective, and impactful.
            </p>
        </div>
    );
};

export default Home;
