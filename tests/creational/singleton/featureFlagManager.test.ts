import { FeatureFlagManager } from '../../../src/patterns/creational/singleton/index';
/**
 * Test cases for the singleton design pattern.
 */
describe('FeatureFlagManager', () => {
  let featureFlagManager: FeatureFlagManager;

  beforeEach(() => {
    featureFlagManager = FeatureFlagManager.getInstance();
    featureFlagManager.reset(); // Reset to default state
  });

  it('should maintain a single instance', () => {
    const instance1 = FeatureFlagManager.getInstance();
    const instance2 = FeatureFlagManager.getInstance();
    expect(instance1).toBe(instance2);
  });

  it('should get feature flag details', () => {
    const darkMode = featureFlagManager.getFeature('dark-mode');
    expect(darkMode).toBeDefined();
    expect(darkMode?.enabled).toBe(true);
    expect(darkMode?.rolloutPercentage).toBe(100);
  });

  it('should check if feature is enabled', () => {
    expect(featureFlagManager.isFeatureEnabled('dark-mode')).toBe(true);
    expect(featureFlagManager.isFeatureEnabled('non-existent')).toBe(false);
  });

  it('should check user group access', () => {
    expect(featureFlagManager.isFeatureEnabled('beta-features', 'beta-testers')).toBe(false);
    
    // Enable beta features
    featureFlagManager.updateFeature({
      name: 'beta-features',
      changes: { enabled: true }
    });
    
    expect(featureFlagManager.isFeatureEnabled('beta-features', 'beta-testers')).toBe(true);
    expect(featureFlagManager.isFeatureEnabled('beta-features', 'regular-user')).toBe(false);
  });

  it('should add new feature flag', () => {
    featureFlagManager.addFeature({
      name: 'new-feature',
      enabled: true,
      rolloutPercentage: 50
    });

    const feature = featureFlagManager.getFeature('new-feature');
    expect(feature).toBeDefined();
    expect(feature?.rolloutPercentage).toBe(50);
  });

  it('should update existing feature flag', () => {
    featureFlagManager.updateFeature({
      name: 'dark-mode',
      changes: {
        enabled: false,
        rolloutPercentage: 50
      }
    });

    const feature = featureFlagManager.getFeature('dark-mode');
    expect(feature?.enabled).toBe(false);
    expect(feature?.rolloutPercentage).toBe(50);
  });

  it('should remove feature flag', () => {
    featureFlagManager.removeFeature('dark-mode');
    expect(featureFlagManager.getFeature('dark-mode')).toBeUndefined();
  });
});
