import { useMemo } from "react";
import { useDispatch } from "react-redux";

export const useReduxAction = (action, value) => {
  const dispatch = useDispatch();
  return useMemo(() => dispatch(action(value)), [dispatch, action, value]);
};
