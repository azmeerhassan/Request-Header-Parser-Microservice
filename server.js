const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Header Parser Microservice');
});

app.get('/api/headers', (req, res) => {
  res.json(req.headers);
});


const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
