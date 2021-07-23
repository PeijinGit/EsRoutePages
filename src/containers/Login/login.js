import React, { useEffect, useState } from 'react'
import { useHistory, useLocation, Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox, message, Spin } from 'antd';
import { userLogin } from '../../Api'
import './login.scss';

export default function Login() {
    const [loading, setLoding] = useState(false);
    const [userId, setUserId] = useState("");
    const history = useHistory();
    const onFinish = (values) => {
        setLoding(true);
        let sendValue = {
            "username": values.username,
            "password": values.password
        }
        //console.log(sendValue)
        userLogin(sendValue)
            .then((res) => {
                var redData = res.data;
                console.log(redData)
                if (redData.status == 200) {
                    var { userInfo } = redData
                    history.replace({
                        pathname: '/Extract',
                        state: {
                            username: userInfo.userId,
                            userType: userInfo.type,
                            token: userInfo.token
                        }
                    });
                }
                else {
                    message.error('Wrong Username or Password');
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="Outline">
            <Spin spinning={loading}>
                <div className="loginforminside">
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Spin>
        </div>
    )
}
