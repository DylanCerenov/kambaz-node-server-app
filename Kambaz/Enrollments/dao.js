import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function getAllEnrollments() {
  return Database.enrollments;
}

export function enrollUserInCourse(userId, courseId) {
  const newEnrollment = { _id: uuidv4(), user: String(userId), course: courseId };
  Database.enrollments = [...Database.enrollments, newEnrollment];
  return newEnrollment; 
}

export function unenrollUserInCourse(userId, courseId) {
  Database.enrollments = Database.enrollments.filter(
    (enrollment) => !(enrollment.user == userId && enrollment.course == courseId)
  );
  return { success: true };
}
