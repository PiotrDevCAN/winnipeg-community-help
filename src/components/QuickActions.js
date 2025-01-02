import React from 'react';
import { Button, Tooltip } from 'antd';
import { AppstoreAddOutlined } from '@ant-design/icons';
import { useRouteContext } from '@/context/RouteContext';

const shortCutStyle = {
    margin: '0 8px',
};

const QuickActions = () => {

    const { askForHelp, offerHelp } = useRouteContext();

    return (
        <>
            <Tooltip title="Rise new request for help">
                <Button onClick={askForHelp} type="primary" icon={<AppstoreAddOutlined />} style={shortCutStyle} className="colorful-background">
                    Ask for help
                </Button>
            </Tooltip>
            <Tooltip title="Tell community you are open to help">
                <Button onClick={offerHelp} type="primary" icon={<AppstoreAddOutlined />} style={shortCutStyle} className="colorful-background">
                    Offer help
                </Button>
            </Tooltip>
        </>
    );
};

export default QuickActions;
