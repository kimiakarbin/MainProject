import { Menu, Dropdown } from 'antd';
import 'antd/dist/antd.css';
import '../../Assets/style.less';
import { MenuOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import banner990X400 from '../../Assets/Image/banner990X400.png';
import banner990X4001 from '../../Assets/Image/banner990X4001.png';
import banner990X4003 from '../../Assets/Image/banner990X4003.jpg';
import banner990X4002 from '../../Assets/Image/banner990X4002.jpg';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import '../../Assets/style.less';
import High_Quality_Hydraulic_Pump from '../../Assets/Image/High_Quality_Hydraulic_Pump.webp';
import Hot_Sale from '../../Assets/Image/Hot_Sale.webp';
import New_Style from '../../Assets/Image/New_Style.webp';
import Wholesale_Office_School from '../../Assets/Image/Wholesale_Office_School.webp';
import Low_Price from '../../Assets/Image/Low_Price.webp';
import { ArrowRightOutlined } from '@ant-design/icons';

const MainContent = () => {
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
        <div className="Main--Content">
            <div className="First--Body__Left--Container">
                <div className="First--Body__Left--Container__Title">
                    <h2>
                        <MenuOutlined /> Categories
                    </h2>
                </div>
                <div>
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
                        <a onClick={(e) => e.preventDefault()}>
                            Light & lighting
                        </a>
                    </Dropdown>
                    <Dropdown
                        className="Left--Container__Dropdown"
                        overlay={menu}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            Sporting Goods & Recreation
                        </a>
                    </Dropdown>
                    <Dropdown
                        className="Left--Container__Dropdown"
                        overlay={menu}
                        arrow
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            Transportation
                        </a>
                    </Dropdown>
                    <Dropdown
                        className="Left--Container__Dropdown"
                        overlay={menu}
                        arrow
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            Arts & Crafts{' '}
                        </a>
                    </Dropdown>
                    <Dropdown
                        className="Left--Container__Dropdown"
                        overlay={menu}
                        arrow
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            Health & Medicine
                        </a>
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
                        <a onClick={(e) => e.preventDefault()}>
                            Computer Products
                        </a>
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

            <div>
                <div>
                    <Carousel className="Carousel" autoplay>
                        <div>
                            <img
                                src={banner990X400}
                                alt=""
                                width="100%"
                                height="350px"
                            />
                        </div>
                        <div>
                            <img
                                src={banner990X4001}
                                alt=""
                                width="100%"
                                height="350px"
                            />
                        </div>
                        <div>
                            <img
                                src={banner990X4003}
                                alt=""
                                width="100%"
                                height="350px"
                            />
                        </div>
                        <div>
                            <img
                                src={banner990X4002}
                                alt=""
                                width="100%"
                                height="350px"
                            />
                        </div>
                    </Carousel>
                </div>

                <div className="Case--Desc">
                    <div className="Spotlight--Item">
                        <ArrowRightOutlined className="Arrow--Icon" />
                    </div>
                    <div className="Spotlight--Item">
                        <ArrowRightOutlined className="Arrow--Icon" />
                    </div>
                    <div className="Spotlight--Item">
                        <ArrowRightOutlined className="Arrow--Icon" />
                    </div>
                    <div className="Spotlight--Item">
                        <ArrowRightOutlined className="Arrow--Icon" />
                    </div>
                </div>
            </div>

            <div className="First--Body__Right--Container">
                <div className="Right--Container__Title">
                    <h2>You Make Like</h2>
                </div>
                <div>
                    <div className="Right--Container__Items">
                        <img
                            src={High_Quality_Hydraulic_Pump}
                            alt=""
                            width="80px"
                            height="70px"
                        />
                        <a class="Text--Item">
                            <div class="Type--Of__Products">
                                Processing Machine
                            </div>
                            <div class="Number--Of__Products">
                                1,161,000+ Products
                            </div>
                        </a>
                    </div>

                    <div className="Right--Container__Items">
                        <img
                            src={New_Style}
                            alt=""
                            width="80px"
                            height="70px"
                        />
                        <a class="Text--Item">
                            <div class="Type--Of__Products">Robot Arm</div>
                            <div class="Number--Of__Products">
                                41,000+ Products
                            </div>
                        </a>
                    </div>
                    <div className="Right--Container__Items">
                        <img src={Hot_Sale} alt="" width="80px" height="70px" />
                        <a class="Text--Item">
                            <div class="Type--Of__Products">
                                Packaging Machine
                            </div>
                            <div class="Number--Of__Products">
                                1,286,000+ Products
                            </div>
                        </a>
                    </div>

                    <div className="Right--Container__Items">
                        <img
                            src={Wholesale_Office_School}
                            alt=""
                            width="80px"
                            height="70px"
                        />
                        <a class="Text--Item">
                            <div class="Type--Of__Products">Faster</div>
                            <div class="Number--Of__Products">
                                400,000+ Products
                            </div>
                        </a>
                    </div>

                    <div className="Right--Container__Items">
                        <img
                            src={Low_Price}
                            alt=""
                            width="80px"
                            height="70px"
                        />
                        <a class="Text--Item">
                            <div class="Type--Of__Products">Hydraulic Pump</div>
                            <div class="Number--Of__Products">
                                286,000+ Products
                            </div>
                        </a>
                    </div>
                    <div className="Add--Products__Container">
                        <div className="Add--Products__Question">
                            No desirable Products?
                        </div>

                        <Button className="Add--Products__Button" danger>
                            Post Your Request Now!
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
