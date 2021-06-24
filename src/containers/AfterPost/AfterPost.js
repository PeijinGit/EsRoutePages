import React from 'react';
import { postSubmit } from '../../Api'
import {useHistory} from 'react-router-dom';
import {
  Form,
  Select,
  Input,
  Slider,
  Button,
} from 'antd';
import './AfterPost.scss';

function AfterPost() {
  //const { Option } = Select;
  const history = useHistory();
  const formItemLayout = {
    labelCol: {
      span: 0,
    },
    wrapperCol: {
      span: 14,
    },
  };

  const innerMark = {
    1: '-3',
    2: '-2',
    3: '-1',
    4: '0',
    5: '1',
    6: '2',
    7: '3',
  }

  const initvalues = {
    Open1: "None",
    Open2: "None",
    Open3: "None",
    Open4: "None",
    Que1: 4,
    Que2: 4,
    Que3: 4,
    Que4: 4,
    Que5: 4,
    Que6: 4,
    Que7: 4,
    Que8: 4,
    Que9: 4,
    Que10: 4,
    Que11: 4,
    Que12: 4,
    Que13: 4,
    Que14: 4,
    Que15: 4,
    Que16: 4,
    Que17: 4,
    Que18: 4,
  }

  const openAnsList = [
    { id: 1, text: 'For the 1st case, why have you chosen this exit ?' },
    { id: 2, text: 'For the 2nd case, why have you chosen this exit ?' },
    { id: 3, text: 'For the 3rd case, why have you chosen this exit ?' },
    { id: 4, text: 'For the 4th case, why have you chosen this exit ?' },
  ]

  const qList = [
    { id: 1, text: 'I believed I really was the player in the VR scenario' },
    { id: 2, text: 'After finishing the game, it takes a long time for me to return to the real word psychologically and emotionally.' },
    { id: 3, text: 'My emotion often varies with the VR story’s progress' },
    { id: 4, text: 'This experience makes me feel scared or fearful' },
    { id: 5, text: 'Overall, this experience makes me feel tense or nervous' },
    { id: 6, text: 'Overall, this experience makes me feel anxious' },
    { id: 7, text: 'The VR scenario was engaging' },
    { id: 8, text: 'I found running this VR scenario easy' },
    { id: 9, text: 'The virtual world was adequate or realistic' },
    { id: 10, text: 'The virtual fire scenario was adequate or realistic' },
    { id: 11, text: 'The interaction with other virtual people was adequate or realistic' },
    { id: 12, text: 'I would act the same way in real life during the fire emergency' },
    { id: 13, text: 'I felt part of a group during the simulation' },
    { id: 14, text: 'I felt it was important to get out as quickly as possible regardless of other people' },
    { id: 15, text: 'I felt the urgency to act/do something during the fire emergency' },
    { id: 16, text: 'I felt to be unsafe while I was in the virtual building' },
    { id: 17, text: 'I believed that the fire emergency was severe' },
    { id: 18, text: 'I believed that the fire was harmful' },
  ]

  const onFinish = (values) => {
    //console.log(values);
    postSubmit(values)
        .then((res) => {
          if (res.status === 235) {
            console.log(res.data)
          } else if (res.status === -100) {
            console.log(res.data)
            // this.props.history.replace({
            //   pathname: 'login'
            // })
          }
        })
        .catch(function (error) {
          console.log(error);
        });
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
      {/* <Form.item > */}
      <Slider
        marks={innerMark}
        max={7}
        min={1}
        tipFormatter={false}
        defaultValue={4}
      />
      {/* </Form.item> */}
    </Form.Item>;
    listItem.push(formItem);
    return null;
  })

  const openItem = [];
  openAnsList.map((item) => {
    let formItemBegin = <Form.Item label={item.id}>
      <span className="ant-form-text">{item.text}</span>
    </Form.Item>
    openItem.push(formItemBegin);
    let formItem = <Form.Item
      key={'Open' + item.id}
      //name={'Open' + item.id}
    >
      {/* <Form.item > */}
      <Form.Item name={'Open' + item.id}>
        <Input.TextArea />
      </Form.Item>
      {/* </Form.item> */}
    </Form.Item>;
    openItem.push(formItem);
    return null;
  })

  return (
    <div className="Outline">
      <div className="BodyTop">
        <div className="bodyText">
          <h1>Post-experiment survey</h1>
        </div>
      </div>
      <div className="MainBody">
        <div className="MainBodyMiddle">
          <Form
            name="validate_other"
            {...formItemLayout}
            onFinish={onFinish}
            initialValues={initvalues}
          >
            {openItem}
            {listItem}
            <div className="MainBodyBottom">
              <Button type="primary" htmlType="submit" block>Submit</Button>
            </div>
          </Form>
        </div>
      </div>
      <div>
        <br></br>
      </div>
    </div>
  )
}

export default AfterPost;


