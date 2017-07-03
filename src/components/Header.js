import React, {Component} from 'react';
import Weather from './Weather';
import '../css/Header.css';

/**
 * Header on the top of the page. This is to show general information and
 * other menu options.
 *
 * @class Header
 * @extends {Component}
 */
class Header extends Component {
	/**
	 * Renders a list item of a feed.
	 *
	 * @return {string} Feed item markup.
	 */
	render() {
		return (
			<div className="header">
				<span className="header__message">
					Good Morning!
				</span>

				<Weather />
			</div>
		);
	}
}

export default Header;