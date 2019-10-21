const express = require('express');
const data = require('./data/todos');
const cors = require('cors');
const PORT = 3003;
const URL = `http://localhost:${PORT}`;
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  console.log(`A get request on ${req.url}`);
  res.json(data);
});

app.use((err, req, res, next) => {
  res.json({
    status: err || 500,
    message: res
  })
});

app.listen(PORT, () =>
  console.log(`Server listening at ${URL}`));

