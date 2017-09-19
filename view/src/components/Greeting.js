import React, {Component} from 'react';
import moment from 'moment';
import '../css/Greeting.css';

const GREETING_MESSAGES = {
	AFTERNOON: 'Good Afternoon!',
	EVENING: 'Good Evening!',
	MORNING: 'Good Morning!',
};

/**
 * Displays a greeting according to the time.
 *
 * @class Greeting
 * @extends {Component}
 */
class Greeting extends Component {
	/**
	 * Setup for the clock.
	 * @param {Object} props
	 */
	constructor(props) {
		super(props);

		this.state = {
			message: GREETING_MESSAGES.MORNING,
		};
	}

	/**
	 * Gets a greeting based on the current time.
	 * @return {string} The greeting.
	 */
	getGreeting() {
		let currentHour = moment().format('k');

		let greeting;

		if (currentHour >= 3 && currentHour < 12) {
			greeting = GREETING_MESSAGES.MORNING;
		} else if (currentHour >= 12 && currentHour < 18) {
			greeting = GREETING_MESSAGES.AFTERNOON;
		} else {
			greeting = GREETING_MESSAGES.EVENING;
		}

		return greeting;
	}

	/**
	 * Sets the message according to the time.
	 */
	setMessage() {
		let greetingMessage = this.getGreeting();

		this.setState({
			message: greetingMessage,
		});
	}

	/**
	 * Set the message after the greeting is on the page.
	 */
	componentDidMount() {
		this.setMessage();
	}

	/**
	 * Renders a list item of a feed.
	 * @return {string} Feed item markup.
	 */
	render() {
		return (
			<div className="greeting">
				{this.state.message}
			</div>
		);
	}
}

export default Greeting;
