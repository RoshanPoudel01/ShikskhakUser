export interface TokenDetails {
  access_token: string;
  refresh_token: string;
}

enum Authorities {
  "tutor" = "tutor",
  "admin" = "admin"
}

export interface ShikshakTokenDetails {
  id: number;
  iat: number;
  exp: number;
  role: string;
}

function setToken(token: TokenDetails) {
  try {
    localStorage.setItem("token", token.access_token);
    localStorage.setItem("refresh_token", token.refresh_token);
  } catch (e) {
    console.error("Error storing token", e);
  }
}

function getToken() {
  try {
    return {
      access_token: localStorage.getItem("token") ?? "",
      refresh_token: localStorage.getItem("refresh_token") ?? ""
    } as TokenDetails;
  } catch (e) {
    return null;
  }
}

function getTokenDetails(): ShikshakTokenDetails | null {
  try {
    const token = getToken();
    return token
      ? (JSON.parse(
          window.atob(token.access_token.split(".")[1])
        ) as ShikshakTokenDetails)
      : null;
  } catch (e) {
    return null;
  }
}

function isAuthenticated() {
  const tokenDetails = getTokenDetails();
  if (tokenDetails) {
    return tokenDetails.exp * 1000 > Date.now();
  } else {
    return false;
  }
}

function checkRBAC(authorities: Authorities[]) {
  const tokenDetails = getTokenDetails();
  if (tokenDetails) {
    return authorities.find(auth => auth === tokenDetails.role);
  } else {
    return false;
  }
}

function clearToken() {
  localStorage.removeItem("token");
  localStorage.removeItem("refresh_token");
}

const TokenService = {
  setToken,
  getToken,
  getTokenDetails,
  isAuthenticated,
  checkRBAC,
  clearToken
};

export default TokenService;
