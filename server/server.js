const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes.
app.use(cors());

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../view/build')));

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
	response.sendFile(path.resolve(__dirname, '../view/build', 'index.html'));
});

app.listen(PORT, function () {
	console.log(`Listening on port ${PORT}`);
});