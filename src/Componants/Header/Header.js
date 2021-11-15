import react from 'react';
import { Menu, Dropdown, Input, Space, Popover, Anchor, Button } from 'antd';
import made_in_iran from '../../Assets/Image/made_in_iran.png';
import 'antd/dist/antd.css';
import '../../Assets/style.less';
import {
    DownOutlined,
    UserOutlined,
    ShoppingCartOutlined,
    MobileOutlined,
    AudioOutlined,
} from '@ant-design/icons';
const Header = () => {
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
            <Menu.Item icon={<DownOutlined />} disabled>
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
    const { Search } = Input;
    const { Link } = Anchor;

    return (
        <div className="header">
            <div className>
                {' '}
                <img className="madeiniran" src={made_in_iran} alt="" />
                <div className="dropdown1">
                    <Dropdown className="dropdown1-1" overlay={menu}>
                        <a onClick={(e) => e.preventDefault()}>
                            Hover me <DownOutlined />
                        </a>
                    </Dropdown>

                    <Dropdown className="dropdown1-1" overlay={menu}>
                        <a onClick={(e) => e.preventDefault()}>
                            Hover me <DownOutlined />
                        </a>
                    </Dropdown>

                    <Dropdown className="dropdown1-1" overlay={menu}>
                        <a onClick={(e) => e.preventDefault()}>
                            Hover me <DownOutlined />
                        </a>
                    </Dropdown>

                    <Dropdown className="dropdown1-1" overlay={menu}>
                        <a onClick={(e) => e.preventDefault()}>
                            Hover me <DownOutlined />
                        </a>
                    </Dropdown>
                </div>
                <div className="span">
                    <span className="newhover">Products</span>
                    <span className="newhover">Supplier</span>
                    <span className="newhover">Sourcing Requests</span>
                </div>
                <div className="search1">
                    <Search
                        className="search"
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                    />
                    <div className="sign">
                        <div className="sign1">
                            <UserOutlined style={{ fontSize: '32px' }} />
                            <div className="sign2">
                                <span className="newhover">Sign In</span>
                                <br />
                                <span className="newhover">Join free</span>
                            </div>
                        </div>

                        <div>
                            <ShoppingCartOutlined
                                style={{ fontSize: '32px' }}
                            />
                            <div className="sign3"> Inquiry Basket</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
