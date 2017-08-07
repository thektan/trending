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

/**
 * Converts a string name into a css valid class.
 * @param  {string} name The name that will be converted.
 * @return {string} Css class that can be used to style elements.
 */
const toCssClassName = (name) => {
	if (name) {
		return name.toLowerCase().replace(' ', '-');
	} else {
		return '';
	}
};

export {
	getFormattedDateString,
	getURLDomainName,
	toCssClassName,
};
