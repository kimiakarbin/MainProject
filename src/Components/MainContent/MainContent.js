import banner990X400 from '../../Assets/Image/banner990X400.webp';
import banner990X4001 from '../../Assets/Image/banner990X4001.webp';
import banner990X4003 from '../../Assets/Image/banner990X4003.webp';
import banner990X4002 from '../../Assets/Image/banner990X4002.webp';
import High_Quality_Hydraulic_Pump from '../../Assets/Image/High_Quality_Hydraulic_Pump.webp';
import Hot_Sale from '../../Assets/Image/Hot_Sale.webp';
import New_Style from '../../Assets/Image/New_Style.webp';
import smart_expo from '../../Assets/Image/smart_expo.webp';
import Online_Trading from '../../Assets/Image/Online_Trading.webp';
import Star_Suppliers from '../../Assets/Image/Star_Suppliers.webp';
import Leading_Supplier from '../../Assets/Image/Leading_Supplier.webp';
import Wholesale_Office_School from '../../Assets/Image/Wholesale_Office_School.webp';
import Low_Price from '../../Assets/Image/Low_Price.webp';
import 'antd/dist/antd.css';
import '../../Assets/style.less';
import { Menu, Dropdown, Button, Carousel } from 'antd';
import {
    MenuOutlined,
    RightOutlined,
    ArrowRightOutlined,
} from '@ant-design/icons';
import GGButton from '../../ReuseableComponents/GGButton/GGButton';
import clsx from 'clsx';

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
            <div className="Main--Content__Left--Container">
                <div
                    className={clsx(
                        'Main--Content__Left--Container__Title',
                        'BlackLink',
                    )}
                >
                    <MenuOutlined />
                    <GGButton className="BlackLink" value="Categories" />
                </div>
                <div>
                    <Dropdown
                        className="Left--Container__Dropdown"
                        overlay={menu}
                        arrow
                    >
                        <GGButton
                            className="GrayLink"
                            value="Manufacturing & Processing machinery"
                        />
                    </Dropdown>
                    <Dropdown
                        className="Left--Container__Dropdown"
                        overlay={menu}
                        arrow
                    >
                        <GGButton
                            className="GrayLink"
                            value=" Consumer Electronics"
                        />
                    </Dropdown>
                    <Dropdown
                        className="Left--Container__Dropdown"
                        overlay={menu}
                        arrow
                    >
                        <GGButton
                            className="GrayLink"
                            value=" Industrial Equipment & Components"
                        />
                    </Dropdown>
                    <Dropdown
                        className="Left--Container__Dropdown"
                        overlay={menu}
                        arrow
                    >
                        <GGButton
                            className="GrayLink"
                            value="  Electrical & Electronics"
                        />
                    </Dropdown>
                    <Dropdown
                        className="Left--Container__Dropdown"
                        overlay={menu}
                        arrow
                    >
                        <GGButton
                            className="GrayLink"
                            value="  Construction & Decoration"
                        />
                    </Dropdown>
                    <Dropdown
                        className="Left--Container__Dropdown"
                        overlay={menu}
                        arrow
                    >
                        <GGButton
                            className="GrayLink"
                            value=" Light Industry & Daily Use"
                        />
                    </Dropdown>
                    <Dropdown
                        className="Left--Container__Dropdown"
                        overlay={menu}
                        arrow
                    >
                        <GGButton
                            className="GrayLink"
                            value="Auto,Motorcycle Parts & Accessories"
                        />
                    </Dropdown>
                    <Dropdown
                        className="Left--Container__Dropdown"
                        overlay={menu}
                        arrow
                    >
                        <GGButton
                            className="GrayLink"
                            value="Apparel & Accessories"
                        />
                    </Dropdown>
                    <Dropdown
                        className="Left--Container__Dropdown"
                        overlay={menu}
                        arrow
                    >
                        <GGButton
                            className="GrayLink"
                            value=" Light & lighting"
                        />
                    </Dropdown>
                    <Dropdown
                        className="Left--Container__Dropdown"
                        overlay={menu}
                    >
                        <GGButton
                            className="GrayLink"
                            value="Sporting Goods & Recreation"
                        />
                    </Dropdown>
                    <Dropdown
                        className="Left--Container__Dropdown"
                        overlay={menu}
                        arrow
                    >
                        <GGButton
                            className="GrayLink"
                            value=" Transportation"
                        />
                    </Dropdown>
                    <Dropdown
                        className="Left--Container__Dropdown"
                        overlay={menu}
                        arrow
                    >
                        <GGButton className="GrayLink" value="Arts & Crafts" />
                    </Dropdown>
                    <Dropdown
                        className="Left--Container__Dropdown"
                        overlay={menu}
                        arrow
                    >
                        <GGButton
                            className="GrayLink"
                            value="Health & Medicine"
                        />
                    </Dropdown>
                    <Dropdown
                        className="Left--Container__Dropdown"
                        overlay={menu}
                        arrow
                    >
                        <GGButton
                            className="GrayLink"
                            value="Packaging & Printing"
                        />
                    </Dropdown>
                    <Dropdown
                        className="Left--Container__Dropdown"
                        overlay={menu}
                        arrow
                    >
                        <GGButton
                            className="GrayLink"
                            value=" Computer Products"
                        />
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
                <div className="Main--Content__Carousel">
                    <Carousel autoplay>
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
                        <img className="Spotlight--Image" src={smart_expo} />
                        <ArrowRightOutlined className="Arrow--Icon" />
                    </div>
                    <div className="Spotlight--Item">
                        <img
                            className="Spotlight--Image"
                            src={Online_Trading}
                        />
                        <ArrowRightOutlined className="Arrow--Icon" />
                    </div>
                    <div className="Spotlight--Item">
                        <img
                            className="Spotlight--Image"
                            src={Star_Suppliers}
                        />
                        <ArrowRightOutlined className="Arrow--Icon" />
                    </div>
                    <div className="Spotlight--Item">
                        <img
                            className="Spotlight--Image"
                            src={Leading_Supplier}
                        />
                        <ArrowRightOutlined className="Arrow--Icon" />
                    </div>
                </div>
            </div>

            <div className="Main--Content__Right--Container">
                <div>
                    <h2 className="Right--Container__Title">You Make Like</h2>
                </div>
                <div>
                    <div className="Right--Container__Items">
                        <img
                            src={High_Quality_Hydraulic_Pump}
                            alt=""
                            width="80px"
                            height="50px"
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
                            height="50px"
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
                            height="50px"
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
                            height="50px"
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
