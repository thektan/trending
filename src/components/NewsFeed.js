import React, {Component} from 'react';
import FeedItem from './FeedItem';

/**
 * Component that displays the top posts on Medium.
 *
 * @class NewsFeed
 * @extends {Component}
 */
class NewsFeed extends Component {
	/**
	* Creates an instance of NewsFeed.
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
		this.getItems();
	}

	/**
	* Console if component updates.
	*/
	componentDidUpdate() {
		console.log('news feed component updated', this.state);
	}

	/**
	 * Gets the top stories and sets the state.
	 */
	getItems() {
		fetch('https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=' + process.env.REACT_APP_NEWS_API_KEY)
			.then((response) => response.json())
			.then((data) => this.setState({items: data.articles}));
	}

	/**
	* Render the component.
	*
	* @return {string} Markup of top stories from hacker news.
	*/
	render() {
		const {items} = this.state;

		return (
			<div className="feed__container">
				<div className="feed__title">News</div>

				<ul className="feed__content">
					{items.map(
						(item, index) =>
							<FeedItem
								date={item.publishedAt}
								key={index}
								score={index + 1}
								siteUrl=""
								title={item.title}
								url={item.url}
							/>
					)}
				</ul>
			</div>
		);
	}
}

export default NewsFeed;
