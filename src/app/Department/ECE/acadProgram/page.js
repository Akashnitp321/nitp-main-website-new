"use client";

import { useState } from "react";
import {
  BookOpen,
  Clock,
  Calendar,
  Users,
  GraduationCap,
  FileText,
} from "lucide-react";
import React from "react";
import { AcadProgramCard } from "./AcadProgramCard";

const programs = [
  {
    title: "B.Tech in Electronics & Communication Engineering",
    degree: "B.Tech",
    duration: "4 Years",
    description:
      "The admission to the 4-year B. Tech. (Electronics & Communication Engineering) is through prestigious IIT-JEE (Main). The programme includes a set of core courses together with few electives so that the students can specialize their interests. Following are the course structure and syllabus.",
    syllabus:
      "https://drive.google.com/file/d/1rfCcCrPd9mlA8rXhDOWpxhsItBcgIC-G/view",
  },
  {
    title:
      "B.Tech and M.Tech Dual Degree (Electronics & Communication Engineering with Specialization in Microelectronics and VLSI System Design)",
    degree: "Integrated B.Tech and M.Tech",
    duration: "5 Years",
    description:
      "The admission to the 5-year B. Tech and M. Tech Dual Degree (Electronics & Communication Engineering with Specialization in Microelectronics and VLSI System Design) is through prestigious IIT-JEE (Main). The programme includes a set of core courses together with few electives so that the students can specialize their interests. Following are the course structure and syllabus.",
    syllabus:
      "https://drive.google.com/file/d/1gHBt6g7V09MqE3Sm1xvYMkev53-reXIU/view",
  },
  {
    title: "M.Tech in Microelectronics & VLSI System Design",
    degree: "M.Tech",
    duration: "2 Years",
    description:
      "The admission to the 2-year M. Tech. in Microelectronics & VLSI System Design is through GATE examination. Although the research/dissertation is the main component of the programme, due emphasis is also given to the course works. Following are the course structure and syllabus.",
    syllabus:
      "https://drive.google.com/file/d/1pw8oCC_Z9IGOTFcrrwTdRG46O38Sl1xz/view",
  },
  {
    title: "M.Tech in Next Generation Wireless Technologies",
    degree: "M.Tech",
    duration: "2 Years",
    description:
      "The admission to the 2-year M. Tech. in Next Generation Wireless Technologies is through GATE examination. Although the research/dissertation is the main component of the programme, due emphasis is also given to the course works. Following are the course structure and syllabus.",
    syllabus:
      "https://drive.google.com/file/d/1pw8oCC_Z9IGOTFcrrwTdRG46O38Sl1xz/view",
  },
  {
    title: "Minor courses Minor courses floated by ECE",
    courseStructure: "https://drive.google.com/file/d/1hji7sUoM8GiUIpOfDxXs6xWWPr0N205R/view"
  }
];

const ECEAcadProgrampage = () => {
  return (
    <div>
      <div className="py-1 mt-2">
        <div className="xs:px-0 w-[90%] mx-auto">
          <div className="w-full">
            <h2 className="text-center text-4xl text-red-700 mt-2">
              Academic Programs
            </h2>
            <div className="flex flex-wrap justify-between mt-8">
              {programs.map((program, index) => (
                <AcadProgramCard program={program} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECEAcadProgrampage;
