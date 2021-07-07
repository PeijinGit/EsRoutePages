import React from 'react'
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

export default function extract() {
    return (
        <div className="outline">
            <div className="MainBody">
                <Button type="primary" icon={<DownloadOutlined />} size={'large'}>
                    Download
                </Button>
            </div>
        </div>
    )
}
