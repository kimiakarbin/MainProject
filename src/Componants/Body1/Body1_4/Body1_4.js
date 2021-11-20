import react from 'react';
import { Menu, Dropdown } from 'antd';
import 'antd/dist/antd.css';
import '../../../Assets/style.less';
import { MenuOutlined } from '@ant-design/icons';

const Body1_4 = () => {
    const menu = (
        <Menu>
            <Menu.Item>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                >
                    1st menu item
                </a>
            </Menu.Item>
            <Menu.Item disabled>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aliyun.com"
                >
                    2nd menu item (disabled)
                </a>
            </Menu.Item>
            <Menu.Item disabled>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.luohanacademy.com"
                >
                    3rd menu item (disabled)
                </a>
            </Menu.Item>
            <Menu.Item danger>a danger item</Menu.Item>
        </Menu>
    );
    return (
        <div className="Body1_4">
            <div className="dropdown2">
                <div className="catgories">
                    <MenuOutlined /> categories
                </div>
                <Dropdown className="dropdown2-2" overlay={menu} arrow>
                    <a onClick={(e) => e.preventDefault()}>Hover me</a>
                </Dropdown>
                <Dropdown className="dropdown2-2" overlay={menu} arrow>
                    <a onClick={(e) => e.preventDefault()}>Hover me</a>
                </Dropdown>
                <Dropdown className="dropdown2-2" overlay={menu} arrow>
                    <a onClick={(e) => e.preventDefault()}>Hover me</a>
                </Dropdown>
                <Dropdown className="dropdown2-2" overlay={menu} arrow>
                    <a onClick={(e) => e.preventDefault()}>Hover me</a>
                </Dropdown>
                <Dropdown className="dropdown2-2" overlay={menu} arrow>
                    <a onClick={(e) => e.preventDefault()}>Hover me</a>
                </Dropdown>
                <Dropdown className="dropdown2-2" overlay={menu} arrow>
                    <a onClick={(e) => e.preventDefault()}>Hover me</a>
                </Dropdown>
                <Dropdown className="dropdown2-2" overlay={menu} arrow>
                    <a onClick={(e) => e.preventDefault()}>Hover me</a>
                </Dropdown>
                <Dropdown className="dropdown2-2" overlay={menu} arrow>
                    <a onClick={(e) => e.preventDefault()}>Hover me</a>
                </Dropdown>
                <Dropdown className="dropdown2-2" overlay={menu} arrow>
                    <a onClick={(e) => e.preventDefault()}>Hover me</a>
                </Dropdown>{' '}
                <Dropdown className="dropdown2-2" overlay={menu}>
                    <a onClick={(e) => e.preventDefault()}>Hover me</a>
                </Dropdown>
            </div>
        </div>
    );
};

export default Body1_4;
