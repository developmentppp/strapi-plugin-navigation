export type PluginConfigNameFields = Record<string, string[]>;
export type PluginConfigPopulate = Record<string, string[]>;

export type PluginConfigGraphQL = {
  navigationItemRelated: string[];
};

export type NavigationPluginConfig = {
  additionalFields: string[];
  contentTypes: string[];
  contentTypesNameFields: PluginConfigNameFields;
  contentTypesPopulate: PluginConfigPopulate;
  allowedLevels: number;
  gql: PluginConfigGraphQL;
  i18nEnabled: boolean;
  pruneObsoleteI18nNavigations: boolean;
};

export type StrapiConfig<T> = {
  default: T;
};

export type PluginConfigKeys = keyof NavigationPluginConfig;

export type PluginDefaultConfigGetter = (
  key: PluginConfigKeys
) => NavigationPluginConfig[typeof key];