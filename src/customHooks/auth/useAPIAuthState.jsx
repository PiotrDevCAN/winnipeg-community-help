import { useSelector } from "react-redux";

const useAPIAuthContextState = () => {
  const state = useSelector((state) => state.authAPI);

  return state;
};

export default useAPIAuthContextState;
