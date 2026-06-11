import { Temporal } from "@js-temporal/polyfill";

export interface Course {
  readonly id: string;
  title: string;
  capacity: number;
  startDate?: Temporal.PlainDate;
}

export type CourseStatus =
  | { status: "DRAFT"; createdBy: string; createdAt: Temporal.Instant }
  | { status: "PUBLISHED"; publishedAt: Temporal.Instant; syllabus: string }
  | {
      status: "ACTIVE";
      enrolledCount: number;
      startDate: Temporal.PlainDate;
    }
  | {
      status: "ARCHIVED";
      archivedAt: Temporal.Instant;
      finalEnrollmentCount: number;
    }
  | { status: "CANCELLED"; reason: string; cancelledAt: Temporal.Instant };

export function describeCourse(status: CourseStatus): string {
  // Your switch goes here. Handle all 5 states.
  switch (status.status) {
    case "DRAFT":
      return `Course draft created by ${status.createdBy} at ${status.createdAt.toString()}`;

    case "PUBLISHED":
      return `Course published at ${status.publishedAt.toString()} with syllabus: ${status.syllabus}`;
    case "ACTIVE":
      return `Course active with ${status.enrolledCount} students starting ${status.startDate.toString()}`;
    case "ARCHIVED":
      return `Course archived at ${status.archivedAt.toString()} with final enrollment count: ${status.finalEnrollmentCount}`;
    case "CANCELLED":
      return `Course cancelled at ${status.cancelledAt.toString()} with reason: ${status.reason}`;
    default:
      const _exhaustiveCheck: never = status;
      throw new Error(`Unhandled status: ${(_exhaustiveCheck as { status: string }).status}`);
  }
}
