import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function findQuizzesForCourse(cid) {
  const { quizzes } = Database; 
  return quizzes.filter((quiz) => quiz.course === cid);
}

export function createQuiz(quiz) {
  const newQuiz = { ...quiz, _id: uuidv4() };
  Database.quizzes = [...Database.quizzes, newQuiz];
  return newQuiz;
}

export function deleteQuiz(quizId) {
  const { quizzes } = Database;
  Database.quizzes = quizzes.filter((quiz) => quiz._id !== quizId);
}
 
export function updateQuiz(quizId, quizUpdates) {
  const { quizzes } = Database;
  const quiz = quizzes.find((quiz) => quiz._id === quizId);
  Object.assign(quiz, quizUpdates);
  return quiz;
}

export function updateQuizQuestion(quizId, questionId, questionUpdates) {
  const { quizzes } = Database;
  const quiz = quizzes.find((quiz) => quiz._id === quizId);
  
  if (!quiz) return null;

  const question = quiz.questions.find((q) => q.questionId === questionId);
  if (!question) return null;

  Object.assign(question, questionUpdates);
  return quiz;
}

export function createQuizQuestion(quizId, question) {
  const { quizzes } = Database;
  const quiz = quizzes.find((quiz) => quiz._id === quizId);
  
  if (!quiz) return null;
  if (!question) return null;

  quiz.questions = [...quiz.questions, question];
  return quiz;
}
