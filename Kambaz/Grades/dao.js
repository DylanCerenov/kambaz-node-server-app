import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

// Function to find grades for a user
export function findGradesForUser(userId) {
  return Database.grades.filter((grade) => grade.user === userId);
}

// Function to find attempts for a specific user and quiz
export function findAttemptsForQuiz(userId, quizId) {
  return Database.grades.filter(
    (grade) => grade.user === userId && grade.quiz === quizId
  );
}

// Function to submit a new quiz attempt
export function submitQuizAttempt({ userId, quizId, score, course }) {
  const quiz = Database.quizzes.find((q) => q._id === quizId);
  if (!quiz) return { error: "Quiz not found." };

  // Fetch attempts made by the user for this quiz
  const attempts = findAttemptsForQuiz(userId, quizId);
  const allowed = quiz.allowedAttempts || 1;

  if (attempts.length >= allowed) {
    return { error: "Max attempts reached." };  // Return error if max attempts are reached
  }

  // Create new grade entry for the attempt
  const newGrade = {
    _id: uuidv4(),
    user: userId,
    quiz: quizId,
    score,
    attempt: attempts.length + 1,  // Increment the attempt number
    course,
  };

  // Save the new grade in the database
  Database.grades = [...Database.grades, newGrade];

  return newGrade;
}
