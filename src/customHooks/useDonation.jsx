import { FaPaypal } from "react-icons/fa";
import { MdCoffee } from "react-icons/md";

const useDonation = () => {
  const openInNewTab = (url) => {
    const absoluteUrl = `${url}`;
    window.open(absoluteUrl, "_blank");
  };

  const handleBuyCoffee = () => {
    const url = "https://buymeacoffee.com/piotrdevcan";
    openInNewTab(url);
  };

  const handlePayPal = () => {
    const url = "https://www.paypal.com/donate?hosted_button_id=UVEL5JGMRSEZ4";
    openInNewTab(url);
  };

  const menuContent = [
    {
      label: "Donate Us",
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      style: {
        backgroundColor: "#ff813f",
        borderColor: "#ff813f",
        color: "white",
        margin: "8px",
      },
      contextMenuStyle: {
        backgroundColor: "#ff813f",
        borderColor: "#ff813f",
        color: "white",
      },
      label: "Buy Me a Coffee",
      onClick: handleBuyCoffee,
      icon: <MdCoffee />,
      title: "Rise new request for help",
    },
    {
      style: {
        backgroundColor: "#0070ba",
        borderColor: "#0070ba",
        color: "white",
        margin: "8px",
      },
      contextMenuStyle: {
        backgroundColor: "#0070ba",
        borderColor: "#0070ba",
        color: "white",
      },
      label: "Donate with PayPal",
      onClick: handlePayPal,
      icon: <FaPaypal />,
      title: "Tell community you are open to help",
    },
  ];

  return { handleBuyCoffee, handlePayPal, menuContent };
};
export default useDonation;
