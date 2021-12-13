import GGButton from "../../ReuseableComponents/GGButton/GGButton";
import clsx from "clsx";
const HotItems = () => {
  return (
    <div className="Hot--Items">
      <div>
        <h3 className="Hot--Items__Title">Hot Items</h3>
      </div>
      <div className="Hot--Items__List">
        <div>
          <GGButton
            value="Furniture"
            className={clsx("Hot--Item", "GrayLink")}
          />
          <GGButton
            value="Electrical Equipments"
            className={clsx("Hot--Item", "GrayLink")}
          />
          <GGButton
            value="Vehicles and Transportation"
            className={clsx("Hot--Item", "GrayLink")}
          />
          <GGButton
            value="Construction Industry"
            className={clsx("Hot--Item", "GrayLink")}
          />
        </div>

        <div>
          <GGButton
            value="Apparel and Clothing"
            className={clsx("Hot--Item", "GrayLink")}
          />
          <GGButton
            value="Electronic Components"
            className={clsx("Hot--Item", "GrayLink")}
          />
          <GGButton
            value="Tools and Hardware"
            className={clsx("Hot--Item", "GrayLink")}
          />
          <GGButton
            value="Lighting Industry"
            className={clsx("Hot--Item", "GrayLink")}
          />
        </div>
        <div>
          <GGButton
            value="Auto Parts and Accessories"
            className={clsx("Hot--Item", "GrayLink")}
          />
          <GGButton
            value="Gifts , Crafts & Collectibles"
            className={clsx("Hot--Item", "GrayLink")}
          />
          <GGButton
            value="Minerals , Metals & Materials"
            className={clsx("Hot--Item", "GrayLink")}
          />
          <GGButton
            value="Hardware & Tool Industry"
            className={clsx("Hot--Item", "GrayLink")}
          />
        </div>
        <div>
          <GGButton
            value="Bags , Cases & Luggages"
            className={clsx("Hot--Item", "GrayLink")}
          />
          <GGButton
            value="Motorcycles & Scooters"
            className={clsx("Hot--Item", "GrayLink")}
          />
          <GGButton
            value="Machinery & Equipments"
            className={clsx("Hot--Item", "GrayLink")}
          />
          <GGButton
            value="Industrial Machinery Industry"
            className={clsx("Hot--Item", "GrayLink")}
          />
        </div>
        <div>
          <GGButton
            value="Computer Products"
            className={clsx("Hot--Item", "GrayLink")}
          />
          <GGButton
            value="Sealing,Packaging Storage & Shelving"
            className={clsx("Hot--Item", "GrayLink")}
          />
          <GGButton
            value="Textiles"
            className={clsx("Hot--Item", "GrayLink")}
          />
          <GGButton
            value="Furniture Industry"
            className={clsx("Hot--Item", "GrayLink")}
          />
        </div>
        <div>
          <GGButton
            value="Consumer Electronics"
            className={clsx("Hot--Item", "GrayLink")}
          />
          <GGButton
            value="Building Materials & Supplies"
            className={clsx("Hot--Item", "GrayLink")}
          />
          <GGButton
            value="Lighting"
            className={clsx("Hot--Item", "GrayLink")}
          />
          <GGButton
            value="Machine Parts Industry"
            className={clsx("Hot--Item", "GrayLink")}
          />
        </div>
      </div>
    </div>
  );
};

export default HotItems;
