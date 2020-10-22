import React from "react";
import { Layout } from "antd";

import SidebarContent from "../Sidebar/SidebarContent";
import "../../../styles/hb.less";

const { Content, Footer, Sider } = Layout;

class MainApp extends React.Component {
  render() {
    return (
      <Layout className="gx-app-layout">
        <Sider className="gx-app-sidebar">
          <SidebarContent />
        </Sider>
        <Layout>
          <Content className="gx-layout-content gx-container-wrap">
            content
            <Footer>
              <div className="gx-layout-footer-content">footer</div>
            </Footer>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MainApp;
