// Theme Types
type ThemeMode = 'light' | 'dark' | 'system';

// Theme Colors
interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
}

// Theme Config
interface ThemeConfig {
  mode: ThemeMode;
  colors: ThemeColors;
}

export { ThemeMode, ThemeColors, ThemeConfig };