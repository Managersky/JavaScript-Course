import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

const { Header, Footer, Sider } = Layout;
const { SubMenu } = Menu;

import "./App.less";

export class App extends React.Component {
	render() {
		return (
			<Router>
				<Layout>
					<Layout>
						<Header className="header">
							<strong>JavaScript Course</strong>
						</Header>
						<a href="/faq"> FAQ </a>
						<Route
							path="/faq"
							component={() =>
								(window.location =
									"src/packages/Ajax_Type_Ahead_Searcher/index.html")
							}
						/>
						<Footer>
							JavaScript Training Course ©2018 Created by Witold Mętel
						</Footer>
					</Layout>
				</Layout>
			</Router>
		);
	}
}
