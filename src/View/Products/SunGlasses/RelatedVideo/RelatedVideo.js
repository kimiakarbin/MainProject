import React from 'react';
import './Assets/Style.less';
import customnopic from './Assets/Video/customnopic.png';

function RelatedVideo() {
    return (
        <div className="Related--Video">
            <h2 class="Related--Video__Title">Watch Related Videos</h2>
            <div className="Related--videos">
                <div className="Vid--desc">
                    <div className="Rel--Vid">
                        <img src={customnopic} />
                    </div>
                    <div className="BlackLink">
                        What is Sun Glasses Custom Own Logo Women's Oversized
                    </div>
                </div>

                <div className="Vid--desc">
                    <div className="Rel--Vid">
                        <img src={customnopic} />
                    </div>
                    <div className="BlackLink">
                        What is Wenzhou Manufacture Newest Sunglasses (PS1408)
                    </div>
                </div>
                <div className="Vid--desc">
                    <div className="Rel--Vid">
                        <img src={customnopic} />
                    </div>
                    <div className="BlackLink">
                        What is High Quality UV400 Protected Lens Square Frame
                    </div>
                </div>
                <div className="Vid--desc">
                    <div className="Rel--Vid">
                        <img src={customnopic} />
                    </div>
                    <div className="BlackLink">
                        What is Classic Metal Sunglasses Polarized Lens
                    </div>
                </div>

                <div className="Vid--desc">
                    <div className="Rel--Vid">
                        <img src={customnopic} />
                    </div>
                    <div className="BlackLink">
                        What is New Aluminum Magnesium Polarized
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RelatedVideo;
