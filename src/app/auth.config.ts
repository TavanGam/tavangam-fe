import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://lemur-14.cloud-iam.com/auth/realms/tavangam',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/auth/login',

  // The SPA's id. The SPA is registered with this id at the auth-server
  // clientId: 'server.code',
  clientId: 'angular',

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such as PKCE.
  // dummyClientSecret: 'secret',

  responseType: 'code',

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  // The api scope is a use case specific one
  scope: 'openid profile email offline_access',

  showDebugInformation: true,
  strictDiscoveryDocumentValidation: false
};
