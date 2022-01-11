import { Menu, Dropdown } from 'antd';
import GGButton from '../../ReuseableComponents/GGButton/GGButton';
import { DownOutlined } from '@ant-design/icons';
import clsx from 'clsx';
const FooterResponsive = () => {
    const DiscoverProducts = (
        <Menu>
            <Menu.Item>
                <GGButton
                    value="Industry Sites"
                    className={clsx('ssd', 'GrayLink')}
                />
            </Menu.Item>

            <Menu.Item>
                <GGButton
                    value="Regional Channels"
                    className={clsx('ssd', 'GrayLink')}
                />
            </Menu.Item>

            <Menu.Item>
                <GGButton
                    value="Special Channel"
                    className={clsx('ssd', 'GrayLink')}
                />
            </Menu.Item>

            <Menu.Item>
                <GGButton
                    value="Custom Products"
                    className={clsx('ssd', 'GrayLink')}
                />
            </Menu.Item>

            <Menu.Item>
                <GGButton
                    value="Video Show"
                    className={clsx('ssd', 'GrayLink')}
                />
            </Menu.Item>

            <Menu.Item>
                <GGButton
                    value="Online Trading"
                    className={clsx('ssd', 'GrayLink')}
                />
            </Menu.Item>
        </Menu>
    );

    const FeaturedService = (
        <Menu>
            <Menu.Item>
                <GGButton
                    value="Star Buyer"
                    className={clsx('ssd', 'GrayLink')}
                />
            </Menu.Item>

            <Menu.Item>
                <GGButton
                    value="Trade Resources"
                    className={clsx('ssd', 'GrayLink')}
                />
            </Menu.Item>

            <Menu.Item></Menu.Item>
        </Menu>
    );

    <GGButton value="Friendly Links" className={clsx('ssd', 'GrayLink')} />;
    const AboutUs = (
        <Menu>
            <Menu.Item>
                <GGButton
                    value="About Made-in-China.com"
                    className={clsx('ssd', 'GrayLink')}
                />
            </Menu.Item>

            <Menu.Item>
                <GGButton
                    value="Site Map"
                    className={clsx('ssd', 'GrayLink')}
                />
            </Menu.Item>

            <Menu.Item>
                <GGButton
                    value="Trademark"
                    className={clsx('ssd', 'GrayLink')}
                />
            </Menu.Item>

            <Menu.Item>
                <GGButton
                    value="Logistics Partners"
                    className={clsx('ssd', 'GrayLink')}
                />
            </Menu.Item>
        </Menu>
    );

    const Help = (
        <Menu>
            <Menu.Item>
                <GGButton value="FAQ" className={clsx('ssd', 'GrayLink')} />
            </Menu.Item>

            <Menu.Item>
                <GGButton
                    value="Contact Us"
                    className={clsx('ssd', 'GrayLink')}
                />
            </Menu.Item>

            <Menu.Item>
                <GGButton
                    value="加入高级会员"
                    className={clsx('ssd', 'GrayLink')}
                />
            </Menu.Item>

            <Menu.Item>
                <GGButton
                    value="Submit a Complaint"
                    className={clsx('ssd', 'GrayLink')}
                />
            </Menu.Item>
        </Menu>
    );
    return (
        <div className="Footer--Dropdown__List">
            <Dropdown className="Footer--Dropdown" overlay={DiscoverProducts}>
                <div className="BlackLink">
                    <GGButton className="BlackLink" value="Discover Products" />
                    <DownOutlined />
                </div>
            </Dropdown>

            <Dropdown className="Footer--Dropdown" overlay={FeaturedService}>
                <div className="BlackLink">
                    <GGButton className="BlackLink" value="Featured Service" />
                    <DownOutlined />
                </div>
            </Dropdown>

            <Dropdown className="Footer--Dropdown" overlay={AboutUs}>
                <div className="BlackLink">
                    <GGButton className="BlackLink" value="About Us" />
                    <DownOutlined />
                </div>
            </Dropdown>

            <Dropdown className="Footer--Dropdown" overlay={Help}>
                <div className="BlackLink">
                    <GGButton className="BlackLink" value="Help" />
                    <DownOutlined />
                </div>
            </Dropdown>
        </div>
    );
};
export default FooterResponsive;
