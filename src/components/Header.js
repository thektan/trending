import React, {Component} from 'react';
import Clock from './Clock';
import Greeting from './Greeting';
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
				<div className="header__section">
					<Greeting />
				</div>

				<div className="header__section header__section--center">
					<Clock format="LTS" />
				</div>

				<div className="header__section header__section--right">
					<Weather
						location='Diamond Bar, CA'
						unit='f'
					/>
				</div>
			</div>
		);
	}
}

export default Header;
