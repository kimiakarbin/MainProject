import './Assets/Style.less';
import { Form, Input, Button } from 'antd';
import avatar_female from './Assets/Image/avatar_female.jpg';
function SupplierMassage() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="Supplier--Massage">
            <div>
                <h2 className="Massage--txt">
                    Send your message to this supplier
                </h2>
            </div>
            <Form
                className="Supplier--Form"
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="From"
                    name="From"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your email address.',
                        },
                    ]}
                >
                    <Input placeholder="Enter your email address." />
                </Form.Item>

                <Form.Item label="To" name="To">
                    <img src={avatar_female} width={40} /> Miss Effy Chen
                </Form.Item>
                <Form.Item
                    label="Message"
                    name="Message"
                    rules={[
                        {
                            required: true,
                            message:
                                'Your inquiry content must be between 20 to 4000 characters.',
                        },
                    ]}
                >
                    <Input.TextArea
                        name="content"
                        id="inquiryContent"
                        cols="90"
                        rows="5"
                        placeholder="We suggest you detail your product requirements and company information here."
                        maxlength="4000"
                    />
                    Enter between 20 to 4,000 characters.
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <div className="Form--Button">
                        <Button type="primary" htmlType="submit">
                            Send
                        </Button>
                        <div>This is not what you are looking for?</div>
                        <div>Post a Sourcing Request Now</div>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
}

export default SupplierMassage;
