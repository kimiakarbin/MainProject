import { Input, Select, Button } from 'antd';
import { useState } from 'react';
import '../Assets/Style.less';
const SourcingForm = () => {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [purchaseQuantity, setPurchaseQuantity] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        console.log({
            productName: productName,
            productDescription: productDescription,
            purchaseQuantity: purchaseQuantity,
        });

        setProductName('');
        setProductDescription('');
        setPurchaseQuantity('');
    };

    const { TextArea } = Input;
    const { Option } = Select;
    return (
        <div>
            <Input
                value={productName}
                className="Form--Text"
                placeholder="Product Name or Keywords"
                onChange={(e) => setProductName(e.target.value)}
            />
            <TextArea
                value={productDescription}
                className="Form--Textarea"
                placeholder="Product Description"
                autoSize={{ minRows: 3, maxRows: 5 }}
                onChange={(e) => setProductDescription(e.target.value)}
            />
            <div className="Form--Item">
                <Input
                    value={purchaseQuantity}
                    className="Input--Quantity"
                    placeholder="Purchase Quantity"
                    onChange={(e) => setPurchaseQuantity(e.target.value)}
                />
                <Input.Group compact className="Form--Option__Sourcing">
                    <Select
                        defaultValue="piece(s)"
                        className="Options--Group"
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
            <Button className="Form--Button" onClick={onSubmit} type="primary">
                Post Your Request Now
            </Button>
        </div>
    );
};

export default SourcingForm;
