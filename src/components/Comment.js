import React, {Component} from 'react';
import * as DesignerNewsUtil from '../utils/designer-news-util';
import * as HackerNewsUtil from '../utils/hacker-news-util';

/**
 * A comment.
 *
 * @class Comment
 * @extends {Component}
 */
class Comment extends Component {
	/**
	 * Initializes the state.
	 */
	constructor() {
		super();

		this.state = {
			body: '',
		};
	}

	/**
	 * Get the comment and set it to the body.
	 */
	componentDidMount() {
		switch (this.props.sourceName) {
			case DesignerNewsUtil.SOURCE_NAME:
				DesignerNewsUtil.getComment(this.props.id).then(
					(body) => this.setState({body: body})
				);

				break;
			default:
				console.log('Unidentified source');
		}
	}

	/**
	 * Sets the body content of the popup.
	 * @param {string} body The body content to set in the popup.
	 */
	setBody(body) {
		this.setState({body: body});
	}

	componentDidUpdate() {
		console.log('comment', this.state);
	}

	/**
	 * Renders a list item of a feed.
	 *
	 * @return {string} Feed item markup.
	 */
	render() {
		return (
			<div className="comment">
				{this.state.body}
			</div>
		);
	}
}

export default Comment;
