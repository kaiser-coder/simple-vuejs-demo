import axios from "axios";

const fetch = () => {
  return axios
    .get("https://fakestoreapi.com/users?limit=10")
    .then((response) => {
      return response.data;
    });
};

export default { fetch };
