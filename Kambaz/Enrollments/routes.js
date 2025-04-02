import * as enrollmentsDao from "./dao.js"

export default function EnrollmentRoutes(app) {
  app.get("/api/enrollments", (req, res) => {
    const enrollments = enrollmentsDao.getAllEnrollments();
    res.send(enrollments);
  });

  app.post("/api/enrollments/enroll", (req, res) => {
    const { userId, courseId } = req.body;
    const enrollment = enrollmentsDao.enrollUserInCourse(userId, courseId);
    res.json(enrollment);
  });

  app.delete("/api/enrollments/unenroll/:userId/:courseId", (req, res) => {
    const { userId, courseId } = req.params;
    const status = enrollmentsDao.unenrollUserInCourse(userId, courseId);
    res.send(status);
  });
}