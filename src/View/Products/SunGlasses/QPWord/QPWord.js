import React, { useState } from 'react';
import './Assets/Style.less';
import GGButton from '../../../../ReuseableComponents/GGButton/GGButton';
import { RightOutlined } from '@ant-design/icons';
import clsx from 'clsx';
function QPWord() {
    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        };
        return (
            <div className="text">
                {isReadMore ? text.slice(0, 10) : text}
                <span className="More--Less__Button" onClick={toggleReadMore}>
                    {isReadMore ? 'More' : ' Less'}
                </span>
            </div>
        );
    };
    return (
        <div className="QPWord">
            <h2 class="QPWord--h2">Find Similar Products By Category</h2>
            <div className="Detail--crumb">
                <GGButton className="GrayLink" value="Supplier Homepage" />
                <RightOutlined />
                <GGButton className="GrayLink" value=" Products   " />
                <RightOutlined />
                <GGButton className="GrayLink" value=" Sunglasses " />
                <RightOutlined />
                <GGButton className="GrayLink" value=" Metal Sunglasses" />
                <RightOutlined />
                <GGButton
                    className="GrayLink"
                    value="  2019 Fashion New Designer Sunglasses for Wom"
                />
                <h2 class="QPWord--h2">Hot Searches</h2>
                <ReadMore className="Hot--Searches">
                    <GGButton
                        value="China Sunglasses"
                        className={clsx('Hot--Search', 'GrayLink')}
                    />
                    <GGButton
                        value="Eyewear Sunglasses"
                        className={clsx('Hot--Search', 'GrayLink')}
                    />
                    <GGButton
                        value="Fashion Sports Sunglasses"
                        className={clsx('Hot--Search', 'GrayLink')}
                    />
                    <GGButton
                        value="Sunglasses bulkbuy"
                        className={clsx('Hot--Search', 'GrayLink')}
                    />
                    <GGButton
                        value="
                        Cheap Sunglasses"
                        className={clsx('Hot--Search', 'GrayLink')}
                    />
                    <GGButton
                        value="Fashion Sunglasses Sunglass"
                        className={clsx('Hot--Search', 'GrayLink')}
                    />
                    <GGButton
                        value="
                        Fashion Women Sunglasses"
                        className={clsx('Hot--Search', 'GrayLink')}
                    />
                    <GGButton
                        value="
                        Sunglasses Fashion"
                        className={clsx('Hot--Search', 'GrayLink')}
                    />
                    <GGButton
                        value="Polarized Fashion Sunglasses"
                        className={clsx('Hot--Search', 'GrayLink')}
                    />
                    <GGButton
                        value="
                        Polarized Eyewear Sunglasses"
                        className={clsx('Hot--Search', 'GrayLink')}
                    />
                    <GGButton
                        value="China Sunglasses Manufacturers"
                        className={clsx('Hot--Search', 'GrayLink')}
                    />
                    <GGButton
                        value="Wholesale Logo Sunglasses"
                        className={clsx('Hot--Search', 'GrayLink')}
                    />

                    <GGButton
                        value="
                        Cheap Sunglasses Manufacturers"
                        className={clsx('Hot--Search', 'GrayLink')}
                    />
                    <GGButton
                        value="
                        Promotion Sunglasses Price"
                        className={clsx('Hot--Search', 'GrayLink')}
                    />
                    <GGButton
                        value="
                        Wholesale Sunglasses Metal"
                        className={clsx('Hot--Search', 'GrayLink')}
                    />
                    <GGButton
                        value="
                        Polarized Fashion Sunglasses Price"
                        className={clsx('Hot--Search', 'GrayLink')}
                    />
                </ReadMore>
            </div>
        </div>
    );
}

export default QPWord;
