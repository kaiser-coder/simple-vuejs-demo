import axios from "axios";

const fetch = () => {
  return axios
    .get("https://fakestoreapi.com/products?limit=24")
    .then((response) => {
      return response.data;
    });
};

export default { fetch };
