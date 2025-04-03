import * as quizzesDao from "./dao.js"

export default function QuizzesRoutes(app) {
  app.delete("/api/quizzes/:quizID", async (req, res) => {
    const { quizId } = req.params;
    const status = await quizzesDao.deleteQuiz(quizId);
    res.send(status);
  });

  app.put("/api/quizzes/:quizID", async (req, res) => {
    const { quizID } = req.params;
    const quizUpdates = req.body;
    const status = await quizzesDao.updateQuiz(quizID, quizUpdates);
    res.send(status);
  });
}