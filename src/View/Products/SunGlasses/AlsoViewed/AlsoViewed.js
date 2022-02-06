import React from 'react';
import './Assets/Style.less';
import ItalyFashion from './Assets/Image/ItalyFashion.webp';
import ItalyyFashion from './Assets/Image/ItalyyFashion.webp';
import Promotional from './Assets/Image/Promotional.webp';
import QualitySquare from './Assets/Image/QualitySquare.webp';
import SmallRimlessSunGlasses from './Assets/Image/SmallRimlessSunGlasses.webp';

function AlsoViewed() {
    return (
        <div className="Also--Viewed">
            <h2 class="Also--Viewed__Title">
                People who viewed this also viewed
            </h2>
            <div className="Also--Pictures">
                <div className="Pic--desc">
                    <div className="Also--Picture">
                        <img src={ItalyFashion} />
                    </div>
                    <div className="BlackLink">
                        Italy Fashion Classical Hot Sale Ready Goods High
                        Quality
                    </div>
                    <div className="Price--Per__Piece">
                        <div className="Sunglasses--Price">US $1.95-2.5</div>
                        <div className="Sunglasses--Piece">/ Piece</div>
                    </div>
                </div>

                <div className="Pic--desc">
                    <div className="Also--Picture">
                        <img src={ItalyyFashion} />
                    </div>
                    <div className="BlackLink">
                        Small Rimless Sun Glasses Square Eyewear Women
                    </div>
                    <div className="Price--Per__Piece">
                        <div className="Sunglasses--Price">US $2.1-2.8</div>
                        <div className="Sunglasses--Piece">/ Piece</div>
                    </div>
                </div>
                <div className="Pic--desc">
                    <div className="Also--Picture">
                        <img src={Promotional} />
                    </div>
                    <div className="BlackLink">
                        Italy Fashion Classical Hot Sale Ready Goods High
                        Quality
                    </div>
                    <div className="Price--Per__Piece">
                        <div className="Sunglasses--Price">US $1.95-2.5 </div>
                        <div className="Sunglasses--Piece">/ Piece</div>
                    </div>
                </div>
                <div className="Pic--desc">
                    <div className="Also--Picture">
                        <img src={QualitySquare} />
                    </div>
                    <div className="BlackLink">
                        Promotional Tr90 Frame Magnetic Clip on Sunglasses
                    </div>
                    <div className="Price--Per__Piece">
                        <div className="Sunglasses--Price">US $3.5-4</div>
                        <div className="Sunglasses--Piece">/ Piece</div>
                    </div>
                </div>

                <div className="Pic--desc">
                    <div className="Also--Picture">
                        <img src={SmallRimlessSunGlasses} />
                    </div>
                    <div className="BlackLink">
                        Italy Fashion Classical Hot Sale Ready Goods High
                        Quality
                    </div>
                    <div className="Price--Per__Piece">
                        <div className="Sunglasses--Price">US $2.1-2.6</div>
                        <div className="Sunglasses--Piece">/ Piece</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AlsoViewed;
