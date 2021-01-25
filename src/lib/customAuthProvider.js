import jwtDecode from "jwt-decode";

const apiUrl = process.env.REACT_APP_BACKEND_ENDPOINT
  ? process.env.REACT_APP_BACKEND_ENDPOINT
  : "http://localhost:4000";

const customAuthProvider = {
  login: ({ username, password }) => {
    const request = new Request(apiUrl + "/auth/login", {
      method: "POST",
      body: JSON.stringify({ email: username, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ token }) => {
        const decodedToken = jwtDecode(token);
        localStorage.setItem("token", token);
        localStorage.setItem("permissions", decodedToken.permissions);
        localStorage.setItem(
          "auth_user",
          JSON.stringify({
            id: decodedToken.id,
            fullName: decodedToken.fullName,
            avatar: `https://ui-avatars.com/api/?bold=true&background=random&name=${decodedToken.fullName}`,
          })
        );
      });
  },
  checkError: (error) => {
    /* ... */
  },
  checkAuth: () => {
    return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
  },
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("permissions");
    localStorage.removeItem("auth_user");
    return Promise.resolve();
  },
  getIdentity: () => {
    try {
      const { id, fullName, avatar } = JSON.parse(
        localStorage.getItem("auth_user")
      );
      return Promise.resolve({ id, fullName, avatar });
    } catch (error) {
      return Promise.reject(error);
    }
  },
  getPermissions: () => {
    const role = localStorage.getItem("permissions");
    return role ? Promise.resolve(role) : Promise.reject();
  },
};

export default customAuthProvider;
