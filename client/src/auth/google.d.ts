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
  interface ButtonConfig {
    type?: 'standard' | 'icon';
    theme?: 'outline' | 'filled_blue' | 'filled_black';
    size?: 'large' | 'medium' | 'small';
    text?: 'signin_with' | 'signup_with' | 'continue_with' | 'signin';
    shape?: 'rectangular' | 'pill' | 'circle' | 'square';
    width?: number;
  }
  function initialize(config: IdConfiguration): void;
  function prompt(callback?: (notification: unknown) => void): void;
  function renderButton(parent: HTMLElement, config: ButtonConfig): void;
  function disableAutoSelect(): void;
  function revoke(email: string, callback?: () => void): void;
}
