"use client";

import React, { ChangeEvent } from "react";

interface SearchTeacherProps {
    teacherRecNo: string;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSearchClick: () => void;
}

const SearchTeacher: React.FC<SearchTeacherProps> = ({ teacherRecNo, onInputChange, onSearchClick }) => {
    return (
        <div className="mb-6 flex items-center space-x-2">
            <input
                className="input1"
                type="text"
                placeholder="Enter Teacher ID"
                value={teacherRecNo}
                onChange={onInputChange}
            />
            <button className="button1" onClick={onSearchClick}>
                Search Teacher
            </button>
        </div>
    );
};

export default SearchTeacher;
