
const authProvider = {
  // authentication
  login: ({ username, password }) => {
    const request = new Request(
      // TODO: move host & port to .env file
      'https://127.0.0.1:3000/auth/login',
      {
        method: 'POST',
        body: JSON.stringify({ name: username, password }),
        credentials: 'include',
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Request-Method': 'GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS',
          'Access-Control-Request-Headers': 'Accept, Content-Type, Authentication, Cookie, credentials',
          
        }),
      }
    );
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((auth) => {
        console.log('AUTH ok', auth);
        const { id, type, name } = auth;
        localStorage.setItem(
          'auth',
          JSON.stringify({ id, type, name })
        );
      })
      .catch(() => {
        throw new Error('Network error');
      });
  },
  checkError: (error: { status: any; }) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('auth');
      return Promise.reject();
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem('auth')
      ? Promise.resolve()
      : Promise.reject({ message: 'login required' }),
  logout: () => {
    localStorage.removeItem('auth');
    return Promise.resolve();
  },
  getIdentity: () => {
    try {
      const auth = JSON.parse(localStorage.getItem('auth') || '');
      return Promise.resolve(auth);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  getPermissions: (params: any) => {
    console.log('get perms', JSON.stringify(params));
    return Promise.resolve();
  },
};

export default authProvider;
