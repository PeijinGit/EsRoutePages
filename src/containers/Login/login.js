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
        // history.replace({
        //     pathname: '/Extract2',
        //     state: { userType: 'Admin' }
        // });
        //console.log(values)

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
                // if (redData.status === 235) {
                //     history.replace("/PreComplete");
                // } else if (res.status === -100) {
                //     message.error('Submit failed, please try again later');
                //     console.log(redData)
                // }
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
