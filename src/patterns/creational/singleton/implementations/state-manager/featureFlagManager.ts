import { FeatureFlag, FeatureFlagUpdate, FeatureFlagStorage } from '../../types/featureFlagTypes';
import { IFeatureFlagManager } from '../../interfaces/iFeatureFlagManager';

/**
 * Singleton class that manages feature flags for the application.
 * Handles feature flag states, user group restrictions, and rollout percentages.
 * Implements the IFeatureFlagManager interface.
 */
export class FeatureFlagManager implements IFeatureFlagManager {
  private static instance: FeatureFlagManager;
  private features: FeatureFlagStorage = {};

  /**
   * Private constructor to enforce singleton pattern.
   * Initializes default feature flags on instantiation.
   */
  private constructor() {
    this.initializeDefaultFeatures();
  }

  /**
   * Returns the singleton instance of FeatureFlagManager.
   * Creates the instance if it doesn't exist.
   */
  public static getInstance(): FeatureFlagManager {
    if (!FeatureFlagManager.instance) {
      FeatureFlagManager.instance = new FeatureFlagManager();
    }
    return FeatureFlagManager.instance;
  }

  /**
   * Initializes the default feature flags with their configurations.
   * Sets up initial states for dark mode and beta features.
   */
  private initializeDefaultFeatures(): void {
    this.features = {
      'dark-mode': {
        name: 'dark-mode',
        enabled: true,
        rolloutPercentage: 100
      },
      'beta-features': {
        name: 'beta-features',
        enabled: false,
        userGroups: ['beta-testers', 'developers']
      }
    };
  }

  /**
   * Retrieves a feature flag configuration by name.
   * @param name - The name of the feature flag to retrieve
   * @returns The feature flag configuration or undefined if not found
   */
  public getFeature(name: string): FeatureFlag | undefined {
    return this.features[name];
  }

  /**
   * Checks if a feature is enabled for the current context.
   * Takes into account user groups and rollout percentages.
   * @param name - The name of the feature to check
   * @param userGroup - Optional user group to check against
   * @returns Boolean indicating if the feature is enabled
   */
  public isFeatureEnabled(name: string, userGroup?: string): boolean {
    const feature = this.features[name];
    if (!feature) return false;
    if (!feature.enabled) return false;

    // Check user group if specified
    if (userGroup && feature.userGroups) {
      return feature.userGroups.includes(userGroup);
    }

    // Check rollout percentage
    if (feature.rolloutPercentage !== undefined) {
      return Math.random() * 100 < feature.rolloutPercentage;
    }

    return feature.enabled;
  }

  /**
   * Updates an existing feature flag with new configuration values.
   * @param update - Object containing the feature name and changes to apply
   */
  public updateFeature(update: FeatureFlagUpdate): void {
    const feature = this.features[update.name];
    if (feature) {
      this.features[update.name] = {
        ...feature,
        ...update.changes
      };
    }
  }

  /**
   * Adds a new feature flag to the manager.
   * Only adds if the feature doesn't already exist.
   * @param feature - The complete feature flag configuration to add
   */
  public addFeature(feature: FeatureFlag): void {
    if (!this.features[feature.name]) {
      this.features[feature.name] = feature;
    }
  }

  /**
   * Removes a feature flag from the manager.
   * @param name - The name of the feature flag to remove
   */
  public removeFeature(name: string): void {
    delete this.features[name];
  }

  /**
   * Resets all feature flags to their default configurations.
   * Primarily used for testing purposes.
   */
  public reset(): void {
    this.initializeDefaultFeatures();
  }
}
