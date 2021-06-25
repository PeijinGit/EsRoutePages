import React from 'react'
import { Result, Button } from 'antd';

export default function Complete() {
    return (
        <Result
            status="success"
            title="Successfully Submitted!"
            subTitle="Please close this window"
            // extra={[
            //     <Button type="primary" key="console">
            //         Go Console
            //     </Button>,
            //     <Button key="buy">Buy Again</Button>,
            // ]}
        />
    )
}
