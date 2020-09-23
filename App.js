import React from 'react';
import { ThemeProvider } from "./src/contexts/theme.provider";
import { TabNavigation } from "./src/ui/components";

export default function App() {
    return (
        <ThemeProvider>
            <TabNavigation/>
        </ThemeProvider>
    );
}
