// Footer.js
import React from 'react';
import { useRouteContext } from '../../context/RouteContext';
import { Col, Divider, Flex, Row, Space } from 'antd';
import DonateButtons from '../Donate/Buttons';

const listStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "16px",
    padding: 0,
    margin: 0,
    listStyle: "none",
}

const listElementStyle = {
    color: "#d1d5db",
    fontSize: "16px",
    textDecoration: "none",
}

const Footer = () => {

    const { menuItems: data } = useRouteContext();

    return (
        <>
            <Row gutter={[16, 32]} align="middle" justify="space-between" wrap>

                <Col xs={24} sm={4} style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    <a href="/">
                        <img src="/icon1.webp" alt="logo" style={{ width: "144px" }} />
                    </a>
                </Col>

                <Col xs={24} sm={20}>
                    <ul style={listStyle}>
                        {data.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    style={listElementStyle}
                                    onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
                                    onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <Divider style={{ borderColor: "#4b5563", margin: "24px 0" }} />

                    <Flex vertical align="center">
                        <DonateButtons />

                        <Divider style={{ borderColor: "#4b5563", margin: "24px 0" }} />

                        <p style={{ fontSize: "14px", margin: "8px 0" }}>
                            © Winnipeg Cares. All rights reserved.
                        </p>
                    </Flex>
                </Col>
            </Row>

            <Divider style={{ borderColor: "#4b5563", margin: "24px 0" }} />

            <p style={{ textAlign: "center", fontSize: "14px", margin: "8px 0" }}>
                We acknowledge we are gathered on Treaty 1 Territory and that Manitoba is located on the Treaty Territories and ancestral lands of the Anishinaabeg, Anishininewuk, Dakota Oyate, Denesuline and Nehethowuk Nations. We acknowledge Manitoba is located on the Homeland of the Red River Métis.
            </p>
        </>
    );
};

export default Footer;
