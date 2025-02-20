/*
 * takes reducers from pure REDUX
 */
// import { combineReducers } from "redux";
// import offerReducer from "./offerReducer";
// import requestReducer from "./requestReducer";
// import needyReducer from "./needyReducer";
// import volunteerReducer from "./volunteerReducer";
// import userReducer from "./userReducer";

/*
 * takes reducers from REDUX TOOLKIT's slices
 */
import { combineReducers } from "redux";
// import authReducer from "@/redux/features/auth/authSlice";
import authAPIReducer from "@/redux/features/authAPI/authAPISlice";
import helpCategoryReducer from "@/redux/features/helpCategory/helpCategorySlice";
import helpTypeReducer from "@/redux/features/helpType/helpTypeSlice";
import mainCommunityReducer from "@/redux/features/mainCommunity/mainCommunitySlice";
import communityReducer from "@/redux/features/community/communitySlice";
import offerReducer from "@/redux/features/offer/offerSlice";
import requestReducer from "@/redux/features/request/requestSlice";
import needyReducer from "@/redux/features/needy/needySlice";
import volunteerReducer from "@/redux/features/volunteer/volunteerSlice";
import userReducer from "@/redux/features/user/usersSlice";

const rootReducer = combineReducers({
  // auth: authReducer,
  authAPI: authAPIReducer,
  helpCategories: helpCategoryReducer,
  helpTypes: helpTypeReducer,
  mainCommunities: mainCommunityReducer,
  communities: communityReducer,
  offers: offerReducer,
  requests: requestReducer,
  peopleInNeed: needyReducer,
  volunteers: volunteerReducer,
  users: userReducer,
});

export default rootReducer;
