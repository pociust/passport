import axios from "axios";

const server = axios.create({ baseURL: "http://localhost:3001" });

export default {
  createUser: function (userData) {
    return server.post("/api/user", userData);
  },
};