import React, { Component } from "react";
import Nav from "./components/Navigation";
import Main from "./containers/Main";
import Footer from "./components/Footer";
import "./styles/global.css";

class App extends Component {
	render() {
		return (
			<div className="app">
				<Nav />
				<Main />
				<Footer />
			</div>
		);
	}
}

export default App;
