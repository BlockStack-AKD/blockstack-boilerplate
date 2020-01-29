import React, {useState} from 'react';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;

const SiderMenu = props => {

    const [collapsed, setCollapsed] = useState(false);

  const onCollapse = collapsed => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="desktop" />
              <span>Home</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="compass" />
              <span>Explore</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="file" />
              <span>Projects</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="team" />
                  <span>Teams</span>
                </span>
              }
            >
              <Menu.Item key="4">Team 1</Menu.Item>
              <Menu.Item key="5">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="6">Settings</Menu.Item>
              <Menu.Item key="7">Help</Menu.Item>
              <Menu.Item key="8">Sign Out</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
    );
  }

export default SiderMenu