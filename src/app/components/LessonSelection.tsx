"use client";

import React from "react";
import {GenderTypes, Lessons, Students} from "@/app/types";
import {Button} from "@material-tailwind/react";
import { Mail, Save } from "lucide-react";

interface LessonSelectionProps {
    lessonSelected: number;
    lessons: Lessons[];
    handleLessonChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleStudentLetter (): void;
    handleStudentGrade (): void;
}


const LessonSelection: React.FC<LessonSelectionProps> = ({lessonSelected, lessons, handleLessonChange,
                                                             handleStudentLetter, handleStudentGrade }) => {
    console.log(`We should start with ${lessonSelected}`);
    console.log(`Which is ${lessons[lessonSelected - 1].LessonRecNo}`);
    return (
        <div>
            <h2 className="sectionHeading">Lessons</h2>
            <label className="label2">Choose Lesson</label>
            <div>
                <select
                    className="inputShow ml-4 mb-6 w-64 p-2 border-2 border-dark bg-white
             shadow-[4px_4px_0px_rgba(0,0,0,0.4)] rounded-lg
             transition-all duration-200
             hover:shadow-[2px_2px_0px_rgba(0,0,0,0.6)] hover:translate-y-1
             active:shadow-none active:translate-y-2
             focus:outline-none focus:ring-2 focus:ring-primary"
                    onChange={handleLessonChange}
                    value={lessonSelected}>
                    {lessons.map((lesson) => (
                        <option key={lesson.LessonRecNo} value={lesson.LessonRecNo}>
                            {lesson.LessonRecNo}-{lesson.LessonName}
                        </option>))}
                </select>
            </div>
            <div>
                <h2 className="sectionHeading">Save Grade</h2>
                <p/><button className="button1 my-4" onClick={handleStudentGrade}>
                <Save className="w-5 h-5" />
                <span>Save Grade</span>
            </button>
            </div>
            <h2 className="sectionHeading">Student Letter</h2>
            <label className="label2">When done grading, click here to build the letter to your student.</label>
            <p/><button className="button1 my-4" onClick={handleStudentLetter}>
                <Mail className="w-5 h-5" /> Send Letter
            </button>
        </div>
    )
        ;
};

export default LessonSelection;
