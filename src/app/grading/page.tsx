'use client'

// src/students/StudentInfoPage.tsx
import React, {ChangeEvent, useState} from "react";
import axios from "axios";
import {Answers, Contacts, GenderTypes, Grades, Lessons, Students, Students_StudentWBSBefore, Teachers} from "../types";
import SearchStudent from "@/app/components/SearchStudent";
import StudentInfo from "@/app/components/StudentInfo";
import LessonSelection from "@/app/components/LessonSelection";
import AnswerComp from "@/app/components/AnswersComp";
import {useRouter} from "next/navigation";

const GradingPage: React.FC = () => {
        const [studentRecNo, setStudentRecNo] = useState<string>("");
        const [lessonRecNo, setLessonRecNo] = useState<number>(1);
        const [missedQuestions, setMissedQuestions] = useState<number>(0);
        const [totalQuestions, setTotalQuestions] = useState<number>(0);
        const [studentData, setStudentData] = useState<Students | null>(null);
        const [allLessonData, setAllLessonData] = useState<Lessons[]>([]);
        const [selectedLessonData, setSelectedLessonData] = useState<Lessons | null>(null);
        const [allGrades, setAllGrades] = useState<Grades[]>([]);
        const [selectedLessonGrades, setSelectedLessonGrades] = useState<Grades | null>(null);
        const [error, setError] = useState<string>("");

        const router = useRouter();
        const handleStudentLetter = () => {
            router.push(`/letters/${studentRecNo}`); // Change to your target page
        };

        const handleStudentGrade = async () => {
            const response = await axios.post(`/api/grades`);


        };

        const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
            setStudentRecNo(e.target.value);
        };

        const handleAnswerChange = (e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.checked) {
                setMissedQuestions(missedQuestions + 1);
            } else {
                setMissedQuestions(missedQuestions - 1);
            }
        };

        const handleSelectLessonChange = async (e: ChangeEvent<HTMLSelectElement>) => {
            setMissedQuestions(0);
            const index = parseInt(e.target.value);
            if (index > 0) {
                let l = allLessonData.find((v: Lessons) => v.LessonRecNo === index);
                if (!l) {
                    setSelectedLessonData(null);
                } else {
                    setSelectedLessonData(l);
                    const g = allGrades.find((v: Grades) => v.GradeLessonsRecNo === index);
                    if (g) {
                        setSelectedLessonGrades(g);
                    } else {
                        setSelectedLessonGrades(null);
                    }
                    if (l.Answers && l.Answers.length > 0) {
                        setTotalQuestions(l.Answers.length);
                    }
                }
            } else {
                setSelectedLessonData(null);
            }
            setLessonRecNo(parseInt(e.target.value));
        };

        const fetchStudentAndLessons = async () => {
            try {
                const response = await axios.get(`/api/students/${studentRecNo}`);
                const student = new Students(response.data);
                setStudentData(student);
                const response2 = await axios.get(`/api/lessons`);
                const lessons = response2.data.map((item: any) => {
                    return new Lessons(item);
                });
                const response3 = await axios.get(`/api/grades/${studentRecNo}`);
                const grades = response3.data.map((item: any) => {
                    return new Grades(item);
                });
                setAllLessonData(lessons);
                setAllGrades(grades);
                setSelectedLessonData(lessons[0]);
                setSelectedLessonGrades(null);
                setLessonRecNo(lessons[0].LessonRecNo);
                setTotalQuestions(lessons[0].Answers.length);
                setError("");
            } catch (err) {
                console.error(err);
                setError("Student not found or an error occurred.");
                setStudentData(null);
            }
        };

        return (
            <div className="p-8 font-sans bg-background min-h-screen">
                {/* ✅ Using the SearchStudent Component */}
                <SearchStudent
                    studentRecNo={studentRecNo}
                    onInputChange={handleInputChange}
                    onSearchClick={fetchStudentAndLessons}
                />
                {error && <p className="text-red-500">{error}</p>}
                {studentData && (
                    <div className="workArea">
                        <div>
                            <StudentInfo studentData={studentData}/>
                        </div>
                        <div>
                            {allLessonData.length > 0 && (
                                <LessonSelection lessonSelected={lessonRecNo} lessons={allLessonData}
                                                 handleLessonChange={handleSelectLessonChange}
                                                 handleStudentLetter={handleStudentLetter}
                                handleStudentGrade={handleStudentGrade}/>
                            )}
                        </div>
                        <div>
                            {selectedLessonData && (
                                <AnswerComp missedQuestions={missedQuestions} totalQuestions={totalQuestions}
                                            selectedLesson={selectedLessonData}
                                            handleAnswerChange={handleAnswerChange}
                                            selectedLessonGrades={selectedLessonGrades}/>
                            )}
                        </div>
                    </div>
                )
                }
            </div>
        )
            ;
    }
;

export default GradingPage;
