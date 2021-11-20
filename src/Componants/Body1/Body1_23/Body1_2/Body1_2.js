import react from 'react';
import { Carousel } from 'antd';

const Body1_2 = () => {
    const contentStyle = {
        height: '350px',
        color: '#fff',
        lineHeight: '250px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
        <Carousel className="Body1_2" autoplay>
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    );
};

export default Body1_2;
