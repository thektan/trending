import fetch from 'isomorphic-fetch';

const BASE_URL = 'https://api.dribbble.com/v1/';
const DRIBBBLE_CLIENT_ACCESS_TOKEN =
	'8c1704b597705ac44525f16604922020c3d44475733563e6809a693634a85919';

/**
 * Gets the current popular Dribbble shots.
 * @return {object} The JSON data.
 */
const getShots = () =>
	fetch(`${BASE_URL}shots?access_token=${DRIBBBLE_CLIENT_ACCESS_TOKEN}`)
		.then((response) => response.json());

export {getShots};
