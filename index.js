const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const port = process.env.PORT || 5000;
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// * Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => {
	console.log(`Server running on port ${port}...`.brightCyan.underline.italic);
});
