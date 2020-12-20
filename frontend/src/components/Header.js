import React, { useState } from 'react'
import { Menu } from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons';

const { SubMenu } = Menu

const Header = () => {
    const [current,setCurrent] = useState('home')
    const handleClick = (e) => {
      setCurrent(e.key)
    }
    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home" icon={<AppstoreOutlined />}>
          Home
        </Menu.Item>

        <Menu.Item key="login" icon={<UserOutlined />}>
          Login
        </Menu.Item>

        <Menu.Item key="registernn" icon={<UserAddOutlined />}>
          Register
        </Menu.Item>

        <SubMenu icon={<SettingOutlined />} title="Username">
            <Menu.Item key="setting:1">Register</Menu.Item>
            <Menu.Item key="setting:2">Login</Menu.Item>
        </SubMenu>
      </Menu>
    )
}

export default Header
