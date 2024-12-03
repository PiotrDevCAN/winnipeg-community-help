import { Card, Col, Row, Typography } from 'antd';
import { usePageHeaderContext } from '../../context/PageHeaderContext';

const { Title } = Typography;

const style = {
    padding: '8px 0',
};

const headerStyle = {
    margin: '0px',
};

const PageHeader = ({ PageName, Section }) => {

    const { component1, component2, component3 } = usePageHeaderContext();

    let content;

    let cardStyleClass;
    switch (Section) {
        case 'request':
        case 'offer':
        case 'volunteer':
        case 'community':
        case 'category':
        case 'type':
            cardStyleClass = "";
            break;
        default:
            cardStyleClass = "pageHeaderCard";
            break;
    }

    if (component1 && component2 && component3) {
        content =
            <>
                <Col className="gutter-row" span={9}>
                    <div style={style}>
                        <Title level={2} style={headerStyle}>{PageName}</Title>
                    </div>
                </Col>
                <Col className="gutter-row" span={15}>
                    <div style={style}>
                        {component1}
                    </div>
                    {/* <Divider /> */}
                    <div style={style}>
                        {component2}
                    </div>
                    {/* <Divider /> */}
                    <div style={style}>
                        {component3}
                    </div>
                </Col>
            </>
    } else if (component1 || component2 || component3) {
        content = <>
            <Col className="gutter-row" span={9}>
                <div style={style}>
                    <Title level={2} style={headerStyle}>{PageName}</Title>
                </div>
            </Col>
            <Col className="gutter-row" span={15}>
                <div style={style}>
                    {component1}
                    {component2}
                    {component3}
                </div>
            </Col>
        </>
    } else {
        content = <Col className="gutter-row" span={24}>
            <div style={style}>
                <Title level={2} style={headerStyle}>{PageName}</Title>
            </div>
        </Col>
    }

    return (
        <Card
            className={cardStyleClass}
            style={{
                marginBottom: 8,
            }}
        >
            <Row gutter={16}>
                {content}
            </Row>
        </Card>
    );
}

export default PageHeader;