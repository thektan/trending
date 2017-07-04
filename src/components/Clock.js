import React, {Component} from 'react';
import moment from 'moment';

/**
 * Displays the current time.
 *
 * @class Clock
 * @extends {Component}
 */
class Clock extends Component {
	constructor() {
		super();

		this.state = {
			date: moment().format('LTS')
		};
	}

	componentDidMount() {
		setInterval(
			() => {
				this.setState({
					date: moment().format('LTS')
				});
			},
			1000
		);
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
