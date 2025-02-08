"use client";

import React, { ChangeEvent } from "react";

interface SearchStudentProps {
    studentRecNo: string;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSearchClick: () => void;
}

const SearchStudent: React.FC<SearchStudentProps> = ({ studentRecNo, onInputChange, onSearchClick }) => {
    return (
        <div className="mb-6 flex items-center space-x-2">
            <input
                className="input1"
                type="text"
                placeholder="Enter Student ID"
                value={studentRecNo}
                onChange={onInputChange}
            />
            <button className="button1" onClick={onSearchClick}>
                Search Student
            </button>
        </div>
    );
};

export default SearchStudent;
