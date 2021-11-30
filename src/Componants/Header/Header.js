import { Menu, Dropdown, Input } from "antd";
import made_in_iran from "../../Assets/Image/made_in_iran.png";
import "antd/dist/antd.css";
import {
  MobileOutlined,
  DownOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const Header = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item icon={<DownOutlined />} disabled>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item disabled>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  );
  const { Search } = Input;

  return (
    <div className="Header">
      <div>
        <img className="Made_In_Iran" src={made_in_iran} alt="" />
        <div className="Header--Dropdown__Menu">
          <Dropdown className="Header--Dropdown" overlay={menu}>
            <a onClick={(e) => e.preventDefault()}>
              For Buyer <DownOutlined />
            </a>
          </Dropdown>

          <Dropdown className="Header--Dropdown" overlay={menu}>
            <a onClick={(e) => e.preventDefault()}>
              For Supplier
              <DownOutlined />
            </a>
          </Dropdown>

          <Dropdown className="Header--Dropdown" overlay={menu}>
            <a onClick={(e) => e.preventDefault()}>
              <MobileOutlined /> Get App <DownOutlined />
            </a>
          </Dropdown>

          <Dropdown className="Header--Dropdown" overlay={menu}>
            <a onClick={(e) => e.preventDefault()}>
              English <DownOutlined />
            </a>
          </Dropdown>
        </div>
        <div className="Header--Search__Tab">
          <span className="Search--Tab__Item">Products</span>
          <span className="Search--Tab__Item">Supplier</span>
          <span className="Search--Tab__Item">Sourcing Requests</span>
        </div>
        <div className="Header--Search__Box">
          <Search
            className="Search--Box"
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
          />
          <div className="Header--Button__Container">
            <div className="Sign--Container">
              <UserOutlined style={{ fontSize: "32px" }} />
              <div className="Sign--Join__Button">
                <span className="Sign--Button">Sign In</span>
                <br />
                <span className="Join--Button">Join free</span>
              </div>
            </div>

            <div>
              <ShoppingCartOutlined style={{ fontSize: "32px" }} />
              <div className="Inquiry--Button">Inquiry Basket</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
