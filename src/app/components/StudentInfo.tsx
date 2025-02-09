"use client";

import React from "react";
import {GenderTypes, Students} from "@/app/types";

interface StudentInfoProps {
    studentData: Students;
}

const StudentInfo: React.FC<StudentInfoProps> = ({studentData}) => {
    return (
        <div>
            <h2 className="sectionHeading">Student Information</h2>
            <label className="label2">Student Name</label>
            <label className="fixedData">{studentData.StudentFirstName} {studentData.StudentLastName}</label>
            <p/>
            <label className="label2">Student ID</label>
            <label className="fixedData ml-6">{studentData.StudentRecNo} </label>
            <p/>
            <label className="label2">Student Age</label>
            <label className="fixedData ml-3">{studentData.StudentAge}</label>
            <p/>
            <label className="label2">Gender</label>
            <label className="fixedData ml-11">{studentData.StudentGenderShow || GenderTypes.Unknown} </label>
        </div>
    )
        ;
};

export default StudentInfo;
