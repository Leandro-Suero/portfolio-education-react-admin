import { fetchUtils } from "react-admin";
import { stringify } from "query-string";

const apiUrl = process.env.REACT_APP_BACKEND_ENDPOINT
  ? process.env.REACT_APP_BACKEND_ENDPOINT
  : "http://localhost:4000";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  // const { token } = JSON.parse(localStorage.getItem("auth"));
  // options.headers.set('Authorization', `Bearer ${token}`);
  options.headers.set("x-access-token", localStorage.getItem("token"));
  return fetchUtils.fetchJson(url, options);
};

const customRestDataProvider = {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      // range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      limit: JSON.stringify(perPage),
      offset: JSON.stringify((page - 1) * perPage),
      filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json.data,
      total: parseInt(headers.get("content-range").split("/").pop(), 10),
    }));
  },

  getOne: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
      data: json.data,
    })),

  getMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    return httpClient(url).then(({ json }) => ({ data: json.data }));
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      total: parseInt(headers.get("content-range").split("/").pop(), 10),
    }));
  },

  update: (resource, params) => {
    switch (resource) {
      case "events":
        let previousUsers = params.previousData.users.map((user) => user.id);
        let updatedUsers = params.data.users.map((user) => user.id);
        let addedUsers = params.data.name;
        let newUsers = [...updatedUsers, ...addedUsers];
        let usersToAdd = newUsers.filter((x) => !previousUsers.includes(x));
        let usersToRemove = previousUsers.filter((x) => !newUsers.includes(x));

        params.data.usersToAdd = usersToAdd;
        params.data.usersToRemove = usersToRemove;
        delete params.data.users;
        delete params.data.name;
        break;

      default:
        break;
    }

    return httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json.data }));
  },

  updateMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json.data }));
  },

  create: (resource, params) =>
    httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data, id: json.data.id },
    })),

  delete: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json.data })),

  deleteMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "DELETE",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json.data }));
  },
};

export default customRestDataProvider;
