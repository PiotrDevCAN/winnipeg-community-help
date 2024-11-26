import React from 'react';
import { Row, Col, Card, Avatar, Divider, Flex } from 'antd';

// const BaseLayout = ({children, pageName}) => {
const SingleColumn = ({ ...props }) => {

    const { children, title } = props;

    return (
        <>
            <Flex gap="middle" align="center" vertical>
                {/* <Row gutter={16}>
                    <Col span={12}> */}
                        <Card bordered={true}>
                            <Card.Meta
                                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                                title={title}
                                description={children}
                            />
                        </Card>
                    {/* </Col>
                </Row> */}
            </Flex>

        </>
    );
};

export default SingleColumn;
