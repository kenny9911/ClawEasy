declare namespace google.accounts.id {
  interface CredentialResponse {
    credential: string;
    select_by: string;
  }
  interface GsiButtonConfiguration {
    type?: 'standard' | 'icon';
    theme?: 'outline' | 'filled_blue' | 'filled_black';
    size?: 'large' | 'medium' | 'small';
    text?: 'signin_with' | 'signup_with' | 'continue_with' | 'signin';
    shape?: 'rectangular' | 'pill' | 'circle' | 'square';
    logo_alignment?: 'left' | 'center';
    width?: number;
    locale?: string;
  }
  interface IdConfiguration {
    client_id: string;
    callback: (response: CredentialResponse) => void;
    auto_select?: boolean;
    use_fedcm_for_prompt?: boolean;
  }
  function initialize(config: IdConfiguration): void;
  function renderButton(parent: HTMLElement, options: GsiButtonConfiguration): void;
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
