import React from 'react';
export const MyContext = (store) => {
    return React.createContext({
        store: store
    })
};