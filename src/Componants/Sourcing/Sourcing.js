import { BackTop } from 'antd';
import easysourcing from '../../Assets/Image/easysourcing.jpg';
import { RightOutlined } from '@ant-design/icons';
import SourcingForm from './SourcingForm/SourcingForm';
const Sourcing = () => {
    return (
        <div className="ُSouring">
            <div>
                <img className="Sourcing--Theme" src={easysourcing} alt="" />
            </div>
            <div className="Sourcing--Text">
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
                <div className="Sourcing--Form">
                    <h2>Want to get quotations?</h2>
                    <SourcingForm />
                </div>
            </div>
        </div>
    );
};

export default Sourcing;
