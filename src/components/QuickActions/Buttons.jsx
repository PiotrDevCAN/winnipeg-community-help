import React from 'react';
import { Tooltip } from 'antd';
import CreateHelpOffer from '@/components/Buttons/CreateHelpOffer';
import CreateHelpRequest from '@/components/Buttons/CreateHelpRequest';

const Buttons = (size = 'small') => {

    return (
        <>
            <Tooltip title="Rise new request for help">
                <CreateHelpRequest size={size} />
            </Tooltip>
            <Tooltip title="Tell community you are open to help">
                <CreateHelpOffer size={size} />
            </Tooltip>
        </>
    );
};

export default Buttons;
