import Axios from "axios";
export const users = {
  list: async params => {
    const resp = await Axios.get("https://reqres.in/api/users", {
      params
    });
    const { data, ...meta } = resp.data;
    return { data, meta };
  },
  get: async ({ id }) => {
    const resp = await Axios.get(`https://reqres.in/api/users/${id}`, {
      params: { delay: 3 }
    });
    const { data, ...meta } = resp.data;
    return { data, meta };
  }
};

export const colours = {
  list: async params => {
    const resp = await Axios.get("https://reqres.in/api/colours", {
      params
    });
    const { data, ...meta } = resp.data;
    return { data, meta };
  }
};
