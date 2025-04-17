import Database from "../Database/index.js";

export function findAllGrades() {
  const { grades } = Database; 
  return grades; 
}

export function submitGrade(quizId, userId, score, answers) {
  const newGrade = {quizId, userId, score, answers};
  Database.grades = [...Database.grades, newGrade];
  return newGrade; 
}

export function findGrade(quizId, userId) {
  const { grades } = Database;
  const grade = grades.find((grade) => grade.userId === userId && grade.quizId === quizId)
  return grade; 
}

export function updateGrade(quizId, userId, gradeUpdates) {
  const { grades } = Database;
  const grade = grades.find((grade) => grade.userId === userId && grade.quizId === quizId)

  if (!grade) {
    throw new Error("404");
  }

  Object.assign(grade, gradeUpdates);
  return grade;
}
