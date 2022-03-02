import Arts_Crafts from './Assets/Image/Arts_Crafts.webp';
import Arts__Crafts from './Assets/Image/Arts__Crafts.webp';
import Wig from './Assets/Image/Wig.webp';
import Sunglasses from './Assets/Image/Sunglasses.webp';
import Medal from './Assets/Image/Medal.webp';
import Human_Hair from './Assets/Image/Human_Hair.webp';
import Door from './Assets/Image/Door.webp';
import Decoration_Materials from './Assets/Image/Decoration_Materials.webp';
import China_Building from './Assets/Image/China_Building.webp';
import Aluminum_Window from './Assets/Image/Aluminum_Window.webp';
import { Button } from 'antd';
import clsx from 'clsx';
import './Assets/Style.less';
import { Link } from 'react-router-dom';

const IndustryBooth = () => {
    const Picture = [
      {
        Picture: Sunglasses,
        Desc: "Sunglasses",
      },
      {
        Picture: Wig,
        Desc: "Wig",
      },
      {
        Picture: Medal,
        Desc: "Medal",
      },
      {
        Picture: Human_Hair,
        Desc: "Human Hair",
      },
      {
        Picture: Door,
        Desc: "Door",
      },
      {
        Picture: Decoration_Materials,
        Desc: "Decoration Materials",
      },
      {
        Picture: China_Building,
        Desc: "China Building",
      },
      {
        Picture: Aluminum_Window,
        Desc: "Aluminum Window",
      },
    ];
    return (
        <div className="Industry--Booth">
            <div className="Industry--Booth__Item">
                <img
                    className="Industry--Image__Background"
                    src={Arts_Crafts}
                    alt=""
                />
                <img
                    className="Industry--Image__Backgroundd"
                    src={Arts__Crafts}
                    alt=""
                    style={{ display: 'none' }}
                />
                <h2>Arts & Crafts</h2>
                <Button className="Source--Now__Button" type="primary">
                    Source Now
                </Button>
            </div>
            <div className="Industry--Products">
                {Picture.map((value) => (
                      
                     <div className={clsx('Industry--Products__Item', 'BlackLink')}>
                    <Link to="products">
                        <p>{value.Desc}</p>
                        <img
                            className="Industry--Products__Image"
                            src={value.Picture}
                            alt=""
                        />
                    </Link>
                </div>
                  
                
                ))};
            </div>
        </div>
    );
};

export default IndustryBooth;
