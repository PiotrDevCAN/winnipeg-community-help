import React, { useState } from 'react';
import { Flex, Divider, Row, Col, Card, Typography } from 'antd';
import { useStaticHelpDataContext } from '../context/StaticHelpDataContext';
import { useStaticCommunityContext } from '../context/StaticCommunityContext';

import CategoryCards from '../components/CategoryCards';
import TypeCards from '../components/TypeCards';
import FormsSteps from '../components/FormsSteps';

const { Title } = Typography;

const CategoryTypeSelector = ({ children }) => {

    let content;

    const { getCategory, getType, selectedCategory: catId, setSelectedCategory, selectedType: typeId, setSelectedType } = useStaticHelpDataContext();
    const { getCommunity, getSubCommunity } = useStaticCommunityContext();

    const [currentStep, setCurrentStep] = useState(0);
    const [percent, setPercent] = useState(25);
    const onStepChange = (value) => {
        switch (value) {
            case 0:
                setCurrentStep(value);
                break;
            case 1:
                if (catId !== "") {
                    setCurrentStep(value);
                }
                break;
            case 2:
                if (catId !== "" && typeId !== "") {
                    setCurrentStep(value);
                }
                break;
            case 3:
                setCurrentStep(value);
                break;
            default:
                break;
        }
    };

    const categorySelect = (id) => {
        setSelectedCategory(id);
        setPercent(50);
        setCurrentStep(1);
    };

    const typeSelect = (id) => {
        setSelectedType(id);
        setPercent(75);
        setCurrentStep(2);
    };

    switch (currentStep) {
        case 0:
            content = <CategoryCards onSelect={categorySelect} />;
            break;
        case 1:
            if (catId !== "") {
                content = <TypeCards onSelect={typeSelect} />;
            } else {
                content = <p>Please select category first</p>;
            }
            break;
        case 2:
            if (catId !== "" && typeId !== "") {
                const selectedCategory = getCategory(catId);
                const selectedType = getType(typeId);

                const selectedCommunity = getCommunity(catId);
                const selectedSubCommunity = getSubCommunity(typeId);

                // Add props to children
                const childrenWithProps = React.Children.map(children, (child) =>
                    React.cloneElement(child, { catId: catId, typeId: typeId })
                );

                content = <>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Card bordered={true}>
                                <Title level={4}>Preselected community and sub community</Title>
                                <Title level={5}>Community: {selectedCommunity.label}</Title>
                                <Title level={5}>Sub Community: {selectedSubCommunity.label}</Title>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card bordered={true}>
                                <Title level={4}>Preselected category and type</Title>
                                <Title level={5}>Category: {selectedCategory.label}</Title>
                                <Title level={5}>Type: {selectedType.label}</Title>
                            </Card>
                        </Col>
                    </Row>
                    <Divider />
                    <Row gutter={16}>
                        <Col span={24}>
                            <Card bordered={true}>
                                {/* {children} */}
                                {childrenWithProps}
                            </Card>
                        </Col>
                    </Row>
                </>;
            } else {
                content = <p>Please select category and type first</p>;
            }
            break;
        case 3:
            content = <p>Form has been submitted</p>;
            break;
        default:
            content = <p>Unknown step.</p>;
    }

    return (
        <>
            <Divider />
            <FormsSteps step={currentStep} percent={percent} onChange={onStepChange} />
            <Divider />
            {content}
        </>
    );
};
export default CategoryTypeSelector;