import React from 'react';
import { Avatar, Card, Flex, Divider } from 'antd';
import { useStaticHelpDataContext } from '../context/StaticHelpDataContext';
import { TbCategory } from "react-icons/tb";

const { Meta } = Card;

const cardStyle = {
    minWidth: 220
};

const avatarStyle = {
    width: 35,
    height: 35,
    backgroundColor: '#1677ff',
}

const CategoryCards = ({ onSelect }) => {

    const { categoriesData: data, countTypes, selectedCategory: catId } = useStaticHelpDataContext();

    const handleCardClick = (id) => {
        onSelect(id);
    };

    return (
        <Flex gap="middle" wrap justify='space-between'>
            {data.map(
                (item) => {
                    return <Card
                        key={item.id}
                        hoverable
                        bordered
                        style={{
                            width: '32%',
                            minWidth: 220,
                            backgroundColor: catId === item.id ? '#e6f7ff' : '#fff', // Change background if selected
                            border: catId === item.id ? '2px solid #1890ff' : '1px solid #d9d9d9', // Optional: change border color
                            cursor: 'pointer',
                        }}
                        onClick={() => handleCardClick(item.id)}
                    >
                        <Meta
                            avatar={<Avatar
                                icon={<TbCategory style={avatarStyle} />}
                                shape='square'
                            />}
                            title={item.label}
                            description={
                                <>
                                    <p>Description: {item.description}</p>
                                    <p>No of types: {countTypes(item.id)}</p>
                                    <Divider />
                                    <p>Category id: {item.id}</p>
                                </>
                            }
                        />
                    </Card>
                }
            )}
        </Flex>
    )
}

export default CategoryCards;