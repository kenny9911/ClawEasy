declare namespace google.accounts.id {
  interface CredentialResponse {
    credential: string;
    select_by: string;
  }
  interface IdConfiguration {
    client_id: string;
    callback: (response: CredentialResponse) => void;
    auto_select?: boolean;
    use_fedcm_for_prompt?: boolean;
  }
  function initialize(config: IdConfiguration): void;
  function prompt(callback?: (notification: unknown) => void): void;
  function disableAutoSelect(): void;
  function revoke(email: string, callback?: () => void): void;
}

declare namespace google.accounts.oauth2 {
  interface TokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    error?: string;
  }
  interface TokenClientConfig {
    client_id: string;
    scope: string;
    callback: (response: TokenResponse) => void;
  }
  interface TokenClient {
    requestAccessToken: () => void;
  }
  function initTokenClient(config: TokenClientConfig): TokenClient;
}
