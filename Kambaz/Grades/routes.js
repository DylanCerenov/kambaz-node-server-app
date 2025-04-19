import * as gradesDao from "./dao.js";

export default function GradesRoutes(app) {
  // Read everything
  app.get("/api/grades", (req, res) => {
    const grades = gradesDao.findAllGrades(); 
    res.json(grades);
  });

  // Create
  app.post("/api/grades/submit", (req, res) => {
    const { quizId, userId, attemptsCount, score, answers } = req.body; 
    const grade = gradesDao.submitGrade(quizId, userId, attemptsCount, score, answers);
    res.json(grade); 
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