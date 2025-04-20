import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

function calculatePoints(quiz) {
  let total = 0; 
  quiz.questions.forEach((question) => {
    total += question.points; 
  })
  return total; 
}

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

  quiz.points = calculatePoints(quiz);
  
  return quiz;
}

export function createQuizQuestion(quizId, question) {
  const { quizzes } = Database;
  const quiz = quizzes.find((quiz) => quiz._id === quizId);
  
  if (!quiz) return null;
  if (!question) return null;

  if (quiz.questions) {
    quiz.questions = [...quiz.questions, question];
  } else {
    quiz.questions = [question]
  }

  quiz.points = calculatePoints(quiz);

  return quiz;
}

export function deleteQuizQuestion(quizId, questionId) {
  const { quizzes } = Database;
  const quiz = quizzes.find((quiz) => quiz._id === quizId);
  
  if (!quiz) return null;

  const question = quiz.questions.find((q) => q.questionId === questionId);
  if (!question) return null;

  quiz.questions = quiz.questions.filter((question) => question.questionId !== questionId);

  quiz.points = calculatePoints(quiz);

  return quiz;
}