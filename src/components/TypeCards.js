import React from 'react';
import { Avatar, Card, Divider, Col } from 'antd';
import { useStaticHelpDataContext } from '@/context/StaticHelpDataContext';
import { VscTypeHierarchySub } from "react-icons/vsc";

const { Meta } = Card;

const avatarStyle = {
    width: 35,
    height: 35,
    backgroundColor: '#1677ff',
}

const TypeCards = ({ onSelect }) => {

    const { getCategory, getTypes, selectedCategory: catId, selectedType: typeId } = useStaticHelpDataContext();

    const handleCardClick = (id) => {
        onSelect(id);
    };

    const data = getTypes(catId);

    return (
        <>
            {data.map(
                (item, index) => {
                    const tempCategory = getCategory(catId);
                    return <Col key={index} xs={24} sm={12} md={12} lg={8} xl={8}>
                        <Card
                            title="Help Type"
                            className="card-with-colorful-header"
                            hoverable
                            bordered
                            style={{
                                marginBottom: 16,
                                backgroundColor: typeId === item.id ? '#e6f7ff' : '#fff', // Change background if selected
                                border: typeId === item.id ? '2px solid #1890ff' : '1px solid #d9d9d9', // Optional: change border color
                                cursor: 'pointer',
                            }}
                            onClick={() => handleCardClick(item.id)}
                        >
                            <Meta
                                avatar={<Avatar
                                    icon={<VscTypeHierarchySub style={avatarStyle} />}
                                    shape='square'
                                />}
                                title={item.label}
                                description={
                                    <>
                                        <p>Category Name: {tempCategory.label}</p>
                                        <p>Description: {item.description}</p>
                                        <Divider />
                                        <p>Category id: {item.categoryId}</p>
                                        <p>Type id: {item.id}</p>
                                    </>
                                }
                            />
                        </Card>
                    </Col>
                }
            )}
        </>
    )
}

export default TypeCards;