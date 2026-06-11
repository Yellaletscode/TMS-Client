import { Temporal } from "@js-temporal/polyfill";
import { isStudent, parseStudent, Student } from "./models/student.model.js";
import {
  calculateGrade,
  type AssessmentItem,
} from "./models/assessment.model.js";
import {
  describeEnrollment,
  type EnrollmentStatus,
} from "./models/enrollment.model.js";
import { describeCourse, type Course, type CourseStatus } from "./models/course.model.js";
import { renderResponse, type ApiResponse } from "./models/api-response.model.js";
const student: Student = {
  id: "STU-001",
  name: "Hana Tadesse",
  enrollmentDate: Temporal.Now.instant(),
};
// Try these what does the compiler say?
student.id = "STU-999";
console.log(student.gpa?.toFixed(2));
console.log(student.gpa?.toFixed(2) ?? "Not yet graded");

function processStudent(raw: unknown) {
  if (isStudent(raw)) {
    const gpaDisplay = raw.gpa?.toFixed(2) ?? "Not yet graded";
    console.log(`Student ${raw.name} GPA: ${gpaDisplay}`);
  } else {
    console.error("Invalid student data received");
  }
}
processStudent({ id: "STU-001", name: "Hana", gpa: 3.7 });
processStudent(42);
console.log(parseStudent({ id: "STU-001", name: "Hana" }));
// Prints a valid Student object
// parseStudent({ id: 42, name: "Test" });

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

const pending: EnrollmentStatus = {
  status: "PENDING",
  requestedAt: Temporal.Now.instant(),
  studentId: "STU-001",
  courseId: "CRS-101",
};
console.log(describeEnrollment(pending));

const webDev: CourseStatus = {
  status: "ACTIVE",
  enrolledCount: 28,
  startDate: Temporal.PlainDate.from("2026-09-01"),
};
console.log(describeCourse(webDev));

const studentRes: ApiResponse<Student> = {
  status: "success",
  data: {
    id: "STU-001",
    name: "Dawit Bekele",
    enrollmentDate: Temporal.Now.instant(),
    gpa: 3.4,
  },
  fetchedAt: Temporal.Now.instant(),
};
console.log(
  renderResponse(studentRes, (s) => `${s.name} GPA: ${s.gpa ?? "N/A"}`),
);
// Nowtest with a different data type
const courseListRes: ApiResponse<Course[]> = {
  status: "success",
  data: [
    {
      id: "CRS-101",
      title: "Web Development Fundamentals",
      capacity: 30,
      startDate: Temporal.PlainDate.from("2026-09-01"),
    },
  ],
  fetchedAt: Temporal.Now.instant(),
};
console.log(
  renderResponse(courseListRes, (courses) =>
    courses.map((c) => c.title).join(", "),
  ),
);
