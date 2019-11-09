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
            {/* <Route path="/demo1" exact component={Demo1} />
            <Route path="/demo2" component={Demo2} />
            <Route path="/demo3" component={Demo3} />
            <Route path="/demo4" component={Demo4} /> */}
            <Footer>
              JavaScript Training Course ©2018 Created by Witold Mętel
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
