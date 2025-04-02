import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

// 5.3.6 Implement routes for creating, retrieving, 
// updating, and deleting assignments.

export function findAssignmentsForCourse(courseName) {
  const { assignments } = Database; 
  // Compare by the course name, because using the UUID is inconvenient. 
  return assignments.filter((assignment) => assignment.course === courseName);
}

export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: uuidv4() };
  Database.assignments = [...Database.assignments, newAssignment];
  return newAssignment;
}

export function deleteAssignment(assignmentId) {
  const { assignments } = Database;
  Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
 }
 
 export function updateAssignment(assignmentId, assignmentUpdates) {
  const { assignments } = Database;
  const assignment = assignments.find((assignment) => assignment._id === assignmentId);
  Object.assign(assignment, assignmentUpdates);
  return assignment;
}