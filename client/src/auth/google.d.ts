declare namespace google.accounts.id {
  interface CredentialResponse {
    credential: string;
    select_by: string;
  }
  interface IdConfiguration {
    client_id: string;
    callback: (response: CredentialResponse) => void;
    auto_select?: boolean;
  }
  function initialize(config: IdConfiguration): void;
  function prompt(callback?: (notification: unknown) => void): void;
  function disableAutoSelect(): void;
  function revoke(email: string, callback?: () => void): void;
}
