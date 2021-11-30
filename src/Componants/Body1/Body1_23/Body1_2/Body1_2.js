import { Carousel } from 'antd';
import banner990X400 from '../../../../Assets/Image/banner990X400.png';
import banner990X4001 from '../../../../Assets/Image/banner990X4001.png';
import banner990X4003 from '../../../../Assets/Image/banner990X4003.jpg';
import banner990X4002 from '../../../../Assets/Image/banner990X4002.jpg';



const Body1_2 = () => {
    return (
        <Carousel className="Body1_2" autoplay>
            <div>
                <img src={banner990X400} alt="" width="100%" height="350px" />
            </div>
            <div>
                <img src={banner990X4001 } alt="" width="100%" height="350px" />
            </div>
            <div>
                <img src={banner990X4003} alt="" width="100%" height="350px" />
            </div>
            <div>
                <img src={banner990X4002} alt="" width="100%" height="350px" />
            </div>
        </Carousel>
    );
};

export default Body1_2;
