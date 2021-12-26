const express = require('express');
const path = require('path');
const routes = require('./utils/routes');
const app = express();


app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// REGISTER API HERE
app.get('/api/get/items', routes);

app.listen(process.env.PORT || 3000, () => {
    console.log(`React App Listening at http://localhost:3000`);
});
module.exports = app;
