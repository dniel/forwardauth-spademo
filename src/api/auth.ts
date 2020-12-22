/**
 * Authentication Service for OAuth2 token handling.
 *
 * The tokens received is stored in cookies and are
 * accessibly to other parts of the application by public
 * methods to read them.
 *
 */
class AuthService {

  private baseUrl: string
  private accessToken: string | null = AuthService.getCookie('ACCESS_TOKEN');
  private idToken: string | null = AuthService.getCookie('JWT_TOKEN');
  private refreshToken: string | null = AuthService.getCookie('REFRESH_TOKEN');

  /**
   * Construct AuthenticationService.
   * Load existing tokens from localStorage.
   *
   * @param config application config object.
   */
  constructor (authBaseUrl:string) {
    this.baseUrl = authBaseUrl;
  }

  // Given a cookie key `name`, returns the value of
  // the cookie or `null`, if the key is not found.
  static getCookie(name: string): string | null{
    const nameLenPlus = (name.length + 1);
    return document.cookie
      .split(';')
      .map(c => c.trim())
      .filter(cookie => {
        return cookie.substring(0, nameLenPlus) === `${name}=`;
      })
      .map(cookie => {
        return decodeURIComponent(cookie.substring(nameLenPlus));
      })[0] || null;
  }

  /**
   * Check if an Access Token is set.
   * or else if no token is found, return false.
   */
  get isAuthenticated(): boolean{
    return this.accessToken!==null
  }

  get loginUrl() : string {
    return `${this.baseUrl}/login`;
  }

  get logoutUrl() : string {
    return `${this.baseUrl}/logout`;
  }

  get tokens() : Record<"accessToken" | "idToken" | "refreshToken", string | null>{
    return {
      accessToken: this.accessToken,
      idToken: this.idToken,
      refreshToken: this.refreshToken
    };
  }
}

export default AuthService
