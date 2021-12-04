import img from '../img.JPG';
const IndustryBooth = () => {
    return (
        <div className="Industry--Booth">
            <div>
                <img className="Industry--Image__Background" src={img} alt="" />
            </div>

            <div className="Industry--Products">
                <img className="Industry--Products__Image" src={img} alt="" />
                <img className="Industry--Products__Image" src={img} alt="" />
                <img className="Industry--Products__Image" src={img} alt="" />
                <img className="Industry--Products__Image" src={img} alt="" />
                <img className="Industry--Products__Image" src={img} alt="" />
                <img className="Industry--Products__Image" src={img} alt="" />
                <img className="Industry--Products__Image" src={img} alt="" />
                <img className="Industry--Products__Image" src={img} alt="" />
            </div>
        </div>
    );
};

export default IndustryBooth;
