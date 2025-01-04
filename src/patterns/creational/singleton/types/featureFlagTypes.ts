// Feature Flag
interface FeatureFlag {
  name: string;
  enabled: boolean;
  rolloutPercentage?: number;
  userGroups?: string[];
}

// Feature Flag Update
type FeatureFlagUpdate = {
  name: string;
  changes: Partial<Omit<FeatureFlag, 'name'>>;
};

// Feature Flag Storage
interface FeatureFlagStorage {
  [key: string]: FeatureFlag;
}

export { FeatureFlag, FeatureFlagUpdate, FeatureFlagStorage };