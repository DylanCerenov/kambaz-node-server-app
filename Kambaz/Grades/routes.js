import * as gradesDao from "./dao.js";

export default function GradesRoutes(app) {
  // Read everything
  app.get("/api/grades", (req, res) => {
    const grades = gradesDao.findAllGrades(); 
    res.json(grades);
  });

  // Create
  app.post("/api/grades/submit", async (req, res) => {
    const { quizId, userId, score, answers, submissionTime } = req.body; 

    const existingGrade = gradesDao.findGrade(quizId, userId);
    if (existingGrade) {
      const existingAttemptsCount = existingGrade.attemptsCount;
      console.log("sure it exists, and existingGrade.attemptsCount=" + existingGrade.attemptsCount);
      const attemptsCount = existingAttemptsCount + 1;
      const grade = await gradesDao.updateGrade(quizId, userId, { quizId, userId, attemptsCount, score, answers, submissionTime });
      res.send(grade);
      console.log(gradesDao.findGrade(quizId, userId));
    } else {
      const grade = gradesDao.submitGrade(quizId, userId, 1, score, answers, submissionTime);
      res.json(grade); 
    }
  });

  // Read
  app.get("/api/grades/:qid/:uid", (req, res) => {
    const { qid, uid } = req.params;
    const grade = gradesDao.findGrade(qid, uid);
    res.json(grade);
  });

  // Update
  app.put("/api/grades/:qid/:uid", async (req, res) => {
    const { qid, uid } = req.params;
    const gradeUpdates = req.body;
    const grade = await gradesDao.updateGrade(qid, uid, gradeUpdates);
    res.send(grade); 
  });  
}