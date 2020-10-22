import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import Aux from "../../../util/Auxiliary";
import CustomScrollbars from "../../../util/CustomScrollbar";

class SidebarContent extends React.Component {
  render() {
    return (
      <Aux>
        <div className="gx-sidebar-content">
          <CustomScrollbars className="gx-layout-sider-scrollbar">
            <Menu theme="light" mode="inline">
              <Menu.Item key="dashboard">
                <Link to="/dashboard">Dashboard</Link>
              </Menu.Item>
              <Menu.Item key="categories">
                <Link to="/categories">Categories</Link>
              </Menu.Item>
              <Menu.Item key="products">
                <Link to="/products">Products</Link>
              </Menu.Item>
              <Menu.Item key="stores">
                <Link to="/stores">Stores</Link>
              </Menu.Item>
              <Menu.Item key="customers">
                <Link to="/customers">Customers</Link>
              </Menu.Item>
              <Menu.Item key="orders">
                <Link to="/orders">Orders</Link>
              </Menu.Item>
              <Menu.Item key="promotions">
                <Link to="/promotions">PromoCodes</Link>
              </Menu.Item>
              <Menu.Item key="banners">
                <Link to="/banners">Banners</Link>
              </Menu.Item>
              <Menu.Item key="staff">
                <Link to="/staff">Staff</Link>
              </Menu.Item>
            </Menu>
          </CustomScrollbars>
        </div>
      </Aux>
    );
  }
}

export default SidebarContent;
