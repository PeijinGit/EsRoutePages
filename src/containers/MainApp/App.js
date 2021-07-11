import React, { useEffect, useState } from 'react';
import { preSubmit } from '../../Api'
import { useHistory, useLocation } from "react-router-dom";
//import ReactDOM from 'react-dom';
import {
  Form,
  Select,
  InputNumber,
  Radio,
  Slider,
  Button,
  message,
  Spin
} from 'antd';
import './App.scss';
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {
  const history = useHistory();
  let userID = "";
  let query = useQuery().get("userID");
  const [loading, setLoding] = useState(false)
  useEffect(() => {
    if (query !== null) {
      userID = query
    }
    else {
      console.log("No user ID")
      history.replace("/ErrorPage");
    }
  }, [])

  const { Option } = Select;
  const formItemLayout = {
    labelCol: {
      span: 0,
    },
    wrapperCol: {
      span: 14,
    },
  };

  const qList = [
    { id: 1, text: 'I am confident that I am able to effectively deal with a fire emergency' },
    { id: 2, text: 'Thanks to my resources, I know how to manage in a fire emergency' },
    { id: 3, text: 'I would be able to deal with a fire emergency even if I find flame and smoke along the way' },
    { id: 4, text: 'I would be able to deal with a fire emergency even if I find objects that may harm me along the way' },
    { id: 5, text: 'The consequences of a fire emergency on my safety would be severe' },
    { id: 6, text: 'The consequences of a fire emergency would be harmful' },
    { id: 7, text: 'I would be vulnerable during a fire emergency' },
  ]

  const onFinish = (values) => {
    setLoding(true);
    if (userID !== "") {
      let sendValue = {
        "userId": userID,
        "receivedPreSurvey": values
      }
      preSubmit(sendValue)
        .then((res) => {
          var redData = res.data;
          if (redData.status === 235) {
            history.replace("/PreComplete");
          } else if (res.status === -100) {
            message.error('Submit failed, please try again later');
            //console.log(redData)
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const listItem = [];
  qList.map((item) => {
    let formItemBegin = <Form.Item label={item.id}>
      <span className="ant-form-text">{item.text}</span>
    </Form.Item>
    listItem.push(formItemBegin);
    let formItem = <Form.Item
      key={'Que' + item.id}
      name={'Que' + item.id}
    >
      <Slider
        marks={{
          1: '-3',
          2: '-2',
          3: '-1',
          4: '0',
          5: '1',
          6: '2',
          7: '3',
        }
        }
        max={7}
        min={1}
        tipFormatter={false}
        defaultValue={4}
      />
    </Form.Item>;
    listItem.push(formItem);
    return null;
  })


  return (
    <div className="Outline">
      <Spin spinning={loading}>
        <div className="BodyTop">
          <div className="bodyText">
            <h1>Pre-experiment Survey</h1>
          </div>
        </div>
        <div className="MainBody">
          <div className="MainBodyMiddle">
            <Form
              name="validate_other"
              {...formItemLayout}
              onFinish={onFinish}
              initialValues={{
                Q2: 4,
                Que1: 4,
                Que2: 4,
                Que3: 4,
                Que4: 4,
                Que5: 4,
                Que6: 4,
                Que7: 4,
              }}
            >
              <Form.Item label="Gender">
                <Form.Item
                  name="Gender"
                  rules={[
                    {
                      required: true,
                      message: 'Please select your gender!',
                    },
                  ]}
                >
                  <Radio.Group>
                    <Radio value="Male">Male</Radio>
                    <Radio value="Female">Female</Radio>
                    <Radio value="Other">Other</Radio>
                    <Radio value="Prefer not to say">Prefer not to say</Radio>
                  </Radio.Group>
                </Form.Item>
              </Form.Item>
              <Form.Item label="Age">
                <Form.Item
                  name="Age"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your age!',
                    },
                  ]}
                >
                  <InputNumber min={1} max={150} />
                </Form.Item>
              </Form.Item>

              <Form.Item label="Ethnic group">
                <Form.Item
                  name="Ethnicgroup"
                  rules={[
                    {
                      required: true,
                      message: 'Please select Ethnic group!',
                    },
                  ]}
                >
                  <Select placeholder="Please select Ethnic group" style={{ width: 220 }}>
                    <Option value="European">European</Option>
                    <Option value="Māori">Māori</Option>
                    <Option value="Pacific People">Pacific People</Option>
                    <Option value="Asian">Asian</Option>
                    <Option value="Middle Eastern">Middle Eastern</Option>
                    <Option value="Latin America">Latin America</Option>
                    <Option value="African">African</Option>
                    <Option value="Other Ethnicity">Other Ethnicity</Option>
                    <Option value="Prefer not to say">Prefer not to say</Option>
                  </Select>
                </Form.Item>
              </Form.Item>
              <Form.Item
                label="Weight(kg)"
              >
                <Form.Item name="Weight">
                  <InputNumber defaultValue="0" min={1} max={200} suffix="RMB" />
                </Form.Item>
              </Form.Item>
              <Form.Item
                label="Height(cm)"
              >
                <Form.Item name="Height">
                  <InputNumber defaultValue="0" min={1} max={300} />
                </Form.Item>
              </Form.Item>

              <Form.Item label="Q1">
                <span className="ant-form-text">How frequently have you practiced in a fire drill?</span>
              </Form.Item>
              <Form.Item
                name="Q1"
                rules={[
                  {
                    required: true,
                    message: 'Please select an option!',
                  },
                ]}
              >
                <Select placeholder="Please select " style={{ width: 200 }}>
                  <Option value="Never">Never</Option>
                  <Option value="Once a year">Once a year</Option>
                  <Option value="Twice a year">Twice a year</Option>
                  <Option value="More than twice a year">More than twice a year</Option>
                  <Option value="Unsure">Unsure</Option>
                </Select>
              </Form.Item>

              <Form.Item label="Q2">
                <span className="ant-form-text">How would you rate your preparedness/awareness of the correct actions required in a fire?
                  (-3= very unprepared and +3= Very prepared)
                  7-point Likert Scale</span>
              </Form.Item>
              <Form.Item
                key={"Q2"}
                label=""
                name="Q2"
              >
                <Slider
                  marks={{
                    1: '-3',
                    2: '-2',
                    3: '-1',
                    4: '0',
                    5: '1',
                    6: '2',
                    7: '3',
                  }
                  }
                  max={7}
                  min={1}
                  tipFormatter={false}
                  defaultValue={4}
                  value='4'
                />
              </Form.Item>

              <Form.Item label="Q3:">
                <span className="ant-form-text">How often do you play video games?</span>
              </Form.Item>
              <Form.Item
                name="Q3"
                rules={[
                  {
                    required: true,
                    message: 'Please select an option!',
                  },
                ]}
              >
                <Select placeholder="Please select" style={{ width: 200 }}>
                  <Option value="Never">Never</Option>
                  <Option value="Less than once a year">Less than once a year</Option>
                  <Option value="At least once a year">At least once a year</Option>
                  <Option value="At least once a month">At least once a month</Option>
                  <Option value="At least once a week">At least once a week</Option>
                  <Option value="Several days a week">Several days a week</Option>
                  <Option value="Everyday">Everyday</Option>
                </Select>
              </Form.Item>

              <Form.Item label="Q4:">
                <span className="ant-form-text">Have you ever used Virtual Reality?</span>
              </Form.Item>
              <Form.Item
                name="Q4"
                rules={[
                  {
                    required: true,
                    message: 'Please select an option!',
                  },
                ]}
              >
                <Radio.Group>
                  <Radio value="Yes">Yes</Radio>
                  <Radio value="No">No</Radio>
                  <Radio value="Unsure">Unsure</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Q5: ">
                <span className="ant-form-text">Please state your level of agreement with these statements. (7-point Likert Scale : -3=
                  strongly disagree and +3= strongly agree).</span>
              </Form.Item>
              {listItem}
              <span>Please ensure that you have completed the questionnaire, otherwise it cannot be submitted.</span>
              <div className="MainBodyBottom">
                <Button type="primary" htmlType="submit" block>Submit</Button>
              </div>
            </Form>
          </div>
        </div>
        <div>
          <br></br>
        </div>
      </Spin>
    </div>
  )
}

export default App;
