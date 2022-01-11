import {
    PullRequestOutlined,
    WechatOutlined,
    DownloadOutlined,
    UpOutlined,
} from '@ant-design/icons';
import { BackTop } from 'antd';

const Icon_Bar = () => {
    return (
        <div className="Icon_Bar">
            <PullRequestOutlined className="Pull--Request__Icon" />
            <WechatOutlined className="Pull--Request__Icon" />
            <DownloadOutlined className="Pull--Request__Icon" />
            <BackTop className="Pull--Request__Icon">
                <UpOutlined />
            </BackTop>
        </div>
    );
};

export default Icon_Bar;
