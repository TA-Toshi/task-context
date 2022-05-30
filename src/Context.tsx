import { ReactElement, useEffect, useState } from 'react';
import { useContext } from 'react';
import React from 'react';

type Theme = 'light' | 'dark';

const nextTheme = React.createContext<Theme>('light');

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    return (
        <nextTheme.Provider value={props.theme}>
            {props.children}
        </nextTheme.Provider>
    );
}

export function useTheme(): Theme {
    return useContext(nextTheme);
}
