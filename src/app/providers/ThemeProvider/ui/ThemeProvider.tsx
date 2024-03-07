import { useMemo, useState, FC } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from "../lib/ThemeContext";

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface themeProviderProps {
   initialTheme?: Theme;
}

const ThemeProvider: FC<themeProviderProps> = (props) => {
   const { initialTheme, children } = props;

   const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

   const defaultProps = useMemo(() => ({ theme: theme, setTheme: setTheme }), [theme]);

   return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
