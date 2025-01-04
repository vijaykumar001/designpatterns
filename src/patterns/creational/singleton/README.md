# Singleton Pattern Implementation

## Overview
This implementation demonstrates the Singleton pattern through two main components:
- Global State Manager: Handles application-wide state including theme and general settings
- Feature Flag Manager: Manages feature toggles with support for user groups and rollout percentages

## Problem Statement
In a large-scale application, we need to manage:
- Application themes (dark/light mode)
- User preferences
- Feature flags for A/B testing
- Global application state

These need to be:
- Consistently available throughout the application
- Thread-safe
- Memory efficient
- Observable (components need to react to changes)

## Solution
Implement a Global State Manager using the Singleton pattern that:
- Ensures only one instance of the state manager exists
- Provides a centralized point for state management
- Implements observer pattern for state changes
- Follows SOLID principles
- Handles theme switching
- Manages feature flags

## Usage 
```typescript
// Theme
// Get instance
const stateManager = GlobalStateManager.getInstance();
// Subscribe to changes
stateManager.subscribe('theme', (newTheme) => {
console.log('Theme changed:', newTheme);
});
// Update theme
stateManager.setTheme('dark');
// Check feature flag
if (stateManager.isFeatureEnabled('newUI')) {
// Use new UI
}

// Feature Flag
// Get the singleton instance
const featureFlags = FeatureFlagManager.getInstance();

// Check if a feature is enabled
if (featureFlags.isFeatureEnabled('dark-mode')) {
  // Enable dark mode
}

// Check feature for specific user group
if (featureFlags.isFeatureEnabled('beta-features', 'beta-testers')) {
  // Show beta features
}

// Add new feature flag
featureFlags.addFeature({
  name: 'new-ui',
  enabled: true,
  rolloutPercentage: 20,
  userGroups: ['beta-testers']
});

// Update feature flag
featureFlags.updateFeature({
  name: 'new-ui',
  changes: {
    rolloutPercentage: 50
  }
});
```

### Installation
npm install @patterns/singleton

## SOLID Principles Applied
1. **Single Responsibility**: Each manager handles one aspect (theme, features)
2. **Open/Closed**: New state types can be added without modifying existing code
3. **Liskov Substitution**: All managers follow their interfaces
4. **Interface Segregation**: Separate interfaces for different functionalities
5. **Dependency Inversion**: High-level modules depend on abstractions

## Best Practices
1. Always access managers through getInstance()
2. Use typescript interfaces for type safety
3. Subscribe to state changes rather than polling
4. Handle feature flag updates atomically
5. Consider user groups and rollout percentages for gradual releases

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
MIT License


