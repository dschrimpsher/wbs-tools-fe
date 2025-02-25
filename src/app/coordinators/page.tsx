'use client'

// src/students/StudentInfoPage.tsx
import React, {ChangeEvent, useState} from "react";
import axios from "axios";
import {Contacts, GenderTypes, Students, Students_StudentWBSBefore, Teachers} from "../types";
import SearchStudent from "@/app/components/SearchStudent";
import SearchTeacher from "@/app/components/SearchTeacher";

const StudentInfoPage: React.FC = () => {
        const [studentRecNo, setStudentRecNo] = useState<string>("");
        const [contactRecNo, setContactRecNo] = useState<string>("");
        const [teacherRecNo, setTeacherRecNo] = useState<string>("");
        const [studentData, setStudentData] = useState<Students | null>(null);
        const [contactData, setContactData] = useState<Contacts | null>(null);
        const [teacherData, setTeacherData] = useState<Teachers | null>(null);
        const [error, setError] = useState<string>("");

        const handleStudentInputChange = (e: ChangeEvent<HTMLInputElement>) => {
            setStudentRecNo(e.target.value);
        };

        const handleTeacherInputChange = (e: ChangeEvent<HTMLInputElement>) => {
            setTeacherRecNo(e.target.value);
        };

        const handleStudentChange = (e: ChangeEvent<HTMLInputElement>) => {
            if (studentData) {
                setStudentData({...studentData});
            } else {
                setError("Student data is not loaded yet.");
            }
        };

        const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
            if (studentData) {
                setStudentData({
                    ...studentData,
                    StudentWBSBefore: e.target.checked ? Students_StudentWBSBefore.Yes : Students_StudentWBSBefore.No
                });
            } else {
                setError("Student data is not loaded yet.");
            }
        };

        const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
            if (studentData) {
                setStudentData({...studentData, StudentGender: e.target.value});
            } else {
                setError("Student data is not loaded yet.");
            }
        };

        const fetchContact = async (id: number) => {
            try {
                console.log(`/api/contacts/${id}`)
                const response = await axios.get(`/api/contacts/${id}`);
                const contact = new Contacts(response.data);
                setContactData(contact);
                setError("");
            } catch (err) {
                console.error(err);
                setError("Contact not found or an error occurred.");
                setContactData(null);
            }
        };

        const fetchStudentsTeacher = async (id: number) => {
            try {
                console.log(`/api/teachers/${id}`)
                const response = await axios.get(`/api/teachers/${id}`);
                const teacher = new Teachers(response.data);
                setTeacherData(teacher);
                setError("");
            } catch (err) {
                console.error(err);
                setError("Teacher not found or an error occurred.");
                setTeacherData(null);
            }
        };

        const fetchTeacher = async () => {
            try {
                const response = await axios.get(`/api/teachers/${teacherRecNo}`);
                const teacher = new Teachers(response.data);
                setTeacherData(teacher);
                setError("");
            } catch (err) {
                console.error(err);
                setError("Teacher not found or an error occurred.");
                setTeacherData(null);
            }
        };

        const fetchStudent = async () => {
            try {
                const response = await axios.get(`/api/students/${studentRecNo}`);
                const student = new Students(response.data);
                setStudentData(student);
                if (student.StudentContactsRecNo) {
                    await fetchContact(student.StudentContactsRecNo);
                }
                if (student.StudentTeachersRecNo) {
                    await fetchStudentsTeacher(student.StudentTeachersRecNo);
                }
                console.log(student.StudentWBSBefore);
                setError("");
            } catch (err) {
                console.error(err);
                setError("Student not found or an error occurred.");
                setStudentData(null);
            }
        };

        return (
            <div className="mainContent">
                <h1>Lookup Student</h1>
                <p className="wbsInfo">Mayfair Church of Christ WBS ID: AL-025</p>
                {/* ✅ Using the SearchStudent Component */}
                <SearchStudent
                    studentRecNo={studentRecNo}
                    onInputChange={handleStudentInputChange}
                    onSearchClick={fetchStudent}
                />
                <SearchTeacher
                    teacherRecNo={teacherRecNo}
                    onInputChange={handleTeacherInputChange}
                    onSearchClick={fetchTeacher}
                />
                {error && <p className="text-red-500">{error}</p>}
                {teacherData && (
                    <div className="p-6 bg-secondary rounded shadow">
                        <p>Found Teacher</p>
                    </div>
                )}
                {studentData && (
                    <div className="p-6 bg-secondary rounded shadow">
                        <div className="grid grid-cols-2">
                            <div>
                                <h2 className="wbsInfo">Student Information</h2>
                                <label className="label2">
                                    Student Name
                                </label>
                                <input
                                    className="inputShowName"
                                    type="text"
                                    value={studentData.StudentFirstName}
                                    onChange={handleStudentInputChange}
                                />
                                <input
                                    className="inputShowName"
                                    type="text"
                                    value={studentData.StudentLastName}
                                    onChange={handleStudentInputChange}
                                />
                                <p>
                                    <label className="label2">
                                        Student ID
                                    </label>
                                    <label className="fixedData ml-7">{studentData.StudentRecNo} </label>
                                    {studentData.StudentID && studentData.StudentID != studentRecNo && (
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
                                        onChange={handleStudentInputChange}
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
                                                onChange={handleStudentInputChange}
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
                                <div className="option-divider"/>
                                <h2 className="wbsInfo my-4">Contact Information</h2>
                                <p>
                                    <label className="label2">
                                        Email Address
                                    </label>
                                    <input
                                        className="inputShow ml-1"
                                        type="text"
                                        value={studentData.StudentEmailAddress}
                                        onChange={handleStudentInputChange}
                                    />
                                </p>
                                <p>
                                    <label className="label2">
                                        Phone #1
                                    </label>
                                    <input
                                        className="inputShow ml-9"
                                        type="text"
                                        value={studentData.StudentPhone1}
                                        onChange={handleStudentInputChange}
                                    />
                                </p>
                                <p>
                                    <label className="label2">
                                        Phone #2
                                    </label>
                                    <input
                                        className="inputShow ml-9"
                                        type="text"
                                        value={studentData.StudentPhone2}
                                        onChange={handleStudentInputChange}
                                    />
                                </p>
                                <p>
                                    <label className="label2">
                                        Postal Address
                                    </label>
                                    <input
                                        className="inputShow ml-0"
                                        type="text"
                                        value={studentData.StudentPostalAddress}
                                        onChange={handleStudentInputChange}
                                    />
                                </p>
                                <p>
                                    <label className="label2">
                                        City
                                    </label>
                                    <input
                                        className="inputShow ml-20"
                                        type="text"
                                        value={studentData.StudentCity}
                                        onChange={handleStudentInputChange}
                                    />
                                </p>
                                <p>
                                    <label className="label2">
                                        <span>State</span>{" "}
                                    </label>
                                    <input
                                        className="inputShow ml-16"
                                        type="text"
                                        value={studentData.StudentState}
                                        onChange={handleStudentInputChange}
                                    />
                                </p>
                                <p>
                                    <label className="label2">
                                        Country
                                    </label>
                                    <input
                                        className="inputShow ml-12"
                                        type="text"
                                        value={studentData.StudentCountry}
                                        onChange={handleStudentInputChange}
                                    />
                                </p>
                            </div>
                            <div>
                                <h2 className="wbsInfo">School Information</h2>
                                <p>
                                    <label className="label2">
                                        Contact/KFM
                                    </label>
                                    {contactData && (
                                        <label
                                            className="fixedData ">{contactData.ContactFirstName} {contactData.ContactLastName}</label>)}

                                </p>
                                <p>
                                    <label className="label2">
                                        Teacher
                                    </label>
                                    {teacherData && (
                                        <label
                                            className="fixedData ml-9">{teacherData.TeacherFirstName} {teacherData.TeacherLastName}</label>)}

                                </p>
                                <p>
                                    <label className="label2">
                                        WBS Before?
                                    </label>
                                    {teacherData && (
                                        <input type="checkbox" className="checkbox1 ml-10"
                                               checked={studentData.StudentWBSBefore == Students_StudentWBSBefore.Yes}
                                               onChange={handleCheckboxChange}/>)}
                                </p>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        )
            ;
    }
;

export default StudentInfoPage;
