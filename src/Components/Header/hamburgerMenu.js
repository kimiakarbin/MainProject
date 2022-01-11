import { MenuOutlined } from '@ant-design/icons';
// import { useState } from 'react';
import GGButton from '../../ReuseableComponents/GGButton/GGButton';
// import { useMediaQuery } from 'react-responsive';
// import { DeviceSize } from '../Responsive/Responsive';
// const HamburgerMenu = () => {
//     const isMobile = useMediaQuery({ maxWidth: DeviceSize.laptop });
//     const [open, setOpen] = useState(false);
//     return (
//         <div className="">
//             {isMobile && (
//                 <div
//                     open={open}
//                     onClick={() => setOpen(!open)}
//                     className="Hamburger--Button"
//                 >
//                     {' '}
//                     <MenuOutlined />
//                     Menu
//                 </div>
//             )}
//             {open && isMobile && (
//                 <div className="Hamburger">
//                     <div>Menu</div>
//                     <br />
//                     <div className="BlackLink">
//                         <GGButton className="BlackLink" value="For Buyer" />
//                     </div>
//                     <div className="BlackLink">
//                         <GGButton className="BlackLink" value="For Supplier" />
//                     </div>
//                     <div className="BlackLink">
//                         <GGButton className="BlackLink" value="Get App" />
//                     </div>
//                     <div className="BlackLink">
//                         <GGButton className="BlackLink" value="English" />
//                     </div>{' '}
//                 </div>
//             )}
//         </div>
//     );
// };
// export default HamburgerMenu;

import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import clsx from 'clsx';

const HamburgerMenu = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <div className="Menu--Item" type="primary" onClick={showDrawer}>
                <MenuOutlined /> Menu
            </div>

            <Drawer
                title="Menu"
                placement="left"
                onClose={onClose}
                visible={visible}
            >
                <div className="Menu--Button">
                    <Button type="primary">Sign In</Button>
                    <Button type="primary" className="Join--Button">
                        Join Free
                    </Button>
                </div>
                <div>
                    <div className={clsx('BlackLink', 'hh')}>
                        <GGButton
                            className={clsx('BlackLink', 'h')}
                            value="For Buyer"
                        />
                    </div>

                    <div className={clsx('BlackLink', 'hh')}>
                        <GGButton
                            className={clsx('BlackLink', 'h')}
                            value="For Supplier"
                        />
                    </div>
                    <div className={clsx('BlackLink', 'hh')}>
                        <GGButton
                            className={clsx('BlackLink', 'h')}
                            value="Get App"
                        />
                    </div>
                    <div className={clsx('BlackLink', 'hh')}>
                        <GGButton
                            className={clsx('BlackLink', 'h')}
                            value="English"
                        />
                    </div>
                </div>
            </Drawer>
        </>
    );
};
export default HamburgerMenu;
