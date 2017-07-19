import React, {Component} from 'react';
import Comment from './Comment';
import '../css/CommentPopup.css';

/**
 * A popup that displays the comments for a feed item.
 *
 * @class CommentPopup
 * @extends {Component}
 */
class CommentPopup extends Component {
	/**
	 * Initializes the state.
	 */
	constructor() {
		super();

		this.state = {
			visible: false,
		};
	}

	componentDidMount() {
		this.setState({visible: this.props.visible});
	}

	/**
	 * Renders the comment thread.
	 * @return {string} Comment thread.
	 */
	render() {
		return (
			<div className={'comment-popup '
				+ (this.props.isOpen ? 'comment-popup--visible' : '')}>
				<span
					className="comment-popup__close-icon"
					onClick={this.props.handleClose}>
					x
				</span>

				<div className="comment-popup__body">
					{this.props.isOpen ? this.props.comments.map(
						(id) =>
							<Comment
								id={id}
								key={id}
								sourceName={this.props.sourceName}
							/>
					) : null}
				</div>
			</div>
		);
	}
}

export default CommentPopup;
