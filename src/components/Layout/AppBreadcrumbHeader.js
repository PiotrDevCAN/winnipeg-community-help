import { Flex } from "antd";
import AppBreadcrumb from "./AppBreadcrumb";
import DonateButtons from '@/components/Donate/Buttons';

const AppBreadcrumbHeader = () => {

    return (
        <Flex
            horizontal="true"
            align="center"
            justify="space-between"
            style={{
                padding: "16px 32px",
            }}
        >
            <AppBreadcrumb />
            <DonateButtons />
        </Flex>
    );
}

export default AppBreadcrumbHeader;