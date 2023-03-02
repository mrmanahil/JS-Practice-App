import axios from "axios";

export const JsonServices = {
  getAll: async () => {
    return await axios.get(
      `https://hn.algolia.com/api/v1/search?query=react&page=0`
    );
  },
};
