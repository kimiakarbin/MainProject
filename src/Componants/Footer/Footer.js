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

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer--Links">
                <div>
                    <div className="Footer--Links__Groups">
                        <h3>Discover Products & Suppliers</h3>
                        <h4>Industry Sites</h4>
                        <h4>Regional Channels</h4>
                        <h4>Special Channel</h4>
                        <h4>Custom Products</h4>
                        <h4>Video Show</h4>
                        <h4>Online Trading</h4>
                    </div>
                    <div className="Footer--Links__Groups">
                        <h3>Featured Service</h3>
                        <h4>Star Buyer</h4>
                        <h4>Trade Resources</h4>
                        <h4>Logistics Partners</h4>
                    </div>
                </div>
                <div>
                    <div className="Footer--Links__Groups">
                        <h3>About Us</h3>
                        <h4>About Made-in-China.com</h4>
                        <h4>Site Map</h4>
                        <h4>Trademark</h4>
                        <h4>Friendly Links</h4>
                    </div>
                    <div className="Footer--Links__Groups">
                        <h3>Help</h3> <h4>FAQ</h4>
                        <h4>Contact Us</h4>
                        <h4>加入高级会员</h4>
                        <h4>Submit a Complaint</h4>
                    </div>
                </div>
                <div className="Footer--Links__Groups">
                    <h3>Language Options</h3>
                    <h4>Español</h4>
                    <h4>Português</h4>
                    <h4>Français</h4>
                    <h4>Русский язык</h4>
                    <h4>Italiano</h4>
                    <h4>Deutsch</h4>
                    <h4>Nederlands</h4>
                    <h4>العربية</h4>
                    <h4>한국어</h4>
                    <h4>日本語</h4>
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
                        <FacebookOutlined />
                        <TwitterOutlined />
                        <InstagramOutlined />
                        <YoutubeOutlined />
                        <LinkedinOutlined />
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
