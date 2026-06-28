import Constants from 'expo-constants';

const extra = Constants.expoConfig?.extra ?? {};

export const API_BASE_URL: string =
  (extra.apiBaseUrl as string | undefined) ?? 'http://localhost:8000';

export const USE_MOCK_API: boolean =
  (extra.useMockApi as boolean | undefined) ?? true;
