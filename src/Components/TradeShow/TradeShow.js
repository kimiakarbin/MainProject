import { Steps, Button } from 'antd';
import Sourcing_and_Supply_Chain_Forum from '../../Assets/Image/Sourcing_and_Supply_Chain_Forum.webp';
import Automechanika_Dubai_2021 from '../../Assets/Image/Automechanika_Dubai_2021.webp';
import MECTECH_2021 from '../../Assets/Image/MECTECH_2021.webp';
import International_Electricity_Lighting_Expo2021 from '../../Assets/Image/International_Electricity_Lighting_Expo2021.webp';
import GGButton from '../../ReuseableComponents/GGButton/GGButton';
import clsx from 'clsx';

const TradeShow = () => {
    const { Step } = Steps;
    return (
        <div className="Trade--Show">
            <div className="Trade--Header">
                <div className="Trade--Header__Title">
                    <GGButton
                        className={clsx('Trade--Title', 'BlackLink')}
                        value="Trade Shows"
                    />

                    <p>
                        List of the trade shows Made-In-China.com will take part
                        in.
                    </p>
                </div>
                <Button className="Trade--More__Button" type="primary">
                    View More
                </Button>
            </div>
            <div className="Trade--Body">
                <div className="Trade--Main__Pic">
                    <img
                        className="Trade--Body__Image"
                        src={International_Electricity_Lighting_Expo2021}
                    />
                    {/* <Steps className="Trade--Body__Steps" direction="vertical">
                    <Step> dfndmn</Step>
                    <Step title="" description="This is a description."></Step>
                    <Step title="Step 3" description="This is a description." />
                </Steps> */}
                </div>
                <div className="Trade--Items">
                    <div className="Trade--Item">
                        <img src={Automechanika_Dubai_2021} />

                        <div className="Trade--Item__Description">
                            <GGButton
                                value="Automechanika Dubai 2021"
                                className="BlackLink"
                            />
                            <p>Duration: Dec 14 - 16, 2021</p>
                            <p>Location: Dubai, United Arab Emirates</p>
                        </div>
                    </div>
                    <div>
                        <img src={Sourcing_and_Supply_Chain_Forum} />
                        <GGButton
                            value="2021 Sourcing and Supply Chain Forum"
                            className="BlackLink"
                        />
                        <h3></h3> <h3></h3>
                    </div>
                    <div>
                        <img src={MECTECH_2021} />
                        <GGButton value="MECTECH 2021" className="BlackLink" />
                        <h3></h3> <h3></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TradeShow;
