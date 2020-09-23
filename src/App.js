import React from 'react';
import { ThemeProvider } from "./contexts/theme.provider";
import { TabNavigation } from "./ui/components";
import { registerRootComponent } from "expo";

export default function App() {
    return (
        <ThemeProvider>
            <TabNavigation/>
        </ThemeProvider>
    );
}

registerRootComponent(App);
