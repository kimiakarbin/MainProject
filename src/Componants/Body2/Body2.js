import react from 'react';
import img from '../img.JPG';
const Body2 = () => {
    return (
        <div className="Body2">
            <h2>Selected Trending Products</h2>
            <div className="Body2_image1">
                <div className="sss">
                    <img className="image1" src={img} alt="" />
                    <p className="image-text">Rotary Pump</p>
                </div>
                <div className="sss">
                    <img className="image1" src={img} alt="" />
                    <p className="image-text">Construction machinery</p>
                </div>
                <div className="sss">
                    <img className="image1" src={img} alt="" />
                    <p className="image-text">PVC Floor</p>
                </div>
                <div className="sss">
                    <img className="image1" src={img} alt="" />
                    <p className="image-text">Paper Bag Making Machine</p>
                </div>
                <div className="sss">
                    <img className="image1" src={img} alt="" />
                    <p className="image-text">Chainsaw And Parts</p>
                </div>
                <div className="sss">
                    <img className="image1" src={img} alt="" />
                    <p className="image-text">Plastic Bottles</p>
                </div>
            </div>
            <div className="Body2_image2">
                <div className="sss">
                    <img className="image1" src={img} alt="" />
                    <p className="image-text">Bearing</p>
                </div>
                <div className="sss">
                    <img className="image1" src={img} alt="" />
                    <p className="image-text">Decoration & Construction</p>
                </div>
                <div className="sss">
                    <img className="image1" src={img} alt="" />
                    <p className="image-text">Lighting Decoration</p>
                </div>
                <div className="sss">
                    <img className="image1" src={img} alt="" />
                    <p className="image-text">Fastener</p>
                </div>
                <div className="sss">
                    <img className="image1" src={img} alt="" />
                    <p className="image-text">Fitness Equipment</p>
                </div>
                <div className="sss">
                    <img className="image1" src={img} alt="" />
                    <p className="image-text">Selected Supplier</p>
                </div>
            </div>
        </div>
    );
};

export default Body2;
