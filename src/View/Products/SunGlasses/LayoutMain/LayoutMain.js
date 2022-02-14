import React from 'react';
import { Tabs } from 'antd';
import './Assets/Style.less';
import FashionNewwDesigner from './Assets/Image/FashionNewwDesigner.webp';
import FashionNewDesigner from './Assets/Image/FashionNewDesigner.webp';
import FashionNewDesignerr from './Assets/Image/FashionNewDesignerr.webp';
import FashionNewDesignerS from './Assets/Image/FashionNewDesignerS.webp';
import FashionNewDesignerSunglasses from './Assets/Image/FashionNewDesignerSunglasses.webp';
import FashionnNewDesignerSunglasses from './Assets/Image/FashionnNewDesignerSunglasses.webp';
import FashionNewDesignerSunglas from './Assets/Image/FashionNewDesignerSunglas.webp';
import FashionNeewDesigner from './Assets/Image/FashionNeewDesigner.webp';
import FashionNewDesigneee from './Assets/Image/FashionNewDesigneee.webp';
import FFashionNewDesigner from './Assets/Image/FFashionNewDesigner.webp';
import fFashionNew from './Assets/Image/fFashionNew.webp';
import FirstLayoutChild from './LayoutChildern/FirstLayoutChild/FirstLayoutChild';
import { StickyContainer, Sticky } from 'react-sticky';

const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}
const renderTabBar = (props, DefaultTabBar) => (
    <Sticky bottomOffset={80}>
        {({ style }) => (
            <DefaultTabBar
                {...props}
                className="site-custom-tab-bar"
                style={{ ...style }}
            />
        )}
    </Sticky>
);
function LayoutMain() {
    return (
        <StickyContainer className="Layout--Main">
            <Tabs
                defaultActiveKey="1"
                onChange={callback}
                renderTabBar={renderTabBar}
            >
                <TabPane
                    className="Product--Description"
                    tab="Product Description"
                    key="1"
                >
                    <div className="Info--Title">Basic Info.</div>
                    <div className="Info--Tables">
                        <table className="Info--Table">
                            <tr className="Table--Tr">
                                <th className="Table--Th">Model NO.</th>
                                <td className="Table--Td">FCS9064</td>
                            </tr>
                            <tr className="Table--Tr">
                                <th className="Table--Th">Type</th>
                                <td className="Table--Td">
                                    Light-colored Sunglasses
                                </td>
                            </tr>
                            <tr className="Table--Tr">
                                <th className="Table--Th">Market</th>
                                <td className="Table--Td">CE Standard</td>
                            </tr>
                            <tr className="Table--Tr">
                                <th className="Table--Th">
                                    After Sales Service
                                </th>
                                <td className="Table--Td">1 Year</td>
                            </tr>
                            <tr className="Table--Tr">
                                <th className="Table--Th">Transport Package</th>
                                <td className="Table--Td">
                                    10PCS/Inner Box, 300PCS Per Export Carton
                                </td>
                            </tr>
                            <tr className="Table--Tr">
                                <th className="Table--Th">Trademark</th>
                                <td className="Table--Td">FC OPTICS</td>
                            </tr>
                            <tr className="Table--Tr">
                                <th className="Table--Th">HS Code</th>
                                <td className="Table--Td">90041000</td>
                            </tr>
                        </table>

                        <table className="Info--Table">
                            <tr className="Table--Tr">
                                <th className="Table--Th">Frame Color</th>
                                <td className="Table--Td">Silver</td>
                            </tr>
                            <tr className="Table--Tr">
                                <th className="Table--Th">Price</th>
                                <td className="Table--Td">Competitive</td>
                            </tr>
                            <tr className="Table--Tr">
                                <th className="Table--Th">Color</th>
                                <td className="Table--Td">Customized</td>
                            </tr>
                            <tr className="Table--Tr">
                                <th className="Table--Th">Specification</th>
                                <td className="Table--Td">CE, FDA</td>
                            </tr>
                            <tr className="Table--Tr">
                                <th className="Table--Th">Origin</th>
                                <td className="Table--Td">China</td>
                            </tr>
                            <tr className="Table--Tr">
                                <th className="Table--Th">
                                    Production Capacity
                                </th>
                                <td className="Table--Td">10, 0000pcs/month</td>
                            </tr>
                            <tr className="Table--Tr">
                                <th className="Table--Th">HS Code</th>
                                <td className="Table--Td">90041000</td>
                            </tr>
                        </table>
                    </div>
                    <div className="Info--Title">Product Description</div>

                    <div>
                        <table className="Main--Info__Table">
                            <tr className="Table--Description__Tr">
                                <th className="Table--Description__Th">Name</th>
                                <td className="Table--Description__Td">
                                    2019 Fashion new designer sunglasses for
                                    woman fashion square metal colorful
                                    sunglasses italy design low MOQ stock
                                </td>
                            </tr>
                            <tr className="Table--Description__Tr">
                                <th className="Table--Description__Th">
                                    Model
                                </th>
                                <td className="Table--Description__Td">
                                    AL1901
                                </td>
                            </tr>
                            <tr className="Table--Description__Tr">
                                <th className="Table--Description__Th">
                                    Material
                                </th>
                                <td className="Table--Description__Td">
                                    Metal
                                </td>
                            </tr>
                            <tr className="Table--Description__Tr">
                                <th className="Table--Description__Th">
                                    Hinge
                                </th>
                                <td className="Table--Description__Td">
                                    Metal
                                </td>
                            </tr>
                            <tr className="Table--Description__Tr">
                                <th className="Table--Description__Th">Moq</th>
                                <td className="Table--Description__Td">
                                    12PCS
                                </td>
                            </tr>
                            <tr className="Table--Description__Tr">
                                <th className="Table--Description__Th">
                                    Payment Terms
                                </th>
                                <td className="Table--Description__Td">
                                    T/T 30%deposit 70% balanced before shipping
                                </td>
                            </tr>
                        </table>
                        <div>
                            <img src={FashionNewwDesigner} />
                        </div>
                        <div>
                            <img src={FashionNewDesigner} />
                        </div>
                        <div>
                            <img src={FashionNewDesignerr} />
                        </div>
                        <div>
                            <img src={FashionNewDesignerS} />
                        </div>
                        <div>
                            <img src={FashionNewDesignerSunglasses} />
                        </div>
                        <div>
                            <img src={FashionnNewDesignerSunglasses} />
                        </div>
                        <div>
                            <img src={FashionNewDesignerSunglas} />
                        </div>
                        <div>
                            <img src={FashionNeewDesigner} />
                        </div>
                        <div>
                            <img src={FashionNewDesigneee} />
                        </div>
                        <div>
                            <img src={FFashionNewDesigner} />
                        </div>
                        <div>
                            <img src={fFashionNew} />
                        </div>
                        <div>
                            <p>What is the MOQ?</p>
                            <p>
                                ready goods:<strong>12PCS</strong>
                                <strong>/Color,</strong>
                                <strong>50PCS</strong>
                                <strong>/Style</strong>l
                            </p>
                            <p>
                                metal/acetate/TR90 for production order:600pcs
                            </p>
                            <p>PC/CP for production order:1200pcs</p>
                            <p>&nbsp;</p>
                            <p>
                                *Can I mix different acetate/metal/lens colors?
                            </p>
                            <p>Yes,it is depends on the existing stock.</p>
                            <p>&nbsp;</p>
                            <p>*Can I put on my own logo on it?</p>
                            <p>
                                Yes, custom logo can be made by pad
                                printing/Laser/screen printing or as your
                                request
                            </p>
                            <p>&nbsp;</p>
                            <p>*When do you ship my order?</p>
                            <p>
                                Normally&nbsp;7-10days after receiving your
                                payment, but it's according to your order
                                quantity.
                            </p>
                            <p>&nbsp;</p>
                            <p>
                                *How can you guarantee the production quality?
                            </p>
                            <p>
                                We have a strict quality control system in our
                                production process, We have QC to control the
                                quality one by one. So do not worry about the
                                quality. If there is any defective, we will take
                                care before shipment. If you receive any
                                defective because of the shipping , we will
                                solve the problem with you as well.Third part
                                inspection is acceptable.
                            </p>
                            <p>&nbsp;</p>
                            <p>*Do you accept OEM?</p>
                            <p>OEM is welcome.</p>
                            <p>&nbsp;</p>
                            <p>*whats your shipping cost.</p>
                            <p>
                                It depends on weight and quantity ,pls do tell
                                us your quantity and will quote accordingly.
                            </p>
                            <p>&nbsp;</p>
                            <p>*what's your packing ?</p>
                            <p>
                                1pc/opp bag;12pc/inner box;300pc/carton.or as
                                your request.
                            </p>
                            <p>&nbsp;</p>
                            <p>
                                What is the difference from wholesale,ODM,OEM
                                order?
                            </p>
                            <p>
                                We have 3 business style,the difference as
                                following.Welcome you to contact us,shall you
                                have some other doubts.
                            </p>
                            <div class="rich-text-table">
                                <table border="1" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p>
                                                    <strong>Order Type</strong>
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    <strong>Model Scale</strong>
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    <strong>MOQ</strong>
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    <strong>Brand Name</strong>
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    <strong>
                                                        Date of Delivery
                                                    </strong>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>
                                                    <strong>Wholesale</strong>
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    <strong>
                                                        Ready frames
                                                    </strong>
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    <strong>12PCS</strong>
                                                    <strong>
                                                        /Style&nbsp;
                                                    </strong>
                                                    <strong>50PCS</strong>
                                                    <strong>/Shipment</strong>
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    <strong>
                                                        Our Brand or No Brand
                                                    </strong>
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    <strong>
                                                        Within 7-10days after
                                                        payment transfered
                                                    </strong>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>
                                                    <strong>ODM</strong>
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    <strong>
                                                        Ready frames
                                                    </strong>
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    <strong>12PCS</strong>
                                                    <strong>/Color,</strong>
                                                    <strong>50PCS</strong>
                                                    <strong>/Style</strong>
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    <strong>
                                                        According to Customer
                                                        need
                                                    </strong>
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    <strong>
                                                        Within 15-20days after
                                                        deposit transfered
                                                    </strong>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>
                                                    <strong>OEM</strong>
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    <strong>
                                                        All styles/Our existing
                                                        mold styles
                                                    </strong>
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    <strong>
                                                        Acetate/TR90/Metal:600PCS/Style
                                                        with 3 colors;
                                                    </strong>
                                                </p>
                                                <p>
                                                    <strong>
                                                        Plastic:1200PCS/Style
                                                        with 3 colors
                                                    </strong>
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    <strong>
                                                        According to Customer
                                                        need
                                                    </strong>
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    <strong>
                                                        Within&nbsp;
                                                    </strong>
                                                    <strong>
                                                        50-100&nbsp;
                                                    </strong>
                                                    <strong>
                                                        after deposit transfered
                                                    </strong>
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                </TabPane>

                <TabPane tab="Company Info." key="2">
                    <StickyContainer>
                        <Tabs
                            defaultActiveKey="1"
                            onChange={callback}
                            renderTabBar={renderTabBar}
                        >
                            <TabPane tab=" Company Profile " key="1">
                                <FirstLayoutChild />
                            </TabPane>
                            <TabPane tab=" Trade Capacity " key="2">
                                Content of Tab Pane 2
                            </TabPane>
                            <TabPane tab=" Production Capacity " key="3">
                                Content of Tab Pane 3
                            </TabPane>
                            <TabPane tab=" Company Show " key="4">
                                Content of Tab Pane 4
                            </TabPane>
                        </Tabs>
                    </StickyContainer>
                </TabPane>
                <TabPane tab="Customer Question & Answer" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
        </StickyContainer>
    );
}

export default LayoutMain;
