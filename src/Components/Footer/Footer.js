import GGButton from '../../ReuseableComponents/GGButton/GGButton';
import clsx from 'clsx';
import {
    AppleOutlined,
    AndroidOutlined,
    MessageOutlined,
    FacebookOutlined,
    TwitterOutlined,
    InstagramOutlined,
    YoutubeOutlined,
    LinkedinOutlined,
} from '@ant-design/icons';
import './Assets/Style.less';
import FooterResponsive from './FooterResponsive';

const Footer = () => {
    return (
        <div className="Footer">
            <FooterResponsive />
            <div className="Footer--Links">
                <div>
                    <div className="Footer--Links__Groups">
                        <p>Discover Products & Suppliers</p>
                        <GGButton
                            value="Industry Sites"
                            className={clsx('ssd', 'GrayLink')}
                        />
                        <GGButton
                            value="Regional Channels"
                            className={clsx('ssd', 'GrayLink')}
                        />
                        <GGButton
                            value="Special Channel"
                            className={clsx('ssd', 'GrayLink')}
                        />

                        <GGButton
                            value="Custom Products"
                            className={clsx('ssd', 'GrayLink')}
                        />

                        <GGButton
                            value="Video Show"
                            className={clsx('ssd', 'GrayLink')}
                        />

                        <GGButton
                            value="Online Trading"
                            className={clsx('ssd', 'GrayLink')}
                        />
                    </div>
                    <div className="Footer--Links__Groups">
                        <p>Featured Service</p>
                        <GGButton
                            value="Star Buyer"
                            className={clsx('ssd', 'GrayLink')}
                        />

                        <GGButton
                            value="Trade Resources"
                            className={clsx('ssd', 'GrayLink')}
                        />

                        <GGButton
                            value="Logistics Partners"
                            className={clsx('ssd', 'GrayLink')}
                        />
                    </div>
                </div>
                <div>
                    <div className="Footer--Links__Groups">
                        <p>About Us</p>
                        <GGButton
                            value="About Made-in-China.com"
                            className={clsx('ssd', 'GrayLink')}
                        />

                        <GGButton
                            value="Site Map"
                            className={clsx('ssd', 'GrayLink')}
                        />

                        <GGButton
                            value="Trademark"
                            className={clsx('ssd', 'GrayLink')}
                        />

                        <GGButton
                            value="Friendly Links"
                            className={clsx('ssd', 'GrayLink')}
                        />
                    </div>
                    <div className="Footer--Links__Groups">
                        <p>Help</p>
                        <GGButton
                            value="FAQ"
                            className={clsx('ssd', 'GrayLink')}
                        />
                        <GGButton
                            value="Contact Us"
                            className={clsx('ssd', 'GrayLink')}
                        />

                        <GGButton
                            value="加入高级会员"
                            className={clsx('ssd', 'GrayLink')}
                        />

                        <GGButton
                            value="Submit a Complaint"
                            className={clsx('ssd', 'GrayLink')}
                        />
                    </div>
                </div>
                <div className="Footer--Links__Groups">
                    <p>Language Options</p>
                    <GGButton
                        value="Español"
                        className={clsx('ssd', 'GrayLink')}
                    />
                    <GGButton
                        value="Português"
                        className={clsx('ssd', 'GrayLink')}
                    />

                    <GGButton
                        value="Français"
                        className={clsx('ssd', 'GrayLink')}
                    />

                    <GGButton
                        value="Русский язык"
                        className={clsx('ssd', 'GrayLink')}
                    />

                    <GGButton
                        value="Italiano"
                        className={clsx('ssd', 'GrayLink')}
                    />

                    <GGButton
                        value="Deutsch"
                        className={clsx('ssd', 'GrayLink')}
                    />

                    <GGButton
                        value="Nederlands"
                        className={clsx('ssd', 'GrayLink')}
                    />

                    <GGButton
                        value="العربية"
                        className={clsx('ssd', 'GrayLink')}
                    />

                    <GGButton
                        value="한국어"
                        className={clsx('ssd', 'GrayLink')}
                    />

                    <GGButton
                        value="日本語"
                        className={clsx('ssd', 'GrayLink')}
                    />
                </div>
                <div className="Footer--Links__col">
                    <div className="Product--Alert"></div>
                    <h3>co-brands</h3>
                    <div className="Footer--Links__Items"></div>
                    <div className="Footer--Links__Items"></div>
                    <div className="Footer--Links__Items"></div>
                </div>
            </div>
            <hr />
            <div className="Footer--Soft__Social--Media">
                <div className="Footer--App">
                    <div className="Footer--App__Title">Free App :</div>
                    <div className="App--Store__Link">
                        <AppleOutlined />
                        App Store
                    </div>
                    <div className="Google--Play__Link">
                        <AndroidOutlined />
                        Google Play
                    </div>
                </div>
                <div>
                    TradeMessenger :{' '}
                    <MessageOutlined className="Soft--Social__Icon" />
                </div>
                <div className="Footer--Social">
                    Follow Us :
                    <div className="Footer--Social__Icon">
                        <FacebookOutlined className="Facebook--Icon" />
                        <TwitterOutlined className="Twitter--Icon" />
                        <InstagramOutlined className="Instagram--Icon" />
                        <YoutubeOutlined className="Youtube--Icon" />
                        <LinkedinOutlined className="Linkedin--Icon" />
                    </div>
                </div>
            </div>
            <hr />
            <div className="Footer--Simple__Links--Group">
                <div className="Simple__Links--Group__Item">Hot Products </div>|
                <div className="Simple__Links--Group__Item">China Products</div>
                |
                <div className="Simple__Links--Group__Item">
                    China Manufacturers/Suppliers
                </div>
                |
                <div className="Simple__Links--Group__Item">
                    Wholesale Products
                </div>
                |
                <div className="Simple__Links--Group__Item">
                    Wholesale Price
                </div>
                |
                <div className="Simple__Links--Group__Item">
                    Continent Channel
                </div>
                |
                <div className="Simple__Links--Group__Item"> Product Index</div>
            </div>
            <div className="Footer--Simple__Links--Group">
                Focus Technology:
                <div className="Simple__Links--Group__Item">
                    Made-in-China.com
                </div>
                <div className="Simple__Links--Group__Item">
                    m.Made-in-China.com
                </div>
                <div className="Simple__Links--Group__Item">
                    cn.Made-in-China.com
                </div>
                <div className="Simple__Links--Group__Item"> ttnet.net </div>
                <div className="Simple__Links--Group__Item">tw.ttnet.net</div>
            </div>
            <div className="Footer--Simple__Links--Groups">
                Copyright © 1998-2021
                <div className="Simple__Links--Group__Item">
                    Focus Technology Co., Ltd.
                </div>
                All Rights Reserved.
                <div className="Simple__Links--Group__Item">
                    Terms & Conditions
                </div>
                <div className="Simple__Links--Group__Item"> Declaration </div>
                <div className="Simple__Links--Group__Item">Privacy Policy</div>
            </div>
        </div>
    );
};

export default Footer;
