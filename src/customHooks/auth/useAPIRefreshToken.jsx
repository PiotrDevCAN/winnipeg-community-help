import { useSelector } from "react-redux";

const useAPIRefreshToken = () => {
  const { refreshToken } = useSelector((state) => state.authAPI);

  return { refreshToken };
};

export default useAPIRefreshToken;
