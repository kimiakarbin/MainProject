import { Steps, Button } from 'antd';
import International_Sourcing_and_Supply_Chain_Forum from '../../Assets/Image/International_Sourcing_and_Supply_Chain_Forum.webp';

const TradeShow = () => {
    const { Step } = Steps;
    return (
        <div className="Trade--Show">
            <div className="Trade--Header">
                <div>
                    <h1>Trade Shows</h1>
                    <h3>
                        List of the trade shows Made-In-China.com will take part
                        in.
                    </h3>
                </div>
                <Button className="Trade--More__Button" type="primary">
                    View More
                </Button>
            </div>
            <div className="Trade--Body">
                <img
                    className="Trade--Body__Image"
                    src={International_Sourcing_and_Supply_Chain_Forum}
                />
                <Steps className="Trade--Body__Steps" direction="vertical">
                    <Step> dfndmn</Step>
                    <Step title="" description="This is a description."></Step>
                    <Step title="Step 3" description="This is a description." />
                </Steps>
            </div>
        </div>
    );
};

export default TradeShow;
