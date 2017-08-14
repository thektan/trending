import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactPlaceholder from 'react-placeholder';
import DribbblePlaceholder from './DribbblePlaceholder';
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
			ready: false,
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

		if (!this.state.ready && this.state.items.length > 0) {
			this.setState({ready: true});
		}
	}

	/**
	 * Gets the popular Dribble shots and sets the state.
	 * @param {number} amount The amount of shots to display.
	 */
	getDribbbleShots() {
		DribbbleAPI.getShots().then(
			(data) => {
				if (data.slice) {
					this.setState({items: data.slice(0, this.props.amount)});
				}
			}
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
			<div className="image-feed">
				<h2 className="image-feed__header">Dribbble</h2>

				<ReactPlaceholder
					ready={this.state.ready}
					customPlaceholder={<DribbblePlaceholder />}
				>
					<div className="image-feed__container">
						{items.map(
							(item) =>
								<a
									className="image-feed__item"
									href={item.html_url}
									key={item.id}
									target="_blank"
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
				</ReactPlaceholder>
			</div>
		);
	}
}

DribbbleFeed.propTypes = {
	amount: PropTypes.number,
};

export default DribbbleFeed;
