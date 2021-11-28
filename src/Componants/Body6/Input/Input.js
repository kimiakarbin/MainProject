import { Input, Select, Option, Button } from 'antd';

const Inputt = () => {
    const { TextArea } = Input;
    const { Option } = Select;
    return (
        <div className="Input">
            <Input className="xxx" placeholder="Product Name or Keywords" />
            <TextArea
                className="yyy"
                placeholder="Product Description"
                autoSize={{ minRows: 3, maxRows: 5 }}
            />
            <div className="mmm">
                <Input className="zzz" placeholder="Purchase Quantity" />
                <Input.Group compact className="nnn">
                    <Select
                        defaultValue="piece(s)"
                        className="vvv"
                        style={{ width: '100%' }}
                    >
                        <Option value="20' Container">20' Container</Option>
                        <Option value="40' Container">40' Container</Option>
                        <Option value="40' HQ Container">
                            40' HQ Container
                        </Option>
                        <Option value="Piece(s)">Piece(s)</Option>
                        <Option value="Bag(s)">Bag(s)</Option>
                        <Option value="Box(es)">Box(es)</Option>
                        <Option value="Foot(Feet)">Foot(Feet)</Option>
                        <Option value="Master(s)">Master(s)</Option>
                        <Option value="Pair(s)">Pair(s)</Option>
                        <Option value="Ream(s)">Ream(s)</Option>
                        <Option value="Roll(s)">Roll(s)</Option>
                        <Option value="Set(s)">Set(s)</Option>
                        <Option value="Square Meter(s)">Square Meter(s)</Option>
                        <Option value="Square Foot(feet)">
                            Square Foot(feet)
                        </Option>
                        <Option value="Ton(s)">Ton(s)</Option>
                        <Option value="Yard(s)">Yard(s)</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Input.Group>
            </div>
            <Button className="qqq" type="primary">
                Post Your Request Now
            </Button>
        </div>
    );
};

export default Inputt;
