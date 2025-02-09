'use client'

import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import { Contacts, GenderTypes, Students, Students_StudentWBSBefore, Teachers } from "../types";
import SearchStudent from "../components/SearchStudent";
import StudentInfo from "@/app/components/StudentEdit";
import studentInfo from "@/app/components/StudentEdit";  // ✅ Import the new component

const StudentInfoPage: React.FC = () => {
  const [studentRecNo, setStudentRecNo] = useState<string>("");
  const [studentData, setStudentData] = useState<Students | null>(null);
  const [contactData, setContactData] = useState<Contacts | null>(null);
  const [teacherData, setTeacherData] = useState<Teachers | null>(null);
  const [error, setError] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStudentRecNo(e.target.value);
  };

  const handleStudentChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (studentData) {
      setStudentData({ ...studentData });
    } else {
      setError("Student data is not loaded yet.");
    }  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (studentData) {
      setStudentData({ ...studentData, StudentWBSBefore: e.target.checked ? Students_StudentWBSBefore.Yes : Students_StudentWBSBefore.No });
    } else {
      setError("Student data is not loaded yet.");
    }
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (studentData) {
      setStudentData({ ...studentData, StudentGender: e.target.value });
    } else {
      setError("Student data is not loaded yet.");
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
        await fetchTeacher(student.StudentTeachersRecNo);
      }
      setError("");
    } catch (err) {
      console.error(err);
      setError("Student not found or an error occurred.");
      setStudentData(null);
    }
  };

  const fetchContact = async (id: number) => {
    try {
      const response = await axios.get(`/api/contacts/${id}`);
      setContactData(new Contacts(response.data));
      setError("");
    } catch (err) {
      console.error(err);
      setError("Contact not found or an error occurred.");
      setContactData(null);
    }
  };

  const fetchTeacher = async (id: number) => {
    try {
      const response = await axios.get(`/api/teachers/${id}`);
      setTeacherData(new Teachers(response.data));
      setError("");
    } catch (err) {
      console.error(err);
      setError("Teacher not found or an error occurred.");
      setTeacherData(null);
    }
  };

  return (
      <div className="p-8 font-sans bg-background min-h-screen">
        <h1>Create or Edit Student</h1>
        <p className="wbsInfo">Mayfair Church of Christ WBS ID: AL-025</p>

        {/* ✅ Using the SearchStudent Component */}
        <SearchStudent
            studentRecNo={studentRecNo}
            onInputChange={handleInputChange}
            onSearchClick={fetchStudent}
        />

        {error && <p className="text-red-500">{error}</p>}
        {studentData && (
            <div className="p-6 bg-secondary rounded shadow">
              <div className="grid grid-cols-2">
                <div>
                  <StudentInfo studentData={studentData} handleStudentChange={handleStudentChange} handleSelectChange={handleSelectChange}/>
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                        <label className="fixedData ">{contactData.ContactFirstName} {contactData.ContactLastName}</label>)}

                  </p>
                  <p>
                    <label className="label2">
                      Teacher
                    </label>
                    {teacherData && (
                        <label className="fixedData ml-9">{teacherData.TeacherFirstName} {teacherData.TeacherLastName}</label>)}

                  </p>
                  <p>
                    <label className="label2">
                      WBS Before?
                    </label>
                    {teacherData && (
                        <input type="checkbox" className="checkbox1 ml-10" checked={studentData.StudentWBSBefore == Students_StudentWBSBefore.Yes} onChange={handleCheckboxChange} />)}
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