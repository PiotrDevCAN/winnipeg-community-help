
import React from 'react';
import { FloatButton } from 'antd';
import { useDonateContex } from '../../context/DonateContext';
import { FaDonate, FaPaypal } from "react-icons/fa";
import { MdCoffee } from "react-icons/md";

const Donate = () => {

    const { handleBuyCoffee, handlePayPal } = useDonateContex();

    return (
        <>
            <FloatButton.Group
                shape="circle"
                trigger="hover"
                type="default"
                style={{
                    insetInlineEnd: 80,
                }}
                tooltip={<div>Donate Us</div>}
                icon={<FaDonate />}
            >
                <FloatButton
                    style={{
                        backgroundColor: "#ff813f", borderColor: "#ff813f", color: "white"
                    }}
                    tooltip={<div>Buy Me a Coffee</div>}
                    onClick={handleBuyCoffee}
                    icon={<MdCoffee />}
                />
                <FloatButton
                    style={{
                        backgroundColor: "#0070ba", borderColor: "#0070ba", color: "white"
                    }}
                    tooltip={<div>Donate with PayPal</div>}
                    onClick={handlePayPal}
                    icon={<FaPaypal />}
                />
            </FloatButton.Group>
        </>
    );
};

export default Donate;