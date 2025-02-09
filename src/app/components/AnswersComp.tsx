"use client";

import React from "react";
import {Answers, Lessons, Students, Students_StudentWBSBefore} from "@/app/types";
import { useRouter } from "next/navigation";

interface AnswersProps {
    missedQuestions: number;
    totalQuestions: number;
    selectedLesson: Lessons | null;
    handleAnswerChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AnswerComp: React.FC<AnswersProps> = ({missedQuestions, totalQuestions, selectedLesson, handleAnswerChange}) => {

    return (
        <div>
            <h2 className="sectionHeading">Answers</h2>
            <p/>
            <label className="label2">Lesson Selected</label>
            <label className="grade">{selectedLesson?.LessonName}</label>

            <div className="option-divider"/>

            <label className="subsectionHeading">Check Box for wrong answers</label>
            {selectedLesson && (
                <div className="grade">
                    <label className="label2">Score: </label>
                    <label className="gradetext">{totalQuestions - missedQuestions}/{totalQuestions}</label>
                </div>
            )}
            {selectedLesson?.Answers && (
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
