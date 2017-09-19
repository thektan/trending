import React, {Component} from 'react';
import '../css/Placeholder.css';

/**
 * DribbblePlaceholder block to display while content is loading.
 *
 * @class DribbblePlaceholder
 * @extends {Component}
 */
class DribbblePlaceholder extends Component {
	/**
	 * Renders the placeholder.
	 *
	 * @return {string} DribbblePlaceholder block.
	 */
	render() {
		return (
			<div className="placeholder">
				<div className="placeholder__container placeholder__container--sixths">
					<div className="placeholder__block"></div>
					<div className="placeholder__block"></div>
					<div className="placeholder__block"></div>
					<div className="placeholder__block"></div>
					<div className="placeholder__block"></div>
					<div className="placeholder__block"></div>

					<div className="placeholder__block"></div>
					<div className="placeholder__block"></div>
					<div className="placeholder__block"></div>
					<div className="placeholder__block"></div>
					<div className="placeholder__block"></div>
					<div className="placeholder__block"></div>
				</div>
			</div>
		);
	}
}

export default DribbblePlaceholder;
