import Arts_Crafts from './Assets/Image/Arts_Crafts.webp';
import Arts__Crafts from './Assets/Image/Arts__Crafts.webp';
import Wig from './Assets/Image/Wig.webp';
import Sunglasses from './Assets/Image/Sunglasses.webp';
import Medal from './Assets/Image/Medal.webp';
import Human_Hair from './Assets/Image/Human_Hair.webp';
import Door from './Assets/Image/Door.webp';
import Decoration_Materials from './Assets/Image/Decoration_Materials.webp';
import China_Building from './Assets/Image/China_Building.webp';
import Aluminum_Window from './Assets/Image/Aluminum_Window.webp';
import { Button } from 'antd';
import clsx from 'clsx';
import './Assets/Style.less';

const IndustryBooth = () => {
    return (
        <div className="Industry--Booth">
            <div className="Industry--Booth__Item">
                <img
                    className="Industry--Image__Background"
                    src={Arts_Crafts}
                    alt=""
                />
                <img
                    className="Industry--Image__Backgroundd"
                    src={Arts__Crafts}
                    alt=""
                    style={{ display: 'none' }}
                />
                <h2>Arts & Crafts</h2>
                <Button className="Source--Now__Button" type="primary">
                    Source Now
                </Button>
            </div>
            <div className="Industry--Products">
                <div className={clsx('Industry--Products__Item', 'BlackLink')}>
                    <p>Wig</p>
                    <img
                        className="Industry--Products__Image"
                        src={Wig}
                        alt=""
                    />
                </div>
                <div className={clsx('Industry--Products__Item', 'BlackLink')}>
                    <p>Sunglasses</p>
                    <img
                        className="Industry--Products__Image"
                        src={Sunglasses}
                        alt=""
                    />
                </div>
                <div className={clsx('Industry--Products__Item', 'BlackLink')}>
                    <p>Medal</p>
                    <img
                        className="Industry--Products__Image"
                        src={Medal}
                        alt=""
                    />
                </div>
                <div className={clsx('Industry--Products__Item', 'BlackLink')}>
                    <p>Human Hair</p>
                    <img
                        className="Industry--Products__Image"
                        src={Human_Hair}
                        alt=""
                    />
                </div>
                <div className={clsx('Industry--Products__Item', 'BlackLink')}>
                    <p>Door</p>
                    <img
                        className="Industry--Products__Image"
                        src={Door}
                        alt=""
                    />
                </div>
                <div className={clsx('Industry--Products__Item', 'BlackLink')}>
                    <p>Decoration Materials</p>
                    <img
                        className="Industry--Products__Image"
                        src={Decoration_Materials}
                        alt=""
                    />
                </div>
                <div className={clsx('Industry--Products__Item', 'BlackLink')}>
                    <p>China Building</p>
                    <img
                        className="Industry--Products__Image"
                        src={China_Building}
                        alt=""
                    />
                </div>
                <div className={clsx('Industry--Products__Item', 'BlackLink')}>
                    <p>Aluminum Window</p>
                    <img
                        className="Industry--Products__Image"
                        src={Aluminum_Window}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default IndustryBooth;
