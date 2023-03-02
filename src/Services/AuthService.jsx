import http from "../http";

const AuthServices = {
  handleLogin: async (body) => {
    return http.post(`/login`, body);
  },
};
export default AuthServices;
