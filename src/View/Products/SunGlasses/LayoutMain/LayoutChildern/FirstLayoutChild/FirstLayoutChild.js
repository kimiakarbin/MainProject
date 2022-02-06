import React from 'react';
import '../FirstLayoutChild/Assets/Style.less';
import { Carousel } from 'antd';
import MP4 from './Assets/MP4.jpg';
import Sky from './Assets/Sky.webp';
import SkySeaOptical from './Assets/SkySeaOptical.webp';

function FirstLayoutChild() {
    return (
        <div className="First--Layout__Child">
            <h2 class="Company--Profile__H2">Company Profile</h2>
            <div className="Pro--List"></div>
            <a>Book a Factory Tour</a>
        </div>
    );
}

export default FirstLayoutChild;
