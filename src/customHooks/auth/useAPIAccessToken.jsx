import { useSelector } from "react-redux";

const useAPIAccessToken = () => {
  const { accessToken } = useSelector((state) => state.authAPI);

  return { accessToken };
};

export default useAPIAccessToken;
