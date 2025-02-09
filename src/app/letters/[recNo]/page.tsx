'use client'

// src/students/StudentInfoPage.tsx
import React, {ChangeEvent, useState} from "react";
import axios from "axios";
import {Answers, Contacts, GenderTypes, Lessons, Students, Students_StudentWBSBefore, Teachers} from "../../types";
import SearchStudent from "@/app/components/SearchStudent";
import StudentInfo from "@/app/components/StudentInfo";
import LessonSelection from "@/app/components/LessonSelection";
import AnswerComp from "@/app/components/AnswersComp";
import {useRouter} from "next/navigation";
import { useParams } from "next/navigation";

const StudentLetters: React.FC = () => {
    const params = useParams();
    const studentRecNo = params.recNo;


        return (
            <div className="p-8 font-sans bg-background min-h-screen">
                    <div className="workArea">
                        <label className="title">Creating PDF for Student {studentRecNo}</label>
                    </div>
            </div>
        )
            ;
    }
;

export default StudentLetters;
