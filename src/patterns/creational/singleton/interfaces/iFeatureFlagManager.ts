import { FeatureFlag, FeatureFlagUpdate } from '../types/featureFlagTypes';

/**
 * Interface defining the core functionality for feature flag management.
 * Provides methods for retrieving, checking, and modifying feature flags.
 */
export interface IFeatureFlagManager {
  /**
   * Retrieves a feature flag configuration by name.
   * @param name - The name of the feature flag to retrieve
   * @returns The feature flag configuration if found, undefined otherwise
   */
  getFeature(name: string): FeatureFlag | undefined;

  /**
   * Checks if a feature is enabled for the current context.
   * Takes into account user groups and rollout percentages if configured.
   * @param name - The name of the feature to check
   * @param userGroup - Optional user group to check against feature restrictions
   * @returns Boolean indicating if the feature is enabled
   */
  isFeatureEnabled(name: string, userGroup?: string): boolean;

  /**
   * Updates an existing feature flag with new configuration values.
   * @param update - Object containing the feature name and changes to apply
   */
  updateFeature(update: FeatureFlagUpdate): void;

  /**
   * Adds a new feature flag to the system.
   * @param feature - The complete feature flag configuration to add
   */
  addFeature(feature: FeatureFlag): void;

  /**
   * Removes a feature flag from the system.
   * @param name - The name of the feature flag to remove
   */
  removeFeature(name: string): void;
} 