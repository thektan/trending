const express = require('express');
const cors = require('cors');
const path = require('path');

const ImageResolver = require('image-resolver');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes.
app.use(cors());

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../view/build')));

// Gets the main image from a given url.
app.get('/api/imageresolver/:url', function(request, response) {
	let imageResolver = new ImageResolver();

	imageResolver.register(new ImageResolver.FileExtension());
	imageResolver.register(new ImageResolver.MimeType());
	imageResolver.register(new ImageResolver.Opengraph());
	imageResolver.register(new ImageResolver.Webpage());

	imageResolver.resolve(
		decodeURIComponent(request.params.url),
		(result) => {
			let imageURL = '';

			if (result) {
				imageURL = result.image || '';
			}

			response.json(
				{
					'imageURL': imageURL,
				}
			);
		}
	);
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
	response.sendFile(path.resolve(__dirname, '../view/build', 'index.html'));
});

app.listen(PORT, function() {
	console.log(`Listening on port ${PORT}`);
});
