import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as DribbbleAPI from '../utils/dribbble-api';
import '../css/DribbbleFeed.css';

/**
 * Component that displays the currently popular Designer News posts.
 *
 * @class DribbbleFeed
 * @extends {Component}
 */
class DribbbleFeed extends Component {
	/**
	* Creates an instance of DribbbleFeed.
	*/
	constructor() {
		super();

		this.state = {
			items: [],
		};
	}

	/**
	* Fetches the stories when the component mounts.
	*/
	componentDidMount() {
		this.getDribbbleShots();
	}

	/**
	* Console if component updates.
	*/
	componentDidUpdate() {
		console.log('dribbble component updated', this.state);
	}

	/**
	 * Gets the popular Dribble shots and sets the state.
	 * @param {number} amount The amount of shots to display.
	 */
	getDribbbleShots() {
		DribbbleAPI.getShots().then(
			(data) =>
				this.setState({items: data.slice(0, this.props.amount)})
		);
	}

	/**
	* Render the component.
	*
	* @return {string} Markup of popular shots from Dribbble.
	*/
	render() {
		const {items} = this.state;

		return (
			<div className="image-feed__container">
				{items.map(
					(item) =>
						<a
							className="image-feed__item"
							href={item.html_url}
							key={item.id}
							title={item.title}
						>
							<img
								className="image-feed__image"
								src={item.images.teaser}
								alt={item.description}
							/>
						</a>
				)}
			</div>
		);
	}
}

DribbbleFeed.propTypes = {
	amount: PropTypes.number,
};

export default DribbbleFeed;
