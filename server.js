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

// Create the Route for api and HTML 
app.use('/api', apiRoutes);

app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}!`);
});

