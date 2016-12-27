import React, { Component } from 'react';
import '../styles/css/main.css';
import 'semantic-ui-css/semantic.min.css';
import Header from './Header';
import Footer from './Footer'

class Layout extends React.Component {

	render() {
		return (
			<div className="app-container">
				<Header />

				<div className="ui container">
					<div className="ui grid">
						<div className="three wide column">

						</div>

						<div className="thirteen wide column">
							<div className="app-content">{this.props.children}</div>
						</div>

					</div>
				</div>

				<Footer/>
			</div>
		);
	}
}

export default Layout;
