import jwtDecode from 'jwt-decode';

export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'sistema-empresa';
export const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'sistema-empresa123';

export type LoginRepsonse={
    access_token: string,
    token_type: string,
    expires_in: number,
    scope: string,
    userName: string,
    userId: number
}

export type Role = 'ROLE_ADMIN';

export type AccessToken = {
    exp:number,
    user_name:string,
    userId : number,
    authorities: Role[], 
}

export const saveSessionData = (loginResponse: LoginRepsonse) => {
    localStorage.setItem('authData', JSON.stringify(loginResponse));
} 

export const getSessionData = () =>{
    const sessionData = localStorage.getItem('authData') ?? '{}';
    const parsedSessionData = JSON.parse(sessionData);
    return parsedSessionData as LoginRepsonse;
}

export const getAccessTokenDecoded = () => {
    const sessionData = getSessionData();
    try{
        const tokenDecode = jwtDecode(sessionData.access_token);
        return tokenDecode as AccessToken;
    }catch(error){
        return {} as AccessToken;
    }
}

export const isTokenValid = () => {
    const {exp} = getAccessTokenDecoded();
    return Date.now() <= exp * 1000;
}

export const isAuthenticated = () =>{
    const sessionData = getSessionData();
    return sessionData.access_token && isTokenValid();
}

export const isAllowedByRole = (routeRoles: Role[] = []) =>{    
    if(routeRoles.length === 0){ return true};
    const { authorities } = getAccessTokenDecoded();
    return routeRoles.some(role => authorities?.includes(role));
}

export const logout = () => {
    localStorage.removeItem('authData');
}