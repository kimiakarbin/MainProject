import Rotary_Pump1637303466000 from './Assets/Image/Rotary_Pump1637303466000.webp';
import Paper_Bag_Making_Machine1622020604000 from './Assets/Image/Paper_Bag_Making_Machine1622020604000.webp';
import Plastic_Bottle1621474772000 from './Assets/Image/Plastic_Bottle1621474772000.webp';
import PVC_Floor1636696239000 from './Assets/Image/PVC_Floor1636696239000.webp';
import Bearing1628499506000 from './Assets/Image/Bearing1628499506000.webp';
import Chainsaw_and_Parts1635487267000 from './Assets/Image/Chainsaw_and_Parts1635487267000.webp';
import Construction_Machinery1628155847000 from './Assets/Image/Construction_Machinery1628155847000.webp';
import Vehicle_Auto_Parts1637904433000 from './Assets/Image/Vehicle_Auto_Parts1637904433000.webp';
import Decoration_Construction1637904586000 from './Assets/Image/Decoration_Construction1637904586000.webp';
import Agriculture_Food1637915608000 from './Assets/Image/Agriculture_Food1637915608000.webp';
import Metal_Crafts1637915631000 from './Assets/Image/Metal_Crafts1637915631000.webp';
import Bag1637904716000 from './Assets/Image/Bag1637904716000.webp';
import clsx from 'clsx';
import './Assets/Style.less';
const SelectTrending = () => {
    return (
        <div className="Select--Trending">
            <div className="Trending--Title">
                <h2>Selected Trending Products</h2>
            </div>
            <div className="Trend--Items">
                <div className={clsx('Trend--Product', 'BlackLink')}>
                    <img
                        className="Trend--Product__Image"
                        src={Plastic_Bottle1621474772000}
                        alt=""
                    />
                    <p className="Trend--Product__Text">Rotary Pump</p>
                </div>
                <div className={clsx('Trend--Product', 'BlackLink')}>
                    <img
                        className="Trend--Product__Image"
                        src={Paper_Bag_Making_Machine1622020604000}
                        alt=""
                    />
                    <p className="Trend--Product__Text">
                        Construction machinery
                    </p>
                </div>
                <div className={clsx('Trend--Product', 'BlackLink')}>
                    <img
                        className="Trend--Product__Image"
                        src={Rotary_Pump1637303466000}
                        alt=""
                    />
                    <p className="Trend--Product__Text">PVC Floor</p>
                </div>
                <div className={clsx('Trend--Product', 'BlackLink')}>
                    <img
                        className="Trend--Product__Image"
                        src={PVC_Floor1636696239000}
                        alt=""
                    />
                    <p className="Trend--Product__Text">
                        Paper Bag Making Machine
                    </p>
                </div>
                <div className={clsx('Trend--Product', 'BlackLink')}>
                    <img
                        className="Trend--Product__Image"
                        src={Bearing1628499506000}
                        alt=""
                    />
                    <p className="Trend--Product__Text">Chainsaw And Parts</p>
                </div>
                <div className={clsx('Trend--Product', 'BlackLink')}>
                    <img
                        className="Trend--Product__Image"
                        src={Chainsaw_and_Parts1635487267000}
                        alt=""
                    />
                    <p className="Trend--Product__Text">Plastic Bottles</p>
                </div>
                <div className={clsx('Trend--Product', 'BlackLink')}>
                    <img
                        className="Trend--Product__Image"
                        src={Construction_Machinery1628155847000}
                        alt=""
                    />
                    <p className="Trend--Product__Text">Bearing</p>
                </div>
                <div className={clsx('Trend--Product', 'BlackLink')}>
                    <img
                        className="Trend--Product__Image"
                        src={Vehicle_Auto_Parts1637904433000}
                        alt=""
                    />
                    <p className="Trend--Product__Text">
                        Decoration & Construction
                    </p>
                </div>
                <div className={clsx('Trend--Product', 'BlackLink')}>
                    <img
                        className="Trend--Product__Image"
                        src={Decoration_Construction1637904586000}
                        alt=""
                    />
                    <p className="Trend--Product__Text">Lighting Decoration</p>
                </div>
                <div className={clsx('Trend--Product', 'BlackLink')}>
                    <img
                        className="Trend--Product__Image"
                        src={Agriculture_Food1637915608000}
                        alt=""
                    />
                    <p className="Trend--Product__Text">Fastener</p>
                </div>
                <div className={clsx('Trend--Product', 'BlackLink')}>
                    <img
                        className="Trend--Product__Image"
                        src={Metal_Crafts1637915631000}
                        alt=""
                    />
                    <p className="Trend--Product__Text">Fitness Equipment</p>
                </div>
                <div className={clsx('Trend--Product', 'BlackLink')}>
                    <img
                        className="Trend--Product__Image"
                        src={Bag1637904716000}
                        alt=""
                    />
                    <p className="Trend--Product__Text">Selected Supplier</p>
                </div>
            </div>
        </div>
    );
};

export default SelectTrending;
