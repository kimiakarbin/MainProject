import React, { useState } from 'react';
import '../FirstLayoutChild/Assets/Style.less';
import { Carousel } from 'antd';
import MP4 from './Assets/MP4.jpg';
import Sky from './Assets/Sky.webp';
import SkySeaOptical from './Assets/SkySeaOptical.webp';
import clsx from 'clsx';

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <div className="Glasses--Description__Paragraph">
            {isReadMore ? text.slice(0, 800) : text}
            <span className="View--All__less" onClick={toggleReadMore}>
                {isReadMore ? 'View All' : 'View Less'}
            </span>
        </div>
    );
};

function FirstLayoutChild() {
    return (
        <div className="First--Layout__Child" id="richNav_1">
            <div className="First--Layout__Table">
                <div className="Com--Profile__Info">
                    <h2 class="Company--Profile__H2">Company Profile</h2>
                    <div className="Pro--List"></div>
                    <button>Book a Factory Tour</button>
                </div>

                <div className="Com--Info__Table">
                    <table>
                        <tr>
                            <th className="Product--Prop__Title">
                                Business Type:
                            </th>
                            <td className="Prod--Prop"> Trading Company</td>
                        </tr>
                        <tr>
                            <th className="Product--Prop__Title">
                                Main Products:
                            </th>
                            <td className="Prod--Prop">
                                <span>Sunglasses</span>,
                                <span>Optical Frame</span>,
                                <span>Reading Glasses</span> ,
                                <span>Kid′s Sunglasses</span>
                                <span>Sunglasses Accessories </span> , ...
                            </td>
                        </tr>
                        <tr>
                            <th className="Product--Prop__Title">
                                Registered Capital:
                            </th>
                            <td className="Prod--Prop"> 300000 RMB</td>
                        </tr>
                        <tr>
                            <th className="Product--Prop__Title">
                                Plant Area:
                            </th>
                            <td className="Prod--Prop">
                                101~500 square meters
                            </td>
                        </tr>
                        <tr>
                            <th className="Product--Prop__Title">
                                Management System Certification:
                            </th>
                            <td className="Prod--Prop">
                                ISO 9001, BSCI, SEDEX
                            </td>
                        </tr>
                        <tr>
                            <th className="Product--Prop__Title">
                                Average Lead Time:
                            </th>
                            <td className="Prod--Prop">
                                Peak Season Lead Time: 1-3 months Off Season
                                Lead Time: 1-3 months
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div>
                <ReadMore>
                    Sky & Sea Optical MFY Co., Ltd. Was established in 2007,
                    founded to provide expertise in the fields of manufacturing,
                    distribution, and marketing of optical frames, Sunglasses
                    and Reading glasses. With years of experience in the optical
                    industry, Sky&Sea has developed a reliable international
                    group of suppliers, offering the most competitive high
                    quality frames available. With this background, Sky&Sea is
                    able to have a business philosophy that provides you with
                    the latest in Optical fashion, great value for money,
                    quality products and exceptional service. All staff takes
                    "based on virtue, unit and gathering strength, win-win
                    cooperation and flourishing in the world" as management
                    philosophy, persists in "true love-oriented,
                    demand-centered" as service idea and "seeking perfection and
                    conducting meticulously"as working style, carries out
                    "sincere cooperation, unit and work hard, innovation and to
                    be No. 1" as team idea to make every product in
                    good-quality, satisfying all customers with good service and
                    to develop the company into a modern enterprise with
                    professional, exquisite and competitive characteristics.
                    Integrity achieves great accomplishment, and innovation
                    creates future! We invite you to be part of the Sky&Sea
                    experience and sincerely hope that we can have a great time
                    during the cooperation! We would like to thank you for your
                    interest and custom. Should you require any further
                    information, please do not hesitate to contact us - we look
                    forward to hearring from you. View All
                </ReadMore>
            </div>
        </div>
    );
}

export default FirstLayoutChild;
