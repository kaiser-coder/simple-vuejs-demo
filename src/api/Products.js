// import axios from "axios";

/* const getProducts = () => {
  axios
    .get("https://fakestoreapi.com/users?limit=3")
    .then((response) => response.data);
}; */

const getProducts = () => {
  return [
    {
      id: 1,
      title: "Ab qui reprehenderit optio commodi quidem",
      price: 1500,
      image: "",
      description:
        "Velit aliquid rerum qui maiores. Distinctio enim pariatur rem eius velit ut. Ipsam voluptates est et dolor doloribus. Sequi dignissimos enim non. Enim et sint et voluptatem vitae mollitia. Voluptate asperiores necessitatibus mollitia sed vel.",
    },
    {
      id: 2,
      title: "Ab qui reprehenderit optio commodi quidem",
      price: 1500,
      image: "",
      description:
        "Velit aliquid rerum qui maiores. Distinctio enim pariatur rem eius velit ut. Ipsam voluptates est et dolor doloribus. Sequi dignissimos enim non. Enim et sint et voluptatem vitae mollitia. Voluptate asperiores necessitatibus mollitia sed vel.",
    },
    {
      id: 3,
      title: "Ab qui reprehenderit optio commodi quidem",
      price: 1500,
      image: "",
      description:
        "Velit aliquid rerum qui maiores. Distinctio enim pariatur rem eius velit ut. Ipsam voluptates est et dolor doloribus. Sequi dignissimos enim non. Enim et sint et voluptatem vitae mollitia. Voluptate asperiores necessitatibus mollitia sed vel.",
    },
    {
      id: 4,
      title: "Ab qui reprehenderit optio commodi quidem",
      price: 1500,
      image: "",
      description:
        "Velit aliquid rerum qui maiores. Distinctio enim pariatur rem eius velit ut. Ipsam voluptates est et dolor doloribus. Sequi dignissimos enim non. Enim et sint et voluptatem vitae mollitia. Voluptate asperiores necessitatibus mollitia sed vel.",
    },
  ];
};

export default { getProducts };
