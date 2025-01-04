import { GlobalStateManager } from '../../../src/patterns/creational/singleton/index';

describe('GlobalStateManager', () => {
  let stateManager: GlobalStateManager;

  beforeEach(() => {
    stateManager = GlobalStateManager.getInstance();
  });

  it('should maintain a single instance', () => {
    const instance1 = GlobalStateManager.getInstance();
    const instance2 = GlobalStateManager.getInstance();
    expect(instance1).toBe(instance2);
  });

  it('should manage theme changes', () => {
    const mockCallback = jest.fn();
    stateManager.subscribe('theme', mockCallback);

    stateManager.setTheme('dark');
    expect(stateManager.getTheme().mode).toBe('dark');
    expect(mockCallback).toHaveBeenCalled();
    
    const theme = stateManager.getTheme();
    expect(theme.colors.background).toBe('#000000');
  });

  it('should manage feature flags', () => {
    expect(stateManager.isFeatureEnabled('betaFeatures')).toBe(true);
    
    stateManager.updateFeatureFlag('betaFeatures', false);
    expect(stateManager.isFeatureEnabled('betaFeatures')).toBe(false);
  });

  it('should handle subscriptions correctly', () => {
    const mockCallback = jest.fn();
    stateManager.subscribe('theme', mockCallback);
    stateManager.setTheme('light');
    expect(mockCallback).toHaveBeenCalledTimes(1);

    stateManager.unsubscribe('theme', mockCallback);
    stateManager.setTheme('dark');
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
}); 