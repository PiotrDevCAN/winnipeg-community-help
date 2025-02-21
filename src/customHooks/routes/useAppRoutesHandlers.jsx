import { useNavigate } from "react-router-dom";

const useAppRoutesHandlers = () => {
  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  };

  const askForHelp = () => {
    navigate("/request/new");
  };
  const listRequest = () => {
    navigate("/request/list");
  };
  const cardsRequest = () => {
    navigate("/request/cards");
  };
  const requestHelpDetails = (id) => {
    navigate("/request/" + id + "/details");
  };
  const requestHelpEdit = (id) => {
    navigate("/request/" + id + "/edit");
  };
  const requestHelpInCommunity = (id) => {
    navigate("/request/cards/community/" + id);
  };
  const requestHelpInType = (id) => {
    navigate("/request/cards/type/" + id);
  };
  const requestHelpByNeedy = (id) => {
    navigate("/request/cards/needy/" + id);
  };
  const requestHelpByVolunteer = (id) => {
    navigate("/request/cards/volunteer/" + id);
  };

  const offerHelp = () => {
    navigate("/offer/new");
  };
  const listOffer = () => {
    navigate("/offer/list");
  };
  const cardsOffer = () => {
    navigate("/offer/cards");
  };
  const offerHelpDetails = (id) => {
    navigate("/offer/" + id + "/details");
  };
  const offerHelpEdit = (id) => {
    navigate("/offer/" + id + "/edit");
  };
  const offerHelpInCommunity = (id) => {
    navigate("/offer/cards/community/" + id);
  };
  const offerHelpInType = (id) => {
    navigate("/offer/cards/type/" + id);
  };
  const offerHelpByNeedy = (id) => {
    navigate("/offer/cards/needy/" + id);
  };
  const offerHelpByVolunteer = (id) => {
    navigate("/offer/cards/volunteer/" + id);
  };

  const newVolunteer = () => {
    navigate("/volunteer/new");
  };
  const listVolunteer = () => {
    navigate("/volunteer/list");
  };
  const cardsVolunteer = () => {
    navigate("/volunteer/cards");
  };
  const volunteerDetails = (id) => {
    navigate("/volunteer/" + id + "/details");
  };
  const volunteerEdit = (id) => {
    navigate("/volunteer/" + id + "/edit");
  };
  const volunteerInCommunity = (id) => {
    navigate("/volunteer/cards/community/" + id);
  };

  const newNeedy = () => {
    navigate("/needy/new");
  };
  const listNeedy = () => {
    navigate("/needy/list");
  };
  const cardsNeedy = () => {
    navigate("/needy/cards");
  };
  const needyDetails = (id) => {
    navigate("/needy/" + id + "/details");
  };
  const needyEdit = (id) => {
    navigate("/needy/" + id + "/edit");
  };
  const needyInCommunity = (id) => {
    navigate("/needy/cards/community/" + id);
  };

  const newCommunity = () => {
    navigate("/community/new");
  };
  const listCommunity = () => {
    navigate("/community/list");
  };
  const cardsCommunity = () => {
    navigate("/community/cards");
  };
  const communityDetails = (id) => {
    navigate("/community/" + id + "/details");
  };
  const communityEdit = (id) => {
    navigate("/community/" + id + "/edit");
  };

  const userDetails = (id) => {
    navigate("/user/" + id + "/details");
  };
  const userInCommunity = (id) => {
    navigate("/user/cards/community/" + id);
  };

  const myProfile = () => {
    navigate("/myProfile");
  };
  const newUser = () => {
    navigate("/myProfile/new");
  };
  const myHelpRequests = () => {
    navigate("/myHelpRequests");
  };
  const myHelpOffers = () => {
    navigate("/myHelpOffers");
  };
  const myCommunity = () => {
    navigate("/myCommunity");
  };
  const leave = () => {
    navigate("/logout");
  };
  const signIn = () => {
    navigate("/login");
  };
  const signUp = () => {
    navigate("/register");
  };
  const remindPassword = () => {
    navigate("/remindPassword");
  };
  const resetPassword = () => {
    navigate("/resetPassword");
  };
  const updatePassword = () => {
    navigate("/updatePassword");
  };

  return {
    home,
    askForHelp,
    listRequest,
    cardsRequest,
    requestHelpDetails,
    requestHelpEdit,
    requestHelpInCommunity,
    requestHelpInType,
    requestHelpByNeedy,
    requestHelpByVolunteer,
    offerHelp,
    listOffer,
    cardsOffer,
    offerHelpDetails,
    offerHelpEdit,
    offerHelpInCommunity,
    offerHelpInType,
    offerHelpByNeedy,
    offerHelpByVolunteer,
    newVolunteer,
    listVolunteer,
    cardsVolunteer,
    volunteerDetails,
    volunteerEdit,
    volunteerInCommunity,
    newNeedy,
    listNeedy,
    cardsNeedy,
    needyDetails,
    needyEdit,
    needyInCommunity,
    newCommunity,
    listCommunity,
    cardsCommunity,
    communityDetails,
    communityEdit,
    userDetails,
    userInCommunity,
    newUser,
    myProfile,
    myHelpRequests,
    myHelpOffers,
    myCommunity,
    leave,
    signIn,
    signUp,
    remindPassword,
    resetPassword,
    updatePassword,
  };
};

export default useAppRoutesHandlers;
