import mongoose from "mongoose";

const dateSchema = new mongoose.Schema({
  year: { type: Number, required: true },
  month: { type: Number, required: true },
  day: { type: Number, required: true },
  hour: { type: Number, required: true },
  minute: { type: Number, required: true },
}, { _id: false });

const assignmentSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true }, // e.g., "A101"
    title: { type: String, required: true },
    course: { type: String, ref: "CourseModel" },
    desc: { type: String },
    points: { type: Number, required: true },
    availableDate: { type: dateSchema, required: true },
    dueDate: { type: dateSchema, required: true },
  },
  { collection: "assignments" }
);

export default assignmentSchema;