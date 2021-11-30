import { Button } from 'antd';
import 'antd/dist/antd.css';
import '../../../Assets/style.less';
import High_Quality_Hydraulic_Pump from '../../../Assets/Image/High_Quality_Hydraulic_Pump.webp';
import Hot_Sale  from '../../../Assets/Image/Hot_Sale.webp';
import New_Style  from '../../../Assets/Image/New_Style.webp';
import Wholesale_Office_School  from '../../../Assets/Image/Wholesale_Office_School.webp';
import Low_Price  from '../../../Assets/Image/Low_Price.webp';
const Body1_4 = () => {
    return (
        <div className="First--Body__Right--Container">
            <div className="First--Body__Right--Container__Item">
                <div className="Right--Container__Title">You Make Like</div>

                <div className="Right--Container__Items">
                    <img src={High_Quality_Hydraulic_Pump} alt="" width="80px" height="70px" />
                    <a class="Text--Item">
                        <div class="Type--Of__Products">Processing Machine</div>
                        <div class="Number--Of__Products">
                            1,161,000+ Products
                        </div>
                    </a>
                </div>

                <div className="Right--Container__Items">
                    <img src={New_Style} alt="" width="80px" height="70px" />
                    <a class="Text--Item">
                        <div class="Type--Of__Products">Robot Arm</div>
                        <div class="Number--Of__Products">41,000+ Products</div>
                    </a>
                </div>
                <div className="Right--Container__Items">
                    <img src={Hot_Sale} alt="" width="80px" height="70px" />
                    <a class="Text--Item">
                        <div class="Type--Of__Products">Packaging Machine</div>
                        <div class="Number--Of__Products">
                            1,286,000+ Products
                        </div>
                    </a>
                </div>

                <div className="Right--Container__Items">
                    <img src={Wholesale_Office_School} alt="" width="80px" height="70px" />
                    <a class="Text--Item">
                        <div class="Type--Of__Products">Faster</div>
                        <div class="Number--Of__Products">
                            400,000+ Products
                        </div>
                    </a>
                </div>

                <div className="Right--Container__Items">
                    <img src={Low_Price
                    } alt="" width="80px" height="70px" />
                    <a class="Text--Item">
                        <div class="Type--Of__Products">Hydraulic Pump</div>
                        <div class="Number--Of__Products">
                            286,000+ Products
                        </div>
                    </a>
                </div>
                <div className="Add--Products__Container">
                    <div className="Add--Products__Question">
                        No desirable Products?
                    </div>

                    <Button className="Add--Products__Button" danger>
                        Post Your Request Now!
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Body1_4;
