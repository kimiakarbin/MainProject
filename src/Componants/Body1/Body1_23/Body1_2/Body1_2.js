import { Carousel } from 'antd';
import img from '../../../img.JPG';

const Body1_2 = () => {
    return (
        <Carousel className="Body1_2" autoplay>
            <div>
                <img src={img} alt="" width="100%" height="350px" />
            </div>
            <div>
                <img src={img} alt="" width="100%" height="350px" />
            </div>
            <div>
                <img src={img} alt="" width="100%" height="350px" />
            </div>
            <div>
                <img src={img} alt="" width="100%" height="350px" />
            </div>
        </Carousel>
    );
};

export default Body1_2;
