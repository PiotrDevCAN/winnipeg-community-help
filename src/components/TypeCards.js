import React from 'react';
import { Avatar, Card, Flex, Divider } from 'antd';
import { useStaticHelpDataContext } from '../context/StaticHelpDataContext';
import { VscTypeHierarchySub } from "react-icons/vsc";

const { Meta } = Card;

const cardStyle = {
    minWidth: 220
};

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
        <Flex gap="middle" wrap justify='space-between'>
            {data.map(
                (item) => {
                    const tempCategory = getCategory(catId);
                    return <Card
                        key={item.id}
                        hoverable
                        bordered
                        style={{
                            width: '32%',
                            minWidth: 220,
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
                }
            )}
        </Flex>
    )
}

export default TypeCards;