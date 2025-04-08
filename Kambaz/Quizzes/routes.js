import * as quizzesDao from "./dao.js"
import { v4 as uuidv4 } from "uuid";

export default function QuizzesRoutes(app) {
  // For a given Course, get all quizzes. 
  app.get("/api/courses/:cid/quizzes", (req, res) => {
    const { cid } = req.params;
    const quizzes = quizzesDao.findQuizzesForCourse(cid);
    res.json(quizzes);
  });

  // Deletes a given quiz, provided an ID. 
  app.delete("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const status = await quizzesDao.deleteQuiz(quizId);
    res.send(status);
  });

  // Create a new quiz.
  app.post("/api/courses/:courseId/quizzes", (req, res) => {
      const { courseId } = req.params;

      const quiz = {
        ...req.body,
        _id: uuidv4(),
        course: courseId,
      };

      const newQuiz = quizzesDao.createQuiz(quiz);
      res.send(newQuiz);
    });

  // Updates a given quiz.
  app.put("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    const status = await quizzesDao.updateQuiz(quizId, quizUpdates);
    res.send(status);
  });
}
