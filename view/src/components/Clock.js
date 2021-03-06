import React, {Component} from 'react';
import moment from 'moment';
import '../css/Clock.css';

/**
 * Displays the current time.
 *
 * @class Clock
 * @extends {Component}
 */
class Clock extends Component {
	/**
	 * Setup for the clock.
	 * @param {Object} props
	 */
	constructor(props) {
		super(props);

		this.state = {
			date: moment().format(props.format),
		};
	}

	/**
	 * Updates the time to the current time with the format passed
	 * from the component prop.
	 */
	setTime() {
		this.setState(
			(prevState, props) => ({
				date: moment().format(props.format),
			})
		);
	}

	/**
	 * Sets the time when component mounts.
	 */
	componentDidMount() {
		this.setTime();
	}

	/**
	 * Renders a list item of a feed.
	 * @return {string} Feed item markup.
	 */
	render() {
		return (
			<div className="clock">
				{this.state.date}
			</div>
		);
	}
}

export default Clock;
