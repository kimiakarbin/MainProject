import React from 'react';
import { RightOutlined, InfoCircleOutlined } from '@ant-design/icons';
import Fashion from './Assets/Image/Fashion.webp';
import Fashionnn from './Assets/Image/Fashionnn.webp';
import SunGlasses from './Assets/Image/SunGlasses.webp';
import FashionN from './Assets/Image/FashionN.webp';
import Sky_sea from './Assets/Image/Sky_sea.webp';
import GGButton from '../../../ReuseableComponents/GGButton/GGButton';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Capture from './Assets/Image/Capture.JPG';
import './Assets/Style.less';
import clsx from 'clsx';
import { Button } from 'antd';
import {
    ShareAltOutlined,
    HeartOutlined,
    FacebookOutlined,
    TwitterOutlined,
    InstagramOutlined,
    LinkedinOutlined,
} from '@ant-design/icons';

import { Carousel } from 'antd';
import App from '../../../App';

const Sunglasses = () => {
    return (
        <div className="Sunglasses">
            <div className="Detail--Top__Bar">
                <Link to="/">
                    <GGButton className="GrayLink" value="Home " />
                </Link>
                <RightOutlined />
                <GGButton className="GrayLink" value="Consumer Electronics  " />
                <RightOutlined />
                <GGButton className="GrayLink" value="Wearable Devices" />
                <RightOutlined />
                <GGButton className="GrayLink" value="Smart Glasses" />
                <RightOutlined />
            </div>
            <div className="Layout--Detail__Clears">
                <div className="Layout--Detail__Image">
                    <Carousel effect="fade">
                        <div>
                            <img src={Fashion} className="Detail--Image" />
                        </div>
                        <div>
                            <img src={Fashionnn} className="Detail--Image" />
                        </div>
                        <div>
                            <img src={SunGlasses} className="Detail--Image" />
                        </div>
                        <div>
                            <img src={FashionN} className="Detail--Image" />
                        </div>
                    </Carousel>

                    <div className="Fav--Share__Wrap">
                        <div className={clsx('BlackLink', 'Fav')}>
                            <HeartOutlined />
                            <GGButton
                                className={clsx('Favorite--Wrap', 'BlackLink')}
                                value="Favorite"
                            />
                        </div>
                        <div className="Share--Wrap">
                            <div>
                                <ShareAltOutlined />
                                Share
                            </div>
                            <div className="Social__Icon">
                                <FacebookOutlined className="Facebook--Icon__Share" />
                                <TwitterOutlined className="Twitter--Icon__Share" />
                                <InstagramOutlined className="Instagram--Icon__Share" />
                                <LinkedinOutlined className="Linkedin--Icon__Share" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Main--Info">
                    <div className="Info--Title">
                        Elegant Women Fashion Acetate Sunglasses
                    </div>
                    <div className="Get--Price__Info">
                        <div className="Get--Price__Title">
                            <div className="Get--Price">
                                Reference FOB Price / Purchase Qty.
                                <InfoCircleOutlined
                                    style={{ color: '#2e8ae6' }}
                                />
                            </div>
                            <div className="Latest--Price">
                                Get Latest Price
                                <RightOutlined />
                            </div>
                        </div>
                        <div className="Price--Box">
                            <div>
                                <div className="Product--Price">US $6.8</div>
                                <div className="Product--Pieces">
                                    <div className="Piece">400-999</div>
                                    <div className="Piece--Title">Pieces</div>
                                </div>
                            </div>
                            <div className="Separator--Line"></div>
                            <div>
                                <div className="Product--Price">US $6.5</div>
                                <div className="Product--Pieces">
                                    <div className="Piece">1,000+</div>
                                    <div className="Piece--Title">Pieces</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Bottom--Line"></div>

                    <table>
                        <tr>
                            <th className="Product--Property">
                                Frame Material:
                            </th>
                            <td className="Prod--Prop">Acetate</td>
                        </tr>
                        <tr>
                            <th className="Product--Property">Material:</th>
                            <td className="Prod--Prop">Polarized</td>
                        </tr>
                        <tr>
                            <th className="Product--Property">Style:</th>
                            <td className="Prod--Prop">Fashion Sunglasses</td>
                        </tr>
                        <tr>
                            <th className="Product--Property">
                                Lenses Optical Attribute :
                            </th>
                            <td className="Prod--Prop">Gradient</td>
                        </tr>
                        <tr>
                            <th className="Product--Property">Suitable for:</th>
                            <td className="Prod--Prop">Women, Square Face</td>
                        </tr>
                        <tr>
                            <th className="Product--Property">Lenses Color:</th>
                            <td className="Prod--Prop">Smoke</td>
                        </tr>
                    </table>
                    <div className="Bottom--Line"></div>
                    <table>
                        <tr>
                            <th className="Product--Property">Samples:</th>
                            <td className="sample-order-info">
                                <div className="Price--Property">
                                    US$ 8.5/Piece
                                </div>
                                <div className="Buying--Condition">
                                    1 Piece(Min.Order)
                                </div>
                                <div
                                    className={clsx(
                                        'Request--Sample',
                                        'BlackLink',
                                    )}
                                >
                                    Request Sample
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th className="Product--Property">
                                Customization:
                            </th>
                            <td className="sample-order-info">
                                <div className="Buying--Condition">
                                    Available
                                </div>
                                <div
                                    className={clsx(
                                        'Request--Sample',
                                        'BlackLink',
                                    )}
                                >
                                    Customized Request
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="Layout--Right">
                    <div className="Contact--Button__Place">
                        <h2>Contact Supplier</h2>
                        <div className="Side--Cont__Supplier--Info">
                            <img className="User--Pic" src={Capture} alt="" />

                            <div>
                                <div className="User--Name">
                                    Ms. Maggie Wang
                                </div>
                                <div className="Supplier--Position">
                                    Sales Manager
                                </div>
                            </div>
                        </div>

                        <Button
                            className="Button--Link__Contact"
                            type="primary"
                        >
                            Contact Now
                        </Button>
                        <Button
                            className="Supplier--Chat__Button"
                            type="primary"
                        >
                            Chat with Supplier
                        </Button>
                        <div className={clsx('BlackLink', 'Add--To__Basket')}>
                            Inquiry Basket
                        </div>
                    </div>

                    <div className="Company--Homepage">
                        <div className="Link--To__ComInfo">
                            <img src={Sky_sea} className="Sky--Sea__Pic" />
                            <div
                                className={clsx('Sky--Title__Txt', 'BlackLink')}
                            >
                                Sky & Sea Optical MFY Co., Ltd.
                            </div>
                        </div>
                        <div className="Com--Place__Two">
                            <div className="User--Type">
                                <div className="Sign--Item">Diamond Member</div>
                                <div className="Txt--Year">Since 2014</div>
                            </div>
                            <div className=""> Audited Supplier</div>
                        </div>
                        <div className="Info--Business__Type">
                            Manufacturer/Factory & Trading Company
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sunglasses;
