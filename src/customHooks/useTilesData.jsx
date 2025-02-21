import requestLogo from "@/assets/request.webp";
import offerLogo from "@/assets/offer.webp";
import communitiesLogo from "@/assets/communities.webp";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const useTilesData = () => {
  const {
    askForHelp,
    cardsRequest,
    offerHelp,
    cardsOffer,
    newNeedy,
    cardsNeedy,
    newVolunteer,
    cardsVolunteer,
    newCommunity,
    cardsCommunity,
  } = useAppRoutes();

  const handleNewRequest = () => {
    askForHelp();
  };
  const handleViewRequests = () => {
    cardsRequest();
  };
  const handleNewOffer = () => {
    offerHelp();
  };
  const handleViewOffers = () => {
    cardsOffer();
  };
  const handleNewPeopleInNeed = () => {
    newNeedy();
  };
  const handleViewPeopleInNeed = () => {
    cardsNeedy();
  };
  const handleNewVolunteer = () => {
    newVolunteer();
  };
  const handleViewVolunteers = () => {
    cardsVolunteer();
  };
  const handleNewCommunity = () => {
    newCommunity();
  };
  const handleViewCommunities = () => {
    cardsCommunity();
  };

  const tilesData = [
    {
      title: "Request for help",
      description:
        "Need a hand with something? Reach out to your local community for support—whether it’s advice, resources, or a friendly helping hand, your neighbors are here to help you succeed.",
      image: requestLogo,
      handleAllRecords: handleViewRequests,
      handleCreateRecord: handleNewRequest,
    },
    {
      title: "Offer your help",
      description:
        "Make a difference in your community by offering your skills, time, or resources to those in need. Your act of kindness could change someone’s day—or even their life.",
      image: offerLogo,
      handleAllRecords: handleViewOffers,
      handleCreateRecord: handleNewOffer,
    },
    {
      title: "People in Need",
      description:
        "Join a passionate community of volunteers in Winnipeg dedicated to supporting those in need. Connect, collaborate, and contribute to meaningful initiatives that make a real difference in people's lives, creating lasting impact and empowering positive change in our city.",
      image: communitiesLogo,
      handleAllRecords: handleViewPeopleInNeed,
      handleCreateRecord: handleNewPeopleInNeed,
    },
    {
      title: "Volunteers",
      description:
        "Become part of an inspiring community of volunteers dedicated to making a difference. Connect, collaborate, and contribute to meaningful projects that create lasting impact and empower change.",
      image: communitiesLogo,
      handleAllRecords: handleViewVolunteers,
      handleCreateRecord: handleNewVolunteer,
    },
    {
      title: "Communities",
      description:
        "Join a vibrant network of local communities where people come together to share, support, and grow. Get involved and discover the power of community-driven change.",
      image: communitiesLogo,
      handleAllRecords: handleViewCommunities,
      handleCreateRecord: handleNewCommunity,
    },
  ];
  return { tilesData };
};
export default useTilesData;
