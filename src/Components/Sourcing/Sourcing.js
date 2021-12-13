import easysourcing from '../../Assets/Image/easysourcing.webp';
import { RightOutlined } from '@ant-design/icons';
import SourcingForm from './SourcingForm/SourcingForm';
import GGButton from '../../ReuseableComponents/GGButton/GGButton';
const Sourcing = () => {
    return (
        <div className="Sourcing">
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

                    <GGButton className="BlackLink" value="Learn More" />
                    <RightOutlined />
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
