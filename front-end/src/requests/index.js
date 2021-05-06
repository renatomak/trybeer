const headers = { 'Content-type': 'application/json' };

const fetchLogin = (email, password) => {
  const endpoint = 'http://localhost:3001/login';
  const user = { email, password };
  return fetch(
    endpoint,
    {
      method: 'POST',
      headers,
      body: JSON.stringify(user),
    },
  )
    .then((response) => response.json())
    .then((data) => data);
};

const fetchRegister = (name, email, password, role) => {
  const endpoint = 'http://localhost:3001/register';
  const user = { name, email, password, role };
  return fetch(
    endpoint,
    {
      method: 'POST',
      headers,
      body: JSON.stringify(user),
    },
  )
    .then((response) => response.json())
    .then((data) => data);
};

const fetchUser = (name, email) => {
  const endpoint = 'http://localhost:3001/profile';
  const user = { name, email };
  return fetch(
    endpoint,
    {
      method: 'POST',
      headers,
      body: JSON.stringify(user),
    },
  )
    .then((response) => response.json())
    .then((data) => data);
};

export {
  fetchLogin,
  fetchRegister,
  fetchUser,
};
