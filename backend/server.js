const express = require('express');
const app = express();
const port = 5000;

let quizzes = [
  { id: 1, title: 'React Quiz', questions: ['What is React?', 'Explain JSX'] },
  { id: 2, title: 'JavaScript Quiz', questions: ['What is a closure?', 'Explain promises'] },
  { id: 3, title: 'HTML/CSS Quiz', questions: ['What is the DOM?', 'What is Flexbox?'] },
];

// Root route (optional, but prevents 404 errors)
app.get('/', (req, res) => {
  res.send('Welcome to the Quiz Backend!');
});

// Get all quizzes
app.get('/api/quizzes', (req, res) => {
  res.json(quizzes);
});

// Get a specific quiz by ID
app.get('/api/quizzes/:id', (req, res) => {
  const quizId = parseInt(req.params.id);
  const quiz = quizzes.find(q => q.id === quizId);

  if (!quiz) {
    return res.status(404).send('Quiz not found');
  }
  res.json(quiz);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
