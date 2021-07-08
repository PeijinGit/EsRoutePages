import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { Button, Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import './extract.scss'

const { Text } = Typography;
export default function Extract() {
    const [preSize, setPreSize] = useState(0);
    const [afterSize, setAfterSize] = useState("afterSize");
    const [recSize, setRecSize] = useState("recSize");

    useEffect(() => {
        setPreSize(199);
        console.log(preSize);
        console.log(afterSize);
        console.log(recSize);
      }, [preSize])


      const tsetFunc = ()=>{
        console.log("sdfse");
      }
    return (
        <div>
            <div className="outline">
                <div className="MainBody">
                    <div className="MainBodyInner">
                        <Button
                            type="primary"
                            icon={<DownloadOutlined />}
                            size={'large'}
                            onClick={tsetFunc}
                        >
                            Download
                        </Button>
                    </div>
                    <div className="textDes">
                        <Text>Current File Size : {preSize}</Text>
                    </div>
                </div>
                <div className="MainBody">
                    <Button
                        type="primary"
                        icon={<DownloadOutlined />}
                        size={'large'}
                        onClick={tsetFunc}
                    >
                        Download
                    </Button>
                </div>
                <div className="MainBody">
                    <Button
                        type="primary"
                        icon={<DownloadOutlined />}
                        size={'large'}
                        onClick={tsetFunc}
                    >
                        Download
                    </Button>
                </div>
                <div className="MainBody">
                    <Button
                        type="primary"
                        icon={<DownloadOutlined />}
                        size={'large'}
                        onClick={tsetFunc}
                    >
                        Download
                    </Button>
                </div>
            </div>
        </div>
    )
}
