import { IStateManager } from '../../interfaces/iStateManager';
import { ThemeMode, ThemeConfig } from '../../types/themeTypes';
import { FeatureFlag } from '../../types/featureFlagTypes';
import { THEME_COLORS } from './constants';

/**
 * Singleton class that manages global application state including theme and feature flags.
 * Implements the Observer pattern for state changes notification.
 */
export class GlobalStateManager implements IStateManager {
  private static instance: GlobalStateManager;
  private subscribers: Map<string, Set<(data: any) => void>>;
  private theme: ThemeConfig;
  private featureFlags: Map<string, FeatureFlag>;

  /**
   * Private constructor to prevent direct instantiation.
   * Initializes default theme and feature flags.
   */
  private constructor() {
    this.subscribers = new Map();
    this.featureFlags = new Map();
    
    // Initialize with default theme
    this.theme = {
      mode: 'light',
      colors: THEME_COLORS.light
    };

    // Initialize default feature flags
    this.initializeFeatureFlags();
  }

  /**
   * Returns the singleton instance of GlobalStateManager.
   * Creates the instance if it doesn't exist.
   */
  public static getInstance(): GlobalStateManager {
    if (!GlobalStateManager.instance) {
      GlobalStateManager.instance = new GlobalStateManager();
    }
    return GlobalStateManager.instance;
  }

  /**
   * Subscribes a callback function to a specific event.
   * @param event - The event name to subscribe to
   * @param callback - The callback function to be executed when the event occurs
   */
  public subscribe(event: string, callback: (data: any) => void): void {
    if (!this.subscribers.has(event)) {
      this.subscribers.set(event, new Set());
    }
    this.subscribers.get(event)!.add(callback);
  }

  /**
   * Unsubscribes a callback function from a specific event.
   * @param event - The event name to unsubscribe from
   * @param callback - The callback function to be removed
   */
  public unsubscribe(event: string, callback: (data: any) => void): void {
    if (this.subscribers.has(event)) {
      this.subscribers.get(event)!.delete(callback);
    }
  }

  /**
   * Returns a copy of the current theme configuration.
   * @returns The current theme configuration
   */
  public getTheme(): ThemeConfig {
    return { ...this.theme };
  }

  /**
   * Updates the theme mode and associated colors.
   * Notifies subscribers of the change.
   * @param mode - The new theme mode to set
   */
  public setTheme(mode: ThemeMode): void {
    this.theme.mode = mode;
    this.updateThemeColors(mode);
    this.notify('theme', this.theme);
  }

  /**
   * Checks if a feature flag is enabled.
   * Takes into account rollout percentages if defined.
   * @param featureName - The name of the feature to check
   * @returns Boolean indicating if the feature is enabled
   */
  public isFeatureEnabled(featureName: string): boolean {
    const feature = this.featureFlags.get(featureName);
    if (!feature) return false;

    if (feature.rolloutPercentage !== undefined) {
      return this.isUserInRolloutPercentage(feature.rolloutPercentage);
    }

    return feature.enabled;
  }

  /**
   * Updates the enabled status of a feature flag.
   * Notifies subscribers of the change.
   * @param featureName - The name of the feature to update
   * @param enabled - The new enabled status
   */
  public updateFeatureFlag(featureName: string, enabled: boolean): void {
    const feature = this.featureFlags.get(featureName);
    if (feature) {
      feature.enabled = enabled;
      this.notify('featureFlag', { name: featureName, enabled });
    }
  }

  /**
   * Notifies all subscribers of an event with the provided data.
   * @param event - The event name to notify
   * @param data - The data to pass to subscribers
   */
  private notify(event: string, data: any): void {
    if (this.subscribers.has(event)) {
      this.subscribers.get(event)!.forEach(callback => callback(data));
    }
  }

  /**
   * Initializes default feature flags with their configurations.
   */
  private initializeFeatureFlags(): void {
    this.featureFlags.set('newUI', {
      name: 'newUI',
      enabled: false,
      rolloutPercentage: 20
    });
    this.featureFlags.set('betaFeatures', {
      name: 'betaFeatures',
      enabled: true,
      userGroups: ['beta-testers']
    });
  }

  /**
   * Updates theme colors based on the selected theme mode.
   * @param mode - The theme mode to set colors for
   */
  private updateThemeColors(mode: ThemeMode): void {
    this.theme.colors = mode === 'dark' ? THEME_COLORS.dark : THEME_COLORS.light;
  }

  /**
   * Determines if a user falls within a feature's rollout percentage.
   * @param percentage - The rollout percentage to check against
   * @returns Boolean indicating if user is within the rollout percentage
   */
  private isUserInRolloutPercentage(percentage: number): boolean {
    return Math.random() * 100 < percentage;
  }
} 