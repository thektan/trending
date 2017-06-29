import React, {Component} from 'react';
import DesignerNewsFeed from './components/DesignerNewsFeed';
import HackerNewsFeed from './components/HackerNewsFeed';
import './App.css';

/**
 * The main app component with multiple feeds.
 */
class App extends Component {
	/**
	 * Render the entire application.
	 * @return {string}
	 */
	render() {
		return (
			<div className="app">
				<HackerNewsFeed />

				<DesignerNewsFeed />
			</div>
		);
	}
}

export default App;
