import { getConfig } from "../utils/config-utils";

const config = getConfig();
export const logoutUrl: string = `${config.authBaseUrl}/logout`
export const loginUrl: string = `${config.authBaseUrl}/login`

const accessToken = window.localStorage.getItem('accessToken');
const idToken = window.localStorage.getItem('idToken');
const refreshToken = window.localStorage.getItem('refreshToken');
let tokens = accessToken === null ? null : {
    accessToken,
    idToken
};

/**
 * Call login url to redirect to login page
 * @param code code for token exchange
 */
export const login = async (code: string) => {
  console.log("Login", code)
};

/**
 * Call token endpoint to exchange temporary code
 * with tokens.
 * @param code code for token exchange
 */
export const callback = async (code: string) => {
  console.log("Callback", code)
};

/**
 * Call Logout endpoint to clear out cookies
 * and session by server side.
 */
export const logout = async () => {
  console.log("Logout")
};

/**
 * Call Userinfo endpoint to get userinfo about current user.
 */
export const userinfo = async () => {
  console.log("Userinfo")
};

export const getTokens = () => tokens;
