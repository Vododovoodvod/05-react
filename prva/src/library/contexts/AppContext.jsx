import React, { useState } from "react";

export const AppContext = React.createContext();

export const AppConsumer = AppContext.Consumer;

export function AppProvider(props) {
    const [state, setState] = useState(props.value);
    const [locale, setLocale] = useState("HR");

    const value = {
        state: state,
        locale: locale,
        setState: setState,
        setLocale: setLocale,
    };

    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
}