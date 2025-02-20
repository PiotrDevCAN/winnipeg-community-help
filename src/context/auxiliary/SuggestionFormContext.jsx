import React, { createContext, useMemo, useState } from "react";
import useCustomContext from "@/customHooks/useCustomContext";

const SuggestionFormContext = createContext();
SuggestionFormContext.displayName = "Suggestion Form";

export const useSuggestionFormContext = () =>
  useCustomContext(SuggestionFormContext);

export const SuggestionFormProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const contextValue = useMemo(
    () => ({
      open,
      setOpen,
    }),
    [open]
  );

  return (
    <SuggestionFormContext.Provider value={contextValue}>
      {children}
    </SuggestionFormContext.Provider>
  );
};

export default SuggestionFormContext;
