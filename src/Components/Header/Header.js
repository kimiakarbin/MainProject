import made_in_iran from '../../Assets/Image/made_in_iran.webp';
import GGButton from '../../ReuseableComponents/GGButton/GGButton';
import { Menu, Dropdown, Input } from 'antd';
import 'antd/dist/antd.less';
import {
    MobileOutlined,
    DownOutlined,
    UserOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';
import { AppBar, Toolbar } from '@material-ui/core';
import clsx from 'clsx';
import HamburgerMenu from './hamburgerMenu';
import { useMediaQuery } from 'react-responsive';
import { DeviceSize } from '../Responsive/Responsive';
import './Assets/Style.less';
import UseTrigger from '../UseTrigger/UseTrigger';
const Header = () => {
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.tablet });

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

    const language = (
        <Menu>
            <Menu.Item>English</Menu.Item>
            <Menu.Item>فارسی</Menu.Item>
            <Menu.Item>عربی</Menu.Item>
        </Menu>
    );

    const { Search } = Input;

    return (
        <UseTrigger threshold={0}>
            <AppBar position="fixed">
                <Toolbar>
                    <div className="Header">
                        {!isMobile && (
                            <div className="Header--First__Row">
                                <Dropdown
                                    className="Header--Dropdown"
                                    overlay={menu}
                                >
                                    <div className="BlackLink">
                                        <GGButton
                                            className="BlackLink"
                                            value="For Buyer"
                                        />
                                        <DownOutlined />
                                    </div>
                                </Dropdown>

                                <Dropdown
                                    className="Header--Dropdown"
                                    overlay={menu}
                                >
                                    <div className="BlackLink">
                                        <GGButton
                                            className="BlackLink"
                                            value="For Supplier"
                                        />
                                        <DownOutlined />
                                    </div>
                                </Dropdown>

                                <Dropdown
                                    className="Header--Dropdown"
                                    overlay={menu}
                                >
                                    <div className="BlackLink">
                                        <MobileOutlined />
                                        <GGButton
                                            className="BlackLink"
                                            value="Get App"
                                        />
                                        <DownOutlined />
                                    </div>
                                </Dropdown>

                                <Dropdown
                                    className="Header--Dropdown"
                                    overlay={language}
                                >
                                    <div className="BlackLink">
                                        <GGButton
                                            className="BlackLink"
                                            value="English"
                                        />
                                        <DownOutlined />
                                    </div>
                                </Dropdown>
                            </div>
                        )}

                        <div className="Header--Second__Row">
                            <div className="Header--Image">
                                <img
                                    className="Made--In__Iran--Pic"
                                    src={made_in_iran}
                                    alt=""
                                />
                            </div>
                            <div></div>
                            <div className="Header--Search__Bar">
                                <div className="Header--Search__Tab">
                                    <GGButton
                                        className={clsx(
                                            'Search--Tab__Item',
                                            'BlackLink',
                                        )}
                                        value="Products"
                                    />
                                    <GGButton
                                        className={clsx(
                                            'Search--Tab__Item',
                                            'BlackLink',
                                        )}
                                        value="Supplier"
                                    />
                                    <GGButton
                                        className={clsx(
                                            'Search--Tab__Item',
                                            'BlackLink',
                                        )}
                                        value="Sourcing Requests"
                                    />
                                </div>
                                <div className="Header--Search__Box">
                                    <Search
                                        placeholder="input search text"
                                        allowClear
                                        enterButton="Search"
                                        size="large"
                                    />
                                </div>
                            </div>
                            <HamburgerMenu />
                            {!isMobile && (
                                <div className="Sign--Container">
                                    <UserOutlined
                                        style={{ fontSize: '32px' }}
                                    />
                                    <div className="Sign--Join__Button">
                                        <GGButton
                                            className={clsx(
                                                'Sign--Button',
                                                'BlackLink',
                                            )}
                                            value="Sign In"
                                        />
                                        <br />
                                        <GGButton
                                            className={clsx(
                                                'Sign--Button',
                                                'BlackLink',
                                            )}
                                            value="Join free"
                                        />
                                    </div>
                                </div>
                            )}{' '}
                            {!isMobile && (
                                <div className="Inquiry--Button">
                                    <ShoppingCartOutlined
                                        style={{ fontSize: '32px' }}
                                    />
                                    <GGButton
                                        className="BlackLink"
                                        value="Inquiry Basket"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </UseTrigger>
    );
};

export default Header;
