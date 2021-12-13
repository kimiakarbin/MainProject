import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';
const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="Hmaburger" open={open} onClick={() => setOpen(!open)}>
            <MenuOutlined />
        </div>
    );
};
export default HamburgerMenu;
