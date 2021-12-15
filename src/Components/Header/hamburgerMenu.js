import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';
import GGButton from '../../ReuseableComponents/GGButton/GGButton';
import { useMediaQuery } from 'react-responsive';
import { DeviceSize } from '../Responsive/Responsive';
const HamburgerMenu = () => {
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.laptop });
    const [open, setOpen] = useState(false);
    return (
        <div className="">
            {isMobile && (
                <div
                    open={open}
                    onClick={() => setOpen(!open)}
                    className="Hamburger--Button"
                >
                    {' '}
                    <MenuOutlined />
                    Menu
                </div>
            )}
            {open && isMobile && (
                <div className="Hamburger">
                    <div>Menu</div>
                    <br />
                    <div className="BlackLink">
                        <GGButton className="BlackLink" value="For Buyer" />
                    </div>
                    <div className="BlackLink">
                        <GGButton className="BlackLink" value="For Supplier" />
                    </div>
                    <div className="BlackLink">
                        <GGButton className="BlackLink" value="Get App" />
                    </div>
                    <div className="BlackLink">
                        <GGButton className="BlackLink" value="English" />
                    </div>{' '}
                </div>
            )}
        </div>
    );
};
export default HamburgerMenu;
