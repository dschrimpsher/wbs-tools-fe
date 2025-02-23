"use client";

import React from "react";
import {Answers, Grades, Lessons, Students, Students_StudentWBSBefore} from "@/app/types";
import { useRouter } from "next/navigation";

interface AnswersProps {
    missedQuestions: number;
    totalQuestions: number;
    selectedLesson: Lessons | null;
    handleAnswerChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    selectedLessonGrades: Grades | null;
}

const AnswerComp: React.FC<AnswersProps> = ({missedQuestions, totalQuestions, selectedLesson, handleAnswerChange, selectedLessonGrades}) => {
    console.log(selectedLessonGrades?.GradeDateGraded?.toString());
    const t = selectedLessonGrades?.GradeDateGraded?.toString().substring(0, 10);
    return (
        <div>
            <h2 className="sectionHeading">Answers</h2>
            <p/>
            <label className="label2">Lesson Selected</label>
            <label className="grade">{selectedLesson?.LessonName}</label>

            <div className="option-divider"/>

            {selectedLessonGrades?.GradeRecNo && (
                <div className="grade">
                    <label className="label2">Lesson Completed {t} </label><p/>
                    <label className="label2">Score: </label>
                    <label className="gradetext">{selectedLessonGrades.GradeScore}%</label>
                </div>
            )}
            {!selectedLessonGrades?.GradeRecNo && selectedLesson && (
                <div className="grade">
                    <label className="subsectionHeading">Check Box for wrong answers</label> <p/>
                    <label className="label2">Score: </label>
                    <label className="gradetext">{totalQuestions - missedQuestions}/{totalQuestions}</label>
                    <label className="gradetext ml-4">{selectedLessonGrades?.GradeScore}%</label>

                </div>
            )}
            {!selectedLessonGrades?.GradeRecNo && selectedLesson?.Answers && (
                selectedLesson.Answers.map((answer, index) =>
                    <div key={index}>
                        <div className="questions">
                        <label className="label2">{answer.AnswerQuestionNo})</label>
                        <label className="label2">{answer.AnswerCorrectAnswer}</label>
                        <input type="checkbox" className="checkbox1 ml-4" onChange={handleAnswerChange}/>
                        </div>
                    </div>
                )
            )
            }
        </div>
    );
};

export default AnswerComp;
