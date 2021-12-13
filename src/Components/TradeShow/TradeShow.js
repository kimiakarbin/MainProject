import { Steps, Button } from 'antd';
import Sourcing_and_Supply_Chain_Forum from '../../Assets/Image/Sourcing_and_Supply_Chain_Forum.webp';
import Automechanika_Dubai_2021 from '../../Assets/Image/Automechanika_Dubai_2021.webp';
import MECTECH_2021 from '../../Assets/Image/MECTECH_2021.webp';
import International_Electricity_Lighting_Expo2021 from '../../Assets/Image/International_Electricity_Lighting_Expo2021.webp';
import GGButton from '../../ReuseableComponents/GGButton/GGButton';
import clsx from 'clsx';

const TradeShow = () => {
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
                    <div className="Trade--Item__Main--Image__Description">
                        <GGButton
                            className="Trade--Item__Main--Image__Title"
                            value="Arab Health 2022"
                        />
                        <p
                            className={clsx(
                                'Trade--Item__text',
                                'Trade--Item__Main--Image__Text',
                            )}
                        >
                            Duration: jan 24-27 , 2022
                        </p>
                        <p
                            className={clsx(
                                'Trade--Item__text',
                                'Trade--Item__Main--Image__Text',
                            )}
                        >
                            Location: United Arab Emirates
                        </p>
                    </div>
                </div>

                <div className="Trade--Items">
                    <div className="Line"></div>
                    <div>
                        <div className="Trade--Item__Container">
                            <div className="circle"></div>
                            <div className="Trade--Item">
                                <img
                                    className="Trade--Item__Pic"
                                    src={Automechanika_Dubai_2021}
                                />

                                <div className="Trade--Item__Description">
                                    <GGButton
                                        value="Automechanika Dubai 2021"
                                        className={clsx(
                                            'BlackLink',
                                            'Trade--Item__Title',
                                        )}
                                    />
                                    <p className="Trade--Item__text">
                                        Duration: Dec 14 - 16, 2021
                                    </p>
                                    <p className="Trade--Item__text">
                                        Location: Dubai, United Arab Emirates
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="Trade--Item__Container">
                            <div className="circle"></div>
                            <div className="Trade--Item">
                                <img
                                    className="Trade--Item__Pic"
                                    src={Sourcing_and_Supply_Chain_Forum}
                                />
                                <div className="Trade--Item__Description">
                                    <GGButton
                                        value="2021 Sourcing and Supply Chain Forum"
                                        className={clsx(
                                            'BlackLink',
                                            'Trade--Item__Title',
                                        )}
                                    />
                                    <p className="Trade--Item__text">
                                        Duration: Dec 10 - 12, 2021
                                    </p>
                                    <p className="Trade--Item__text">
                                        Location: Shanghai, China
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="Trade--Item__Container">
                            <div className="circle"></div>
                            <div className="Trade--Item">
                                <img
                                    className="Trade--Item__Pic"
                                    src={MECTECH_2021}
                                />
                                <div className="Trade--Item__Description">
                                    <GGButton
                                        value="MECTECH 2021"
                                        className={clsx(
                                            'BlackLink',
                                            'Trade--Item__Title',
                                        )}
                                    />
                                    <p className="Trade--Item__text">
                                        Duration: Dec 9 - 12, 2021
                                    </p>
                                    <p className="Trade--Item__text">
                                        Location: Egypt
                                    </p>
                                </div>
                            </div>{' '}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TradeShow;
