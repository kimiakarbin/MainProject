import react from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import '../../../../Assets/style.less';

const Body1_2 = () => {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',}
  
    return (
        <div className="Body1_2" >
            <Carousel autoplay>
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
      </Carousel> </div> 
    );
};

export default Body1_2;


