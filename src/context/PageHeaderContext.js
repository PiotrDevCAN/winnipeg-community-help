import React, { createContext, useContext, useReducer, useCallback } from 'react';

const PageHeaderContext = createContext();

export const usePageHeaderContext = () => useContext(PageHeaderContext);

export const PageHeaderProvider = ({ children }) => {

    const initialContainers = [
        { id: 0, content: null },
        { id: 1, content: null },
        { id: 2, content: null },
        { id: 3, content: null },
    ];

    function containersReducer(containers, action) {
        console.log('ACTION')
        console.log(action)

        switch (action.type) {
            // case 'insert': {
            //     return {
            //         ...state,
            //         content: action.content
            //     }
            // }
            case 'update': {
                return containers.map((item) => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            content: action.content,
                        }
                    } else {
                        return item;
                    }
                });
            }
            default: {
                throw Error('Unknown action: ' + action.type);
            }
        }
    }
    const [components, dispatch] = useReducer(containersReducer, initialContainers);

    const updateComponent = (id, component) => {
        dispatch({
            type: 'update',
            id: id,
            content: component,
        });
    }
    const setComponent1 = useCallback((component) => {
        updateComponent(0, component);
    }, []);
    const setComponent2 = useCallback((component) => {
        updateComponent(1, component);
    }, []);
    const setComponent3 = useCallback((component) => {
        updateComponent(2, component);
    }, []);
    const setComponent4 = useCallback((component) => {
        updateComponent(3, component);
    }, []);

    const value = {
        components,
        dispatch,
        setComponent1,
        setComponent2,
        setComponent3,
        setComponent4,
    };

    return (
        <PageHeaderContext.Provider value={value}>
            {children}
        </PageHeaderContext.Provider>
    );
}

export default PageHeaderContext;