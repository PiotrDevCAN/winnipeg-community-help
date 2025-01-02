import React, { useState } from "react";
import { Button, Divider } from 'antd';
import { useAuthContext } from '@/context/AuthContext';
import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

// import GoggleAuthModal from '@/components/Modals/GoggleAuthModal';
// import FacebookAuthModal from '@/components/Modals/FacebookAuthModal';

const dividerStyle = {
    margin: "8px 0"
}

const SocialMediaLoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { googleLogin, handleGoogleLogin, facebookLogin, handleFacebookLogin } = useAuthContext();

    // const [opeGoogle, setOpenGoogle] = useState(false);
    // const [openFacebook, setOpenFacebook] = useState(false);

    // const showSuggestionModal = () => {
    //     setOpen(true);
    // };
    // const handleGoogleOk = () => {
    //     setOpenGoogle(false);
    // };
    // const handleGoogleCancel = () => {
    //     setOpenGoogle(false);
    // };

    // const handleFBOk = () => {
    //     setOpenFacebook(false);
    // };
    // const handleFBCancel = () => {
    //     setOpenFacebook(false);
    // };

    return (
        <>
            {/* <GoggleAuthModal open={opeGoogle} onOk={handleGoogleOk} onCancel={handleGoogleCancel} /> */}
            {/* <FacebookAuthModal open={openFacebook} onOk={handleFBOk} onCancel={handleFBCancel} /> */}

            <Divider style={dividerStyle} />
            <Button
                onClick={facebookLogin}
                type="primary" icon={<FaFacebook />}
                className="colorful-background"
                style={{ width: "100%" }}
            >
                Login with Facebook
            </Button>
            <Divider style={dividerStyle} />
            <Button
                onClick={handleGoogleLogin}
                type="primary"
                icon={<FaGoogle />}
                className="colorful-background"
                style={{ width: "100%" }}
            >
                Login with Google
            </Button>
            <Divider style={dividerStyle} />
            <Button
                onClick={facebookLogin}
                type="primary"
                icon={<FaLinkedinIn />}
                className="colorful-background"
                style={{ width: "100%" }}
            >
                Login with LinkedIn
            </Button>
            <Divider style={dividerStyle} />
            <Button
                onClick={facebookLogin}
                type="primary"
                icon={<FaApple />}
                className="colorful-background"
                style={{ width: "100%" }}
            >
                Login with Apple
            </Button>
        </>
    );
};
export default SocialMediaLoginForm;