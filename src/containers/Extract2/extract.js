import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Button, Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { fileSizeAcquire,coorDownload,preSurveyDownload,afterSurveyDownload } from '../../Api'
import './extract.scss'

const { Text } = Typography;
export default function Extract() {
    const [preSize, setPreSize] = useState(0);
    const [afterSize, setAfterSize] = useState(0);
    const [recSize, setRecSize] = useState(0);
    const [totalSize] = useState(0);
    const [isAdmin, setIsAdmin] = useState(true);
    let judge = false;
    var {state} = useLocation();
    if(typeof(state) != 'undefined'){
        let {userType} = state;
        judge = userType === 'Admin';
    }

    useEffect(() => {
        setIsAdmin(judge);
        fileSizeAcquire().then((res)=> {
            var redData = res.data;
            let {preSurvey,afterSurvey,recording} = redData;
            setPreSize(preSurvey);
            setAfterSize(afterSurvey);
            setRecSize(recording);
        })
    }, [preSize])


    const recordAc = () => {
        coorDownload().then((res)=> {
            var redData = res.data;
            console.log(redData);
        })
    }

    const preSurveyAc = () => {
        preSurveyDownload().then((res)=> {
            var redData = res.data;
            let {preSurvey,afterSurvey,recording} = redData;
            setPreSize(preSurvey);
            setAfterSize(afterSurvey);
            setRecSize(recording);
        })
    }

    const afterSurveyAc = () => {
        afterSurveyDownload().then((res)=> {
            var redData = res.data;
            let {preSurvey,afterSurvey,recording} = redData;
            setPreSize(preSurvey);
            setAfterSize(afterSurvey);
            setRecSize(recording);
        })
    }
    return (
        <div className="backgroudMain">
            <div className="outline">
                <div className="MainBody">
                    <div className="MainBodyInner">
                        <Button
                            type="primary"
                            icon={<DownloadOutlined />}
                            size={'large'}
                            onClick={recordAc}
                            block
                        >
                            Coordinate Reccord
                        </Button>
                    </div>
                    <div className="textDes">
                        <Text>Current File Size : {recSize}</Text>
                    </div>
                </div>
                <div className="MainBody">
                    <div className="MainBodyInner">
                        <Button
                            type="primary"
                            icon={<DownloadOutlined />}
                            size={'large'}
                            onClick={preSurveyAc}
                            block
                        >
                            Pre-Survey
                        </Button>
                    </div>
                    <div className="textDes">
                        <Text>Current File Size : {preSize}</Text>
                    </div>
                </div>
                <div className="MainBody">
                    <div className="MainBodyInner">
                        <Button
                            type="primary"
                            icon={<DownloadOutlined />}
                            size={'large'}
                            onClick={afterSurveyAc}
                            block
                        >
                            After-Survey
                        </Button>
                    </div>
                    <div className="textDes">
                        <Text>Current File Size : {afterSize}</Text>
                    </div>
                </div>
                {isAdmin &&
                    <div className="MainBody">
                        <div className="MainBodyInner">
                            <Button
                                type="primary"
                                icon={<DownloadOutlined />}
                                size={'large'}
                                onClick={()=>{console.log("")}}
                                block
                            >
                                All in one
                            </Button>
                        </div>
                        <div className="textDes">
                            <Text>Current File Size : {totalSize}</Text>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}
