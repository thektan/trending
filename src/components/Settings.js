import React, {Component} from 'react';
import Isvg from 'react-inlinesvg';
import Modal from 'react-modal';
import storage from 'local-storage';
import iconSettings from '../images/icon-settings.svg';
import '../css/Settings.css';

const modalStyles = {
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
	},
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		borderRadius: '0',
		border: 'none',
		boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.05)',
		marginRight: '-50%',
		padding: '20px 28px',
		width: '100%',
		maxWidth: '400px',
		transform: 'translate(-50%, -50%)',
	},
};

/**
 * Displays a settings icon. When clicked on, a modal will appear with
 * configurable settings.
 *
 * @class Settings
 * @extends {Component}
 */
class Settings extends Component {
	/**
	 * Initializes state.
	 */
	constructor() {
		super();

		this.state = {
			showModal: false,
			location: storage.get('location') || '',
		};

		this.handleClose = this.handleClose.bind(this);
		this.handleOpen = this.handleOpen.bind(this);
		this.handleSave = this.handleSave.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}


	/**
	* Console if component updates for debugging purposes.
	*/
	componentDidUpdate() {
		console.log('Settings component updated', this.state);
	}

	/**
	 * Opens the modal.
	 */
	handleOpen() {
		this.setState({showModal: true});
	}

	/**
	 * Closes the modal.
	 */
	handleClose() {
		this.setState({showModal: false});
	}

	/**
	 * Saves the settings and closes the modal.
	 */
	handleSave() {
		storage.set('location', this.state.location);

		this.handleClose();
	}

	handleInputChange(event) {
		this.setState({location: event.target.value});
	}

	/**
	 * Renders a list item of a feed.
	 *
	 * @return {string} Feed item markup.
	 */
	render() {
		return (
			<span className="settings">
				<button className="settings__button" onClick={this.handleOpen}>
					<Isvg src={iconSettings}></Isvg>
				</button>

				<Modal
					isOpen={this.state.showModal}
					contentLabel="Settings"
					onRequestClose={this.handleClose}
					style={modalStyles}
				>
					<div className="modal__header">
						<h2 className="modal__title">Settings</h2>
					</div>

					<div className="modal__content">
						<label htmlFor="location">
							Location

							<div className="label__description">
								This will be used for displaying the current weather.
							</div>
						</label>

						<input
							id="location"
							name="location"
							placeholder="Enter your zip code"
							onChange={this.handleInputChange}
							value={this.state.location}
						/>
					</div>

					<div className="modal__footer">
						<button
							className="button"
							onClick={this.handleClose}
						>
							Cancel
						</button>

						<button
							className="button button--primary"
							onClick={this.handleSave}
							type="submit"
						>
							Save
						</button>
					</div>
				</Modal>
			</span>
		);
	}
}

export default Settings;
