import { Injectable, inject } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from '@/auth.config';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private oauthService = inject(OAuthService);

  configure() {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();

    // this.oauthService.events
    // .pipe(filter((e: any) => e.type === 'discovery_document_loaded'))
    // .subscribe((e) => {
    //   this.oauthService.loadUserProfile().then((userProfile) => {
    //     console.log(userProfile);
    //   });
    // });

    // Optional: For silent refresh, setup automatic refreshing
    // this.oauthService.setupAutomaticSilentRefresh();
  }

  public login() {
    this.oauthService.initCodeFlow();
  }

  public logout() {
    this.oauthService.logOut();
  }

  get idToken(): string {
    return this.oauthService.getIdToken();
  }

  get accessToken(): string {
    return this.oauthService.getAccessToken();
  }


  get isLoggedIn(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  get userProfile(): object | null {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) {
      return null;
    }
    return claims;
  }
}
