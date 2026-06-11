"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.describeCourse = describeCourse;
function describeCourse(status) {
    switch (status.status) {
        case "DRAFT":
            return `Draft created by ${status.createdBy} on ${status.createdAt.toString()}`;
        case "PUBLISHED":
            return `Published on ${status.publishedAt.toString()} with syllabus: ${status.syllabus}`;
        case "ACTIVE":
            return `Active with ${status.enrolledCount} students since ${status.startDate.toString()}`;
        case "ARCHIVED":
            return `Archived on ${status.archivedAt.toString()} with ${status.finalEnrollmentCount} total enrollments`;
        case "CANCELLED":
            return `Cancelled: ${status.reason} at ${status.cancelledAt.toString()}`;
        default: {
            // Exhaustiveness check
            const exhaustiveCheck = status;
            throw new Error(`Unhandled CourseStatus: ${JSON.stringify(exhaustiveCheck)}`);
        }
    }
}
