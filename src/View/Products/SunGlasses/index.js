import React from 'react';
import { RightOutlined, InfoCircleOutlined } from '@ant-design/icons';
import SunGlasses from './Assets/Image/SunGlasses.webp';
import GGButton from '../../../ReuseableComponents/GGButton/GGButton';
import './Assets/Style.less';
import clsx from 'clsx';
const Sunglasses = () => {
    return (
        <div>
            <div className="Detail--Top__Bar">
                <GGButton className="GrayLink" value="Home " />
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
                    <img src={SunGlasses} className="Detail--Image" />
                </div>
                <div className="Main--Info">
                    <div className="Info--Title">
                        Elegant Women Fashion Acetate Sunglassses
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
                    <div className="Prod--Props">
                        <div className="Product--Property">Frame Material:</div>
                        <div className="Prod--Prop">Acetate</div>
                    </div>
                    <div className="Prod--Props">
                        <div className="Product--Property">
                            Lenses Material:
                        </div>
                        <div className="Prod--Prop">Polarized</div>
                    </div>
                    <div className="Prod--Props">
                        <div className="Product--Property">Style:</div>
                        <div className="Prod--Prop">Fashion Sunglasses</div>
                    </div>
                    <div className="Prod--Props">
                        <div className="Product--Property">
                            Lenses Optical Attribute :
                        </div>
                        <div className="Prod--Prop">Gradient</div>
                    </div>
                    <div className="Prod--Props">
                        <div className="Product--Property">Suitable for:</div>
                        <div className="Prod--Prop">Women, Square Face</div>
                    </div>
                    <div className="Prod--Props">
                        <div className="Product--Property">Lenses Color:</div>
                        <div className="Prod--Prop">Smoke</div>
                    </div>
                    <div className="Bottom--Line"></div>
                    <div className="">
                        <div className="Product--Property">Samples:</div>
                        <div className="sample-order-info">
                            <div className="Price--Property">US$ 8.5/Piece</div>
                            <div className="Buying--Condition">
                                1 Piece(Min.Order)
                            </div>
                            <div
                                className={clsx('Request--Sample', 'BlackLink')}
                            >
                                Request Sample
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Layout--Right"></div>
            </div>
        </div>
    );
};

export default Sunglasses;
