import * as GradesDao from "./dao.js";
import { v4 as uuidv4 } from "uuid";

export default function GradesRoutes(app) {
  // Submit a quiz attempt
  app.post("/api/quizzes/:quizId/submit", (req, res) => {
    const { quizId } = req.params;
    const { userId, score, course } = req.body;

    // Submit the quiz attempt via DAO
    const result = GradesDao.submitQuizAttempt({ userId, quizId, score, course });

    if (result.error) {
      // If there's an error (e.g., max attempts reached), send error response
      res.status(400).json({ error: result.error });
    } else {
      // Return the new grade if successful
      res.json(result);
    }
  });

  // Get all grades for a user
  app.get("/api/users/:userId/grades", (req, res) => {
    const { userId } = req.params;

    // Fetch grades for the user via DAO
    const grades = GradesDao.findGradesForUser(userId);
    res.json(grades);  // Return the grades in the response
  });

  // Get all attempts for a specific user and quiz
  app.get("/api/users/:userId/quizzes/:quizId/attempts", (req, res) => {
    const { userId, quizId } = req.params;

    // Fetch attempts made by the user for this quiz
    const attempts = GradesDao.findAttemptsForQuiz(userId, quizId);
    res.json(attempts);  // Return the attempts in the response
  });

  // Create a new grade entry (if necessary)
  app.post("/api/users/:userId/grades", (req, res) => {
    const { userId } = req.params;
    const { quizId, score, course } = req.body;

    // Create new grade entry for the user
    const newGrade = GradesDao.submitQuizAttempt({ userId, quizId, score, course });
    res.json(newGrade);  // Return the new grade if successful
  });

  // Update a specific grade entry
  app.put("/api/grades/:gradeId", async (req, res) => {
    const { gradeId } = req.params;
    const gradeUpdates = req.body;

    const status = await GradesDao.updateGrade(gradeId, gradeUpdates);
    res.send(status);  // Send the update status
  });
}
