import React, { useContext } from 'react';

const useCustomContext = (Context) => {
    const context = useContext(Context);

    if (context === undefined) {
        throw new Error(`${Context.displayName ? Context.displayName : 'Unknown'} Context was used outside of its Provider`);
    }

    return context;
};

export default useCustomContext;