import React, { createContext, useMemo, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import { DarkTheme, LightTheme } from '../ui/themes'

const ThemeContext = createContext();

const PREFERENCES_KEY = "@preferences";

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(LightTheme);

    useEffect(() => {
        const restorePreferences = async () => {
            const prefsString = await AsyncStorage.getItem(PREFERENCES_KEY);
            const preferences = JSON.parse(prefsString);

            const currentTheme = preferences.theme === 'dark' ? DarkTheme : LightTheme;

            setTheme(currentTheme);
        };
        restorePreferences();
    }, []);

    //DidMount with DidUpdate
    useEffect(() => {
        const savePreferences = async () => {
            const preferences = {
                theme: theme === DarkTheme ? "dark" : "light"
            };

            await AsyncStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences))
        };
        savePreferences()
    }, [theme]);

    const toggleTheme = () => {
        setTheme((theme) => (theme === DarkTheme ? LightTheme : DarkTheme));
    };

    const value = useMemo(
        () => ({
            theme,
            toggleTheme
        }), [theme]
    );

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
};

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error("useTheme must be used inside a ThemeContext");
    }

    return {
        theme: context.theme,
        toggleTheme: context.toggleTheme,
    };
};
