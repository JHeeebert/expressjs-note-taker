// Import necessary packages
const express = require('express');
const path = require('path');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
// Create an instance of the express app
const PORT = process.env.PORT || 3001;
const app = express();
// Middleware for parsing incoming string or array data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// GET route for homepage
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});
// If no matching GET routes are found, send index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});
// Create the Route for api and HTML 
app.use('/api', apiRoutes);

app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}!`);
});

