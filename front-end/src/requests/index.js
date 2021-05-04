const fetchLogin = (email, password) => {
  const endpoint = 'http://localhost:3001/login';
  const user = { email, password };
  return fetch(
    endpoint,
    {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(user),
    },
  )
    .then((response) => response.json())
    .then((data) => data);
};

export default fetchLogin;
