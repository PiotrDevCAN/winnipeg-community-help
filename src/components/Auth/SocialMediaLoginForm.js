import React, { useState } from "react";
import { useAuthContext } from '../../context/AuthContext';
import { FacebookFilled, GoogleOutlined } from '@ant-design/icons';
import { Button, Divider } from 'antd';
// import GoggleAuthModal from '../Modals/GoggleAuthModal';
// import FacebookAuthModal from '../Modals/FacebookAuthModal';

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

            <Divider />
            <Button onClick={handleGoogleLogin} type="primary" icon={<GoogleOutlined />}>
                Login with Google
            </Button>
            <Divider />
            <Button onClick={facebookLogin} type="primary" icon={<FacebookFilled />}>
                Login with Facebook
            </Button>
        </>
    );
};
export default SocialMediaLoginForm;