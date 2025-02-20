// Footer.js
import React from 'react';
import { Card, Steps, notification } from 'antd';
import { useStaticHelpDataContext } from '@/context/static/StaticHelpDataContext';
import steps from '@/data/formStepsData';

// const FormsSteps = ({ percent, step, onChange }) => {
const FormsSteps = ({ step, percent, onChange }) => {
    const [api, contextHolder] = notification.useNotification();
    const openNotification = (placement, info = '') => {
        api.info({
            message: `Notification ${placement}`,
            description: info,
            placement,
        });
    };

    const { selectedCategoryId: catId, selectedTypeId: typeId } = useStaticHelpDataContext();

    const handleStepChange = (value) => {
        switch (value) {
            case 0:
                // openNotification('top', 'The first step is available alvays');
                // setCurrentStep(value);
                onChange(value);
                break;
            case 1:
                if (!catId) {
                    openNotification('top', 'Please select category first');
                } else {
                    // setCurrentStep(value);
                    onChange(value);
                }
                break;
            case 2:
                if (!catId || !typeId) {
                    openNotification('top', 'Please select category and type first');
                } else {
                    // setCurrentStep(value);
                    onChange(value);
                }
                break;
            case 3:
                // openNotification('top', 'The fourth step is available disabled');
                // setCurrentStep(value);
                onChange(value);
                break;
            default:
                break;
        }
    };

    return (<Card
        title="Main Category / Type Selection"
        className="card-with-colorful-header"
        bordered={true}>
        {contextHolder}
        <Steps
            current={step}
            percent={percent}
            onChange={handleStepChange}
            size="small"
            labelPlacement="vertical"
            items={steps}
        />
    </Card>
    );
};

export default FormsSteps;
