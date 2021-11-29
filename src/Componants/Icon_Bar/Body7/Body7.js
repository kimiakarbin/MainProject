import solutions_pic1 from '../../../Assets/Image/solutions_pic1.jpg';
import solutions_pic2 from '../../../Assets/Image/solutions_pic2.jpg';
import solutions_pic3 from '../../../Assets/Image/solutions_pic3.jpg';
import solutions_pic4 from '../../../Assets/Image/solutions_pic4.jpg';
import Apparel_Textile from '../../../Assets/Image/Apparel_Textile.jpg';
import Lights_Construction from '../../../Assets/Image/Lights_Construction.jpg';
import Agriculture_Raw_Materials from '../../../Assets/Image/Agriculture_Raw_Materials.jpg';
import { ArrowRightOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
const Body7 = () => {
    return (
        <div className="Body7">
            <div className="solution">
                <div>
                    <img className="w" src={solutions_pic1} alt="" />
                </div>
                <div className="ff">
                    <h1>Source From Industry Hubs</h1>
                    <p>
                        Manufacturing Base
                        <br />
                        Industry Competitiveness <br />
                        Original Products{' '}
                    </p>
                    {/* <ArrowRightOutlined className="Arrow--Icon" /> */}

                </div>
                <div className="hg">
                <div className="sd">
                    <img src={Apparel_Textile} alt="" className="ww" />
                    <p>
                        Apparel & <br/>Textile
                    </p>
                </div>
                <div className="sd"> 
                    <img src={Lights_Construction} alt="" className="ww" />
                    <p>
                        Lights & <br/>Constructions
                    </p>
                </div>
                <div className="sd"> 
                    <img src={Agriculture_Raw_Materials} alt="" className="ww" />
                    <p>
                        Agriculture & <br/>Raw ...
                    </p>
                </div>
                


                </div>
                
            </div>

            <div className="solution">
                <div>
                    <img className="w" src={solutions_pic2} alt="" />
                </div>
                <div className="ff">
                    <h1>MEI Awards-Winning Products</h1>
                    <p>
                        Manufacturing Excellence
                        <br />
                        Innovative Design <br />
                        Awarded by Industry Experts
                    </p>
                    {/* <ArrowRightOutlined className="Arrow--Icon" /> */}
                </div>
            </div>
            <div className="solution">
                <div>
                    <img className="w" src={solutions_pic3} alt="" />
                </div>
                <div className="ff">
                    <h1>Customize Your Products</h1>
                    <p>
                        Customize Logo/Size/Color
                        <br />
                        Make Your Own Design <br />
                        Sample Available
                    </p>
                    {/* <ArrowRightOutlined className="Arrow--Icon" /> */}
                </div>
            </div>
            <div className="solution">
                <div>
                    <img className="w" src={solutions_pic4} alt="" />
                </div>
                <div className="ff">
                    <h1>Smart Expo</h1>
                    <p>
                        Reliable China Supplier
                        <br />
                        Recommended at World's Famous Trade <br />
                        Shows
                    </p>
                    {/* <ArrowRightOutlined className="Arrow--Icon" /> */}
                </div>
            </div>
        </div>
    );
};

export default Body7;
