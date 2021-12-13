import solutions_pic1 from '../../Assets/Image/solutions_pic1.webp';
import solutions_pic2 from '../../Assets/Image/solutions_pic2.webp';
import solutions_pic3 from '../../Assets/Image/solutions_pic3.webp';
import solutions_pic4 from '../../Assets/Image/solutions_pic4.webp';
import Apparel_Textile from '../../Assets/Image/Apparel_Textile.webp';
import Lights_Construction from '../../Assets/Image/Lights_Construction.webp';
import Agriculture_Raw_Materials from '../../Assets/Image/Agriculture_Raw_Materials.webp';
import construction_decoration from '../../Assets/Image/construction_decoration.webp';
import transportation from '../../Assets/Image/transportation.webp';
import security_protection from '../../Assets/Image/security_protection.webp';
import torch_flashlight from '../../Assets/Image/torch_flashlight.webp';
import umbrella from '../../Assets/Image/umbrella.webp';
import mug from '../../Assets/Image/mug.webp';
import advance_1637732192000 from '../../Assets/Image/advance_1637732192000.webp';
import advance_1637732217000 from '../../Assets/Image/advance_1637732217000.webp';
import advance_1637732257000 from '../../Assets/Image/advance_1637732257000.webp';
import 'antd/dist/antd.css';

const Solution = () => {
    return (
        <div className="Solutions">
            <h2>Sourcing Solutions & Tailored Services</h2>
            <div className="Solution--List">
                <div className="Solution--Item">
                    <div>
                        <img
                            className="Solution--Banner"
                            src={solutions_pic1}
                            alt=""
                        />
                    </div>
                    <div className="Solution--Link">
                        <h1>Source From Industry Hubs</h1>
                        <p>
                            Manufacturing Base
                            <br />
                            Industry Competitiveness <br />
                            Original Products{' '}
                        </p>
                    </div>
                    <div className="Solution--Prods">
                        <div className="BlackLink">
                            <img
                                src={Apparel_Textile}
                                alt=""
                                className="Prods--Pic"
                            />
                            <p>
                                Apparel & <br />
                                Textile
                            </p>
                        </div>
                        <div className="BlackLink">
                            <img
                                src={Lights_Construction}
                                alt=""
                                className="Prods--Pic"
                            />
                            <p>
                                Lights & <br />
                                Constructions
                            </p>
                        </div>
                        <div className="BlackLink">
                            <img
                                src={Agriculture_Raw_Materials}
                                alt=""
                                className="Prods--Pic"
                            />
                            <p>
                                Agriculture & <br />
                                Raw ...
                            </p>
                        </div>
                    </div>
                </div>
                <div className="Solution--Item">
                    <div>
                        <img
                            className="Solution--Banner"
                            src={solutions_pic2}
                            alt=""
                        />
                    </div>
                    <div className="Solution--Link">
                        <h1>MEI Awards-Winning Products</h1>
                        <p>
                            Manufacturing Excellence
                            <br />
                            Innovative Design <br />
                            Awarded by Industry Experts
                        </p>
                    </div>
                    <div className="Solution--Prods">
                        <div className="BlackLink">
                            <img
                                src={torch_flashlight}
                                alt=""
                                className="Prods--Pic"
                            />
                            <p>
                                Constructions <br /> & Decoration
                            </p>
                        </div>
                        <div className="BlackLink">
                            <img src={umbrella} alt="" className="Prods--Pic" />
                            <p>Transportation</p>
                        </div>
                        <div className="BlackLink">
                            <img src={mug} alt="" className="Prods--Pic" />
                            <p>
                                Security & <br />
                                Protection
                            </p>
                        </div>
                    </div>
                </div>
                <div className="Solution--Item">
                    <div>
                        <img
                            className="Solution--Banner"
                            src={solutions_pic3}
                            alt=""
                        />
                    </div>
                    <div className="Solution--Link">
                        <h1>Customize Your Products</h1>
                        <p>
                            Customize Logo/Size/Color
                            <br />
                            Make Your Own Design <br />
                            Sample Available
                        </p>
                    </div>
                    <div className="Solution--Prods">
                        <div className="BlackLink">
                            <img
                                src={construction_decoration}
                                alt=""
                                className="Prods--Pic"
                            />
                            <p>
                                Constructions <br /> & Decoration
                            </p>
                        </div>
                        <div className="BlackLink">
                            <img
                                src={transportation}
                                alt=""
                                className="Prods--Pic"
                            />
                            <p>Transportation</p>
                        </div>
                        <div className="BlackLink">
                            <img
                                src={security_protection}
                                alt=""
                                className="Prods--Pic"
                            />
                            <p>
                                Security & <br />
                                Protection
                            </p>
                        </div>
                    </div>
                </div>

                <div className="Solution--Item">
                    <div>
                        <img
                            className="Solution--Banner"
                            src={solutions_pic4}
                            alt=""
                        />
                    </div>
                    <div className="Solution--Link">
                        <h1>Smart Expo</h1>
                        <p>
                            Reliable China Supplier
                            <br />
                            Recommended at World's Famous Trade <br />
                            Shows
                        </p>
                    </div>
                    <div className="Solution--Prods">
                        <div className="BlackLink">
                            <img
                                src={advance_1637732192000}
                                alt=""
                                className="Prods--Pic"
                            />
                            <p>
                                Constructions <br /> & Decoration
                            </p>
                        </div>
                        <div className="BlackLink">
                            <img
                                src={advance_1637732217000}
                                alt=""
                                className="Prods--Pic"
                            />
                            <p>Transportation</p>
                        </div>
                        <div className="BlackLink">
                            <img
                                src={advance_1637732257000}
                                alt=""
                                className="Prods--Pic"
                            />
                            <p>
                                Security & <br />
                                Protection
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solution;
