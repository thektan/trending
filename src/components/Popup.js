import React, {Component} from 'react';

/**
 * A simple popup with a header, body, and footer.
 *
 * @class Popup
 * @extends {Component}
 */
class Popup extends Component {
	/**
	 * Initializes the state.
	 */
	constructor() {
		super();

		this.state = {
			header: '',
			body: '',
			footer: '',
		};
	}

	/**
	 * Sets the body content of the popup.
	 * @param {string} body The body content to set in the popup.
	 */
	setBody(body) {
		this.setState({body: body});
	}

	/**
	 * Renders a list item of a feed.
	 *
	 * @return {string} Feed item markup.
	 */
	render() {
		return (
			<div className="popup">
				<div className="popup__header">{this.state.header}</div>
				<div className="popup__body">{this.state.body}</div>
				<div className="popup__footer">{this.state.footer}</div>
			</div>
		);
	}
}

export default Popup;
