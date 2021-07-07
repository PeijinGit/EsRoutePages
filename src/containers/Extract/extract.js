import React from 'react'
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import './extract.scss'

export default function extract() {

    const tsetFunc = () => {
        console.log("stestst");
    }
    return (
        <div className="outline">
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
    )
}
