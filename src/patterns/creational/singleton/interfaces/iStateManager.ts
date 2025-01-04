import { ThemeMode, ThemeConfig } from '../types/themeTypes';

/**
 * Interface defining the core functionality of a state manager.
 * Provides methods for theme management, feature flags, and event subscription.
 */
export interface IStateManager {
  /**
   * Subscribes a callback function to a specific event.
   * @param event - Event name to subscribe to
   * @param callback - Function to be called when event occurs
   */
  subscribe(event: string, callback: (data: any) => void): void;

  /**
   * Unsubscribes a callback from a specific event.
   * @param event - Event name to unsubscribe from
   * @param callback - Function to be removed from subscribers
   */
  unsubscribe(event: string, callback: (data: any) => void): void;

  /**
   * Gets the current theme configuration.
   * @returns Current theme settings
   */
  getTheme(): ThemeConfig;

  /**
   * Updates the application theme mode.
   * @param mode - New theme mode to apply
   */
  setTheme(mode: ThemeMode): void;

  /**
   * Checks if a specific feature is enabled.
   * @param featureName - Name of the feature to check
   * @returns Whether the feature is enabled
   */
  isFeatureEnabled(featureName: string): boolean;

  /**
   * Updates the enabled status of a feature flag.
   * @param featureName - Name of the feature to update
   * @param enabled - New enabled status
   */
  updateFeatureFlag(featureName: string, enabled: boolean): void;
} 