"use client";

import React, {ChangeEvent} from "react";
import {GenderTypes} from "@/app/types";
import {Students} from "@/app/types";

interface StudentInfoProps {
    studentData: Students;
    handleStudentChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SearchStudent: React.FC<StudentInfoProps> = ({studentData, handleStudentChange, handleSelectChange}) => {
    return (
        <div>
            <h2 className="wbsInfo">Student Information</h2>
            <label className="label2">
                Student Name
            </label>
            <input
                className="inputShowName"
                type="text"
                value={studentData.StudentFirstName}
                onChange={handleStudentChange}
            />
            <input
                className="inputShowName"
                type="text"
                value={studentData.StudentLastName}
                onChange={handleStudentChange}
            />
            <p>
                <label className="label2">
                    Student ID
                </label>
                <label className="fixedData ml-7">{studentData.StudentRecNo} </label>
                {studentData.StudentID && studentData.StudentID != String(studentData.StudentRecNo) && (
                    <label className="fixedData text-accent">({studentData.StudentID}) </label>
                )}
            </p>
            <p>
                <label className="label2">
                    Student Age
                </label>
                <input
                    className="inputShow ml-4"
                    type="text"
                    value={studentData.StudentAge}
                    onChange={handleStudentChange}
                />
            </p>
            {
                studentData.StudentBirthdateIso && (
                    <p>
                        <label className="label2">
                            Birthdate
                        </label>
                        <input
                            className="inputShow ml-10"
                            type="date"
                            defaultValue={studentData.StudentBirthdateIso}
                            onChange={handleStudentChange}
                        />
                    </p>
                )
            }
            <p>
                <label className="label2">
                    Gender
                </label>
                <select
                    className="inputShow ml-12"
                    value={studentData.StudentGenderShow || GenderTypes.Unknown}
                    onChange={handleSelectChange}>
                    <option value={GenderTypes.Male}>Male</option>
                    <option value={GenderTypes.Female}>Female</option>
                    <option value={GenderTypes.Unknown}>Unknown</option>
                </select>
            </p>
            <p>
                <label className="label2">
                    Occupation
                </label>
                <input
                    className="inputShow ml-5"
                    type="text"
                    value={studentData.StudentOccupation}
                    onChange={handleStudentChange}
                />
            </p>
        </div>
    )
    ;
};

export default SearchStudent;
