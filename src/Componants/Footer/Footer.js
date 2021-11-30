import {
  AppleOutlined,
  AndroidOutlined,
  MessageOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

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
          <div className="w2"></div>
          <h3>co-brands</h3>
          <div className="w1"></div>
          <div className="w1"></div>
          <div className="w1"></div>
        </div>
      </div>
      <hr />
      <div className="op">
        <div className="fp">
          <div className="opo">Free App :</div>
          <div className="oop">
            <AppleOutlined />
            App Store
          </div>
          <div className="ooop">
            <AndroidOutlined />
            Google Play
          </div>
        </div>
        <div>
          TradeMessenger : <MessageOutlined className="ppo" />
        </div>
        <div className="lk">
          Follow Us :
          <div className="fhj">
            <FacebookOutlined />
            <TwitterOutlined /> <InstagramOutlined />
            <YoutubeOutlined />
            <LinkedinOutlined />
          </div>
        </div>
      </div>
      <hr />
      <div className="df">
        <div className="ce">Hot Products </div>|
        <div className="ce"> China Products </div>|
        <div className="ce"> China Manufacturers/Suppliers </div>|
        <div className="ce"> Wholesale Products </div>|
        <div className="ce"> Wholesale Price </div>|
        <div className="ce"> Continent Channel </div>|
        <div className="ce"> Product Index</div>
      </div>
      <div className="df">
        Focus Technology:<div className="ce"> Made-in-China.com </div>
        <div className="ce"> m.Made-in-China.com</div>
        <div className="ce">cn.Made-in-China.com </div>
        <div className="ce"> ttnet.net </div>
        <div className="ce">tw.ttnet.net</div>
      </div>
      <div className="cf">
        Copyright © 1998-2021
        <div className="ce"> Focus Technology Co., Ltd.</div> All Rights
        Reserved. <div className="ce"> Terms & Conditions</div>
        <div className="ce"> Declaration </div>
        <div className="ce">Privacy Policy</div>
      </div>
    </div>
  );
};

export default Footer;
