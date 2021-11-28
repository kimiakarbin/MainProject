import { BackTop } from 'antd';
import easysourcing from '../../Assets/Image/easysourcing.jpg';
import { RightOutlined } from '@ant-design/icons';
import Input from './Input/Input';
const Body6 = () => {
    return (
        <div className="Body6">
            <div>
                <img className="aaa" src={easysourcing} alt="" />
            </div>
            <div className="bbb">
                <div>
                    <h1>EASY SOURCING</h1>
                    <p>
                        An easy way to post your sourcing requests and get
                        quotes.
                    </p>
                    <p>
                        One request, multiple quotes
                        <br /> Verified suppliers matching
                        <br />
                        Quotes comparison and sample request
                    </p>
                    <br />
                    <br />
                    <span>
                        Learn More
                        <RightOutlined />
                    </span>
                </div>
                <div className="ccc">
                    <h2>Want to get quotations?</h2>
                    <Input />
                </div>
            </div>
        </div>
    );
};

export default Body6;
