import React from 'react';
import { Card, Button, Divider, Typography } from 'antd';
import { useUserContext } from '@/context/UserContext';
import { useRouteContext } from '@/context/RouteContext';

const { Text } = Typography;

const Requests = ({ item }) => {
    // const { getRequestsNumber, loading, error } = useUserContext();

    const dividerStyle = {
        margin: "8px 0"
    }

    const { requestHelpByUser } = useRouteContext();
    const handleViewRequests = (id) => {
        requestHelpByUser(id);
    };

    // useEffect(() => {
    //     getRequestsNumber(item.id);
    // }, [getRequestsNumber]);

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error}</p>;
    // if (!item) return <p>Loading main item data...</p>;

    return (
        <Card
            className="card-with-colorful-header"
            title="User's Help Requests"
            actions={[
                <Button key="1" type="primary" size="default" onClick={() => handleViewRequests(item.id)} className="colorful-background">
                    All Help Requests
                </Button>
            ]}
        >
            <p>List of Help Requests raised by User</p>
            <Divider style={dividerStyle} />
            <p>Number of items: <Text strong></Text></p>
        </Card>
    );
};
export default Requests;