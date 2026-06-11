import { Temporal } from "@js-temporal/polyfill";
// import{
//     Student,
//     isStudent,
//     parseStudent}
//     from"./models/student.model";


// const student: Student = {
// id: "STU-001",
// name: "Hana Tadesse",
// enrollmentDate: Temporal.Now.instant(),
// };


// // Try these what does the compiler say?
// student.id = "STU-999";
// console.log(student.gpa?.toFixed(2));
// console.log(student.gpa?.toFixed(2) ?? "Not yet graded");




// function processStudent(raw: unknown) {
// if (isStudent(raw)) {
// const gpaDisplay = raw.gpa?.toFixed(2) ?? "Not yet graded";



// console.log(`Student ${raw.name} GPA: ${gpaDisplay}`);
// } else {
// console.error("Invalid student data received");
// }
// }


// // Prints: Student Hana GPA: 3.70
// processStudent(42);


// console.log(parseStudent({ id: "STU-001", 
//     name: "Hana",
// gpa: 3.7
//  }));
 
// // Prints a valid Student object
// parseStudent({ id: 42, name: "Test" });

// // Throws: TypeError: Expected id to be 

import { AssessmentItem, calculateGrade } from "./models/assessment.model";
const quiz: AssessmentItem = {
id: "QUIZ-001",
kind: "quiz",
title: "SQL Basics",
correctAnswers: 8,
totalQuestions: 10,
};
const lab: AssessmentItem = {
id: "LAB-001",
kind: "lab",
title: "REST API Project",
functionalityScore: 85,
codeQualityScore: 90,
};
console.log(`Quiz grade: ${calculateGrade(quiz)}%`); // 80
console.log(`Lab grade: ${calculateGrade(lab)}%`); // 87
// Verify readonly try this line and check the compiler error:
// quiz.id = "QUIZ-999";
// ERROR: Cannot assign to 'id' because it is a read-only property
import { CourseStatus, describeCourse } from "./models/course.model";
const webDev: CourseStatus = {
status: "ACTIVE",
enrolledCount: 28,
startDate: Temporal.PlainDate.from("2026-09-01"),
};
console.log(describeCourse(webDev));
// Should print something like: Active with 28 students since 2026-09-01