import { useSelector } from "react-redux";

const useAPITokens = () => {
  const { accessToken, refreshTokens } = useSelector((state) => state.authAPI);

  return { accessToken, refreshTokens };
};

export default useAPITokens;
