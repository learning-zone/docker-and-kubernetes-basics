const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Node.js Server Running!</h1>');
});

app.listen(3030, () => {
   console.log(`Node APP Listening at http://localhost:3030/`);
});