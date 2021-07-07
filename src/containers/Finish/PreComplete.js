import React from 'react'
import { Result } from 'antd';

export default function Complete() {
    return (
        <Result
            status="success"
            title="Successfully Submitted!"
            subTitle="Please close this window"
        />
    )
}
