import { useDispatch } from "react-redux";
import {
  refreshTokenAction,
  loginAction,
  logoutAction,
} from "@/redux/features/authAPI/authAPISlice";

const appUser = import.meta.env.VITE_APP_API_USER;
const appPassword = import.meta.env.VITE_APP_API_PASSWORD;

const credentials = {
  username: appUser,
  password: appPassword,
};

const useAPIAuthActions = () => {
  const dispatch = useDispatch();

  const refreshToken = () => {
    dispatch(refreshTokenAction);
  };
  const login = () => {
    console.log("dispatch login");
    dispatch(loginAction(credentials));
  };
  const logout = () => {
    dispatch(logoutAction());
  };
  // fetchAllOffers: () => dispatch(fetchOffers()),
  // fetchOfferById: (id) => dispatch(getRecordById(id)),
  // addOffer: (offer) => dispatch(createOffer(offer)),
  // modifyOffer: (id, updatedData) =>
  //   dispatch(updateOffer({ id, updatedData })),
  // removeOffer: (id) => dispatch(deleteOffer(id)),
  // };

  return { refreshToken, login, logout };
};

export default useAPIAuthActions;
