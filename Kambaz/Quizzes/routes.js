import * as quizzesDao from "./dao.js"

export default function QuizzesRoutes(app) {
  app.delete("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const status = await quizzesDao.deleteQuiz(quizId);
    res.send(status);
  });

  app.put("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    const status = await quizzesDao.updateQuiz(quizId, quizUpdates);
    res.send(status);
  });
}
app.get("/api/courses/:cid/quizzes", (req, res) => {
  const { cid } = req.params;
  const quizzes = quizzesDao.findQuizzesForCourse(cid);
  res.json(quizzes);
});
