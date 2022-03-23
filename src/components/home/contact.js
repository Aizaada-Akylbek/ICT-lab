import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const { TextArea } = Input;

function AppContact (){
    return (
        <div id='contact' className='block contactBlock'>
            <div className='container-fluid'>
                <div className='titleHolder'>
                    <h2>Оставьте заявку</h2>
                    <p>Заполните форму и мы обязательно свяжемся с Вами</p>
                    </div>

                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            >
                            <Form.Item
                                name="fullname"
                                rules={[{ required: true, message: 'Please input your Full Name!' }]}
                            >
                                <Input  placeholder="Full Name" />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: 'Please input your email!' }]}
                            >
                                <Input
                                type="email"
                                placeholder="Email address"
                                />
                            </Form.Item>
                            <Form.Item
                                name="subject"
                                rules={[{ required: true, message: 'Please input the subject!' }]}
                            >
                                <Input  placeholder="Subject" />
                            </Form.Item>
                            <Form.Item
                                name="telephone"
        
                            >
                                <Input  placeholder="Telephone" />
                            </Form.Item>
                            <Form.Item
                                name="message"
        
                            >
                                <TextArea  placeholder="Message" />
                            </Form.Item>
    
                            <Form.Item
                                name="agreement"
                                valuePropName="checked"
                                rules={[
                                {
                                    validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                },
                                ]}
                                // {...tailFormItemLayout}
                            >
                                <Checkbox>
                                Я принимаю условия
                                </Checkbox>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                Submit
                                </Button>
                            </Form.Item>
                            </Form>
           
            </div>
        </div>

    )
}
export default AppContact;