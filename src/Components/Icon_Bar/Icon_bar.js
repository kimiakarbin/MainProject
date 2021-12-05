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
            <WechatOutlined className="Live--Chat__Icon" />
            <DownloadOutlined className="Download--Icon" />
            <BackTop className="Arrow--BackUp__Icon">
                <UpOutlined />
            </BackTop>
        </div>
    );
};

export default Icon_Bar;
