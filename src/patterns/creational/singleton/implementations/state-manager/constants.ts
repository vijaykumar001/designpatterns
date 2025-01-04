/**
 * Default theme configurations for light and dark modes.
 */
const THEME_COLORS = {
  light: {
    primary: '#007bff',
    secondary: '#6c757d',
    background: '#ffffff',
    text: '#000000'
  },
  dark: {
    primary: '#0056b3',
    secondary: '#495057',
    background: '#000000',
    text: '#ffffff'
  }
};

/**
 * Event names used for state change notifications.
 */
const EVENTS = {
  THEME_CHANGED: 'themeChanged',
  FEATURE_FLAG_UPDATED: 'featureFlagUpdated'
};

/**
 * Default feature flag configurations.
 */
const DEFAULT_FEATURE_FLAGS: Record<string, { enabled: boolean; rolloutPercentage?: number }> = {
  newUI: { enabled: false, rolloutPercentage: 50 },
  beta: { enabled: true },
  experimental: { enabled: false, rolloutPercentage: 10 }
}; 

export { THEME_COLORS, EVENTS, DEFAULT_FEATURE_FLAGS };