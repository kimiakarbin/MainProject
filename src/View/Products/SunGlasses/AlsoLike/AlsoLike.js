import React from 'react';
import './Assets/Style.less';
import BVWoman from './Assets/Image/BVWoman.webp';
import BVMan from './Assets/Image/BVMan.webp';
import clsx from 'clsx';

function AlsoLike() {
    const Picture = [
        {
            Picture: BVWoman,
            Desc: 'BV Fashion Design Round Frame Cat Eye',
            Price: 'US $3-8',
        },
        {
            Picture: BVMan,
            Desc: 'BV New Custom Metal Double Bridge',
            Price: 'US $3-13.2',
        },
    ];
    return (
        <div className="Also--Like">
            <h2>You Might Also Like</h2>
            <div className="Same--Prod">
                {Picture.map((value) => (
                    <div className="Pic--Desc">
                        <div className="Same--Prod__Pic">
                            <img className="Avatar" src={value.Picture} />
                        </div>
                        <div>
                            <div
                                className={clsx(
                                    'Same--Prod__desc',
                                    'BlackLink',
                                )}
                            >
                                {value.Desc}
                            </div>
                            <div className="Piece--Prod">
                                <div className="Price--Prod">{value.Price}</div>
                                / Piece
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AlsoLike;
