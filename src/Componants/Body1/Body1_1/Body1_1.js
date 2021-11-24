import { Menu, Dropdown } from 'antd';
import 'antd/dist/antd.css';
import '../../../Assets/style.less';
import { MenuOutlined, RightOutlined } from '@ant-design/icons';

const Body1_1 = () => {
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
        <div className="First--Body__Left--Container">
            <div className="First--Body__Left--Container__Dropdown">
                <div className="Left--Container__Title">
                    <MenuOutlined /> Categories
                </div>
                <Dropdown
                    className="Left--Container__Dropdown"
                    overlay={menu}
                    arrow
                >
                    <a onClick={(e) => e.preventDefault()}>
                        Manufacturing & Processing machinery
                    </a>
                </Dropdown>
                <Dropdown
                    className="Left--Container__Dropdown"
                    overlay={menu}
                    arrow
                >
                    <a onClick={(e) => e.preventDefault()}>
                        Consumer Electronics
                    </a>
                </Dropdown>
                <Dropdown
                    className="Left--Container__Dropdown"
                    overlay={menu}
                    arrow
                >
                    <a onClick={(e) => e.preventDefault()}>
                        Industrial Equipment & Components
                    </a>
                </Dropdown>
                <Dropdown
                    className="Left--Container__Dropdown"
                    overlay={menu}
                    arrow
                >
                    <a onClick={(e) => e.preventDefault()}>
                        Electrical & Electronics
                    </a>
                </Dropdown>
                <Dropdown
                    className="Left--Container__Dropdown"
                    overlay={menu}
                    arrow
                >
                    <a onClick={(e) => e.preventDefault()}>
                        Construction & Decoration
                    </a>
                </Dropdown>
                <Dropdown
                    className="Left--Container__Dropdown"
                    overlay={menu}
                    arrow
                >
                    <a onClick={(e) => e.preventDefault()}>
                        Light Industry & Daily Use
                    </a>
                </Dropdown>
                <Dropdown
                    className="Left--Container__Dropdown"
                    overlay={menu}
                    arrow
                >
                    <a onClick={(e) => e.preventDefault()}>
                        Auto,Motorcycle Parts & Accessories
                    </a>
                </Dropdown>
                <Dropdown
                    className="Left--Container__Dropdown"
                    overlay={menu}
                    arrow
                >
                    <a onClick={(e) => e.preventDefault()}>
                        Apparel & Accessories
                    </a>
                </Dropdown>
                <Dropdown
                    className="Left--Container__Dropdown"
                    overlay={menu}
                    arrow
                >
                    <a onClick={(e) => e.preventDefault()}>Light & lighting</a>
                </Dropdown>
                <Dropdown className="Left--Container__Dropdown" overlay={menu}>
                    <a onClick={(e) => e.preventDefault()}>
                        Sporting Goods & Recreation
                    </a>
                </Dropdown>
                <Dropdown
                    className="Left--Container__Dropdown"
                    overlay={menu}
                    arrow
                >
                    <a onClick={(e) => e.preventDefault()}>Transportation</a>
                </Dropdown>
                <Dropdown
                    className="Left--Container__Dropdown"
                    overlay={menu}
                    arrow
                >
                    <a onClick={(e) => e.preventDefault()}>Arts & Crafts </a>
                </Dropdown>
                <Dropdown
                    className="Left--Container__Dropdown"
                    overlay={menu}
                    arrow
                >
                    <a onClick={(e) => e.preventDefault()}>Health & Medicine</a>
                </Dropdown>
                <Dropdown
                    className="Left--Container__Dropdown"
                    overlay={menu}
                    arrow
                >
                    <a onClick={(e) => e.preventDefault()}>
                        Packaging & Printing
                    </a>
                </Dropdown>
                <Dropdown
                    className="Left--Container__Dropdown"
                    overlay={menu}
                    arrow
                >
                    <a onClick={(e) => e.preventDefault()}>Computer Products</a>
                </Dropdown>
                <Dropdown
                    className="Last--Left__Container--Dropdown"
                    overlay={menu}
                    arrow
                >
                    <a onClick={(e) => e.preventDefault()}>
                        More Categories <RightOutlined />
                    </a>
                </Dropdown>
            </div>
        </div>
    );
};

export default Body1_1;
