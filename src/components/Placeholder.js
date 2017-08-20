import React, {Component} from 'react';
import '../css/Placeholder.css';

/**
 * Placeholder block to display while content is loading.
 *
 * @class Placeholder
 * @extends {Component}
 */
class Placeholder extends Component {
	/**
	 * Renders the placeholder.
	 *
	 * @return {string} Placeholder block.
	 */
	render() {
		return (
			<div className="placeholder">
				<div className="placeholder__container">
					<div className="placeholder__block placeholder__block--full"></div>
				</div>

				<div className="placeholder__block placeholder__block--text"></div>

				<div className="placeholder__container placeholder__container--thirds">
					<div className="placeholder__block"></div>
					<div className="placeholder__block"></div>
					<div className="placeholder__block"></div>

					<div className="placeholder__block"></div>
					<div className="placeholder__block"></div>
					<div className="placeholder__block"></div>
				</div>

				<div className="placeholder__bottom-fade"></div>
			</div>
		);
	}
}

export default Placeholder;
