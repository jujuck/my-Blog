const getData = (url) => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}${url}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const connexion = {
  get: (url) => getData(url),
};

export default connexion;
