import auth0 from 'auth0-js';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'ecommercetrilogy.auth0.com',
        clientID: '7iJ6iP1iqwDpTAWEop4qFDlGUHJL8mFF',
        redirectUri: 'http://localhost:3000/',
        responseType: 'token id_token',
        scope: 'openid',
    });

    login() {
        this.auth0.authorize();
    }
}
