import moment from 'moment';
import URI from 'urijs';

/**
 * Converts a timestamp into a formatted date.
 *
 * @param {string|number} time
 * @return {string} Formatted date.
 */
const getFormattedDateString = (time) =>
	moment(time).fromNow();

/**
 * Extracts the subdomain and domain name of a url.
 * @param {string} url The url to extract from.
 * @return {string} The extracted name.
 */
const getURLDomainName = (url = '') => {
	let uri = new URI(url);

	if (uri.scheme() === '') {
		uri = new URI('http://' + url);
	}

	return uri.hostname();
};


export {
	getFormattedDateString,
	getURLDomainName,
};
