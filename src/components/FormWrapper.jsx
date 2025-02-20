import React, { useState } from 'react';
import { Flex, Divider } from 'antd';

const FormWrapper = ({ children }) => {

    return (
        <Flex align="center" vertical>
            <Divider />
            {children}
        </Flex>
    );
};
export default FormWrapper;