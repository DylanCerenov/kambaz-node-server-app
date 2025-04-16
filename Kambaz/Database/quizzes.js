export default [
  {
    _id: "Q1",
    title: "Title 1 :)",
    course: "RS101",
    published: true,
    quizType: "Graded Quiz",
    points: 50,
    numberOfQuestions: 3,
    assignmentGroup: "Quizzes",
    shuffleAnswers: "Yes",
    timeLimit: "20 Minutes",
    multipleAttempts: "No",
    howManyAttempts: 1,
    showCorrectAnswers: "After Due Date",
    accessCode: "",
    oneQuestionAtATime: "Yes",
    webcamRequired: "No",
    lockQuestionsAfterAnswering: "No",
    dueDate: { year: 2025, month: 4, day: 10, hour: 0, minute: 0 },
    availableDate: { year: 2025, month: 4, day: 1, hour: 0, minute: 0 },
    untilDate: { year: 2025, month: 4, day: 11, hour: 0, minute: 0 },
    questions: [
      {
        questionId: "Q1-MC1",
        type: "multiple_choice",
        title: "Question 1 Title",
        points: 5,
        question: "Which of the following is correct?",
        choices: [
          { id: "choiceA", text: "2 + 2 = 5", isCorrect: false },
          { id: "choiceB", text: "2 + 2 = 4", isCorrect: true },
          { id: "choiceC", text: "The mitochondria is not the powerhouse of the cell", isCorrect: false }
        ]
      },
      {
        questionId: "Q1-TF1",
        type: "true_false",
        title: "T/F Question Example",
        points: 5,
        question: "The sky is blue.",
        correctAnswerIsTrue: true
      },
      {
        questionId: "Q1-FB1",
        type: "fill_in_blank",
        title: "Fill-in-the-Blank Question Example",
        points: 5,
        question: "The capital of France is _____.",
        possibleAnswers: [
          { id: "answer1", text: "Paris", caseInsensitive: true },
          { id: "answer2", text: "PARIS", caseInsensitive: true }
        ]
      }
    ]
  },
  {
    _id: "2",
    title: "Title 2 :-)",
    course: "RS102",
    published: true,
    quizType: "Practice Quiz",
    points: 30,
    numberOfQuestions: 3,
    assignmentGroup: "Exams",
    shuffleAnswers: "No",
    timeLimit: "30 Minutes",
    multipleAttempts: "Yes",
    howManyAttempts: 3,
    showCorrectAnswers: "Immediately",
    accessCode: "QUIZ123",
    oneQuestionAtATime: "No",
    webcamRequired: "No",
    lockQuestionsAfterAnswering: "No",
    dueDate: { year: 2025, month: 5, day: 8, hour: 0, minute: 0 },
    availableDate: { year: 2025, month: 4, day: 10, hour: 0, minute: 0 },
    untilDate: { year: 2025, month: 4, day: 16, hour: 0, minute: 0 },
    questions: [
      {
        questionId: "Q2-MC1",
        type: "multiple_choice",
        title: "Question 1 Title",
        points: 5,
        question: "Which of the following is correct?",
        choices: [
          { id: "choiceA", text: "sun is blue", isCorrect: false },
          { id: "choiceB", text: "The roman empire was founded in the year 27 B.C. by Augustus Ceasar.", isCorrect: true },
          { id: "choiceC", text: "sky is yellow", isCorrect: false }
        ]
      },
      {
        questionId: "Q2-TF1",
        type: "true_false",
        title: "T/F Question Example",
        points: 5,
        question: "The sky is blue.",
        correctAnswerIsTrue: true
      },
      {
        questionId: "Q2-FB1",
        type: "fill_in_blank",
        title: "Fill-in-the-Blank Question Example",
        points: 5,
        question: "The capital of Kazakhstan is _____.",
        possibleAnswers: [
          { id: "answer1", text: "Astana", caseInsensitive: true },
          { id: "answer2", text: "ASTANA", caseInsensitive: true }
        ]
      }
    ]
  },
  {
    _id: "3",
    title: "Title 3 :3",
    course: "RS101",
    published: true,
    quizType: "Graded Survey",
    points: 10,
    numberOfQuestions: 5,
    assignmentGroup: "Assignments",
    shuffleAnswers: "Yes",
    timeLimit: "20 Minutes",
    multipleAttempts: "No",
    howManyAttempts: 1,
    showCorrectAnswers: "Never",
    accessCode: "SURVEY2025",
    oneQuestionAtATime: "Yes",
    webcamRequired: "No",
    lockQuestionsAfterAnswering: "Yes",
    dueDate: { year: 2025, month: 4, day: 20, hour: 0, minute: 0 },
    availableDate: { year: 2025, month: 4, day: 18, hour: 0, minute: 0 },
    untilDate: { year: 2025, month: 4, day: 21, hour: 0, minute: 0 },
    questions: []
  },
  {
    _id: "4",
    title: "Title 4 :)",
    course: "RS102",
    published: true,
    quizType: "Ungraded Survey",
    points: 0,
    numberOfQuestions: 8,
    assignmentGroup: "Project",
    shuffleAnswers: "No",
    timeLimit: "No Limit",
    multipleAttempts: "Yes",
    howManyAttempts: 5,
    showCorrectAnswers: "Always",
    accessCode: "",
    oneQuestionAtATime: "No",
    webcamRequired: "No",
    lockQuestionsAfterAnswering: "No",
    dueDate: { year: 2025, month: 4, day: 25, hour: 0, minute: 0 },
    availableDate: { year: 2025, month: 4, day: 20, hour: 0, minute: 0 },
    untilDate: { year: 2025, month: 4, day: 26, hour: 0, minute: 0 },
    questions: []
  },
  {
    _id: "5",
    title: "Title 5 :D",
    course: "RS101",
    published: true,
    quizType: "Graded Quiz",
    points: 100,
    numberOfQuestions: 20,
    assignmentGroup: "Exams",
    shuffleAnswers: "Yes",
    timeLimit: "45 Minutes",
    multipleAttempts: "No",
    howManyAttempts: 1,
    showCorrectAnswers: "After Until Date",
    accessCode: "FINAL2025",
    oneQuestionAtATime: "Yes",
    webcamRequired: "Yes",
    lockQuestionsAfterAnswering: "Yes",
    dueDate: { year: 2025, month: 5, day: 5, hour: 0, minute: 0 },
    availableDate: { year: 2025, month: 5, day: 1, hour: 0, minute: 0 },
    untilDate: { year: 2025, month: 5, day: 6, hour: 0, minute: 0 },
    questions: []
  }
];
