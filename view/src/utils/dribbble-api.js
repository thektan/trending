import fetch from 'isomorphic-fetch';

const BASE_URL = 'https://api.dribbble.com/v1/';
const TOKEN = process.env.REACT_APP_DRIBBBLE_CLIENT_ACCESS_TOKEN;

/**
 * Gets the current popular Dribbble shots.
 * @return {object} The JSON data.
 */
const getShots = () =>
	fetch(`${BASE_URL}shots?access_token=${TOKEN}`)
		.then((response) => response.json());

export {getShots};
