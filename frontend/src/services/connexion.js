const getData = (url) => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}${url}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const postData = (url, body) => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}${url}`, {
    body: JSON.stringify(body),
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const deleteData = (url) => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}${url}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const connexion = {
  get: (url) => getData(url),
  post: (url, body) => postData(url, body),
  delete: (url) => deleteData(url),
};

export default connexion;
