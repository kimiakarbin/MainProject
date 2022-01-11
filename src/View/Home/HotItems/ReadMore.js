import clsx from 'clsx';
import React, { useState } from 'react';
import GGButton from '../../../ReuseableComponents/GGButton/GGButton';
import './Assets/Style.less';

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <div className="text">
            {isReadMore ? text.slice(0, 10) : text}
            <span onClick={toggleReadMore}>
                {isReadMore ? 'More' : ' Less'}
            </span>
        </div>
    );
};

const Content = () => {
    return (
        <div className="container">
            Hot Items
            <div className="more">
                <ReadMore className="Hot--Itemss">
                    <GGButton
                        value="Furniture"
                        className={clsx('Hot--Item', 'GrayLink')}
                    />
                    <GGButton
                        value="Electrical Equipments"
                        className={clsx('Hot--Item', 'GrayLink')}
                    />
                    <GGButton
                        value="Vehicles and Transportation"
                        className={clsx('Hot--Item', 'GrayLink')}
                    />
                    <GGButton
                        value="Construction Industry"
                        className={clsx('Hot--Item', 'GrayLink')}
                    />
                    <GGButton
                        value="Auto Parts and Accessories"
                        className={clsx('Hot--Item', 'GrayLink')}
                    />
                    <GGButton
                        value="Gifts , Crafts & Collectibles"
                        className={clsx('Hot--Item', 'GrayLink')}
                    />
                    <GGButton
                        value="Minerals , Metals & Materials"
                        className={clsx('Hot--Item', 'GrayLink')}
                    />
                    <GGButton
                        value="Hardware & Tool Industry"
                        className={clsx('Hot--Item', 'GrayLink')}
                    />
                    <GGButton
                        value="Computer Products"
                        className={clsx('Hot--Item', 'GrayLink')}
                    />
                    <GGButton
                        value="Sealing,Packaging Storage & Shelving"
                        className={clsx('Hot--Item', 'GrayLink')}
                    />
                    <GGButton
                        value="Textiles"
                        className={clsx('Hot--Item', 'GrayLink')}
                    />
                    <GGButton
                        value="Furniture Industry"
                        className={clsx('Hot--Item', 'GrayLink')}
                    />

                    <GGButton
                        value="Apparel and Clothing"
                        className={clsx('Hot--Item', 'GrayLink')}
                    />
                    <GGButton
                        value="Electronic Components"
                        className={clsx('Hot--Item', 'GrayLink')}
                    />
                    <GGButton
                        value="Tools and Hardware"
                        className={clsx('Hot--Item', 'GrayLink')}
                    />
                    <GGButton
                        value="Lighting Industry"
                        className={clsx('Hot--Item', 'GrayLink')}
                    />
                    <GGButton
                        value="Bags , Cases & Luggages"
                        className={clsx('Hot--Item', 'GrayLink')}
                    />
                    <GGButton
                        value="Motorcycles & Scooters"
                        className={clsx('Hot--Item', 'GrayLink')}
                    />
                    <GGButton
                        value="Machinery & Equipments"
                        className={clsx('Hot--Item', 'GrayLink')}
                    />
                    <GGButton
                        value="Industrial Machinery Industry"
                        className={clsx('Hot--Item', 'GrayLink')}
                    />
                    <GGButton
                        value="Consumer Electronics"
                        className={clsx('Hot--Item', 'GrayLink')}
                    />
                    <GGButton
                        value="Building Materials & Supplies"
                        className={clsx('Hot--Item', 'GrayLink')}
                    />
                    <GGButton
                        value="Lighting"
                        className={clsx('Hot--Item', 'GrayLink')}
                    />
                    <GGButton
                        value="Machine Parts Industry"
                        className={clsx('Hot--Item', 'GrayLink')}
                    />
                </ReadMore>
            </div>
        </div>
    );
};

export default Content;
