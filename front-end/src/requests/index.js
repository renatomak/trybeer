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

function fetchGetProducts() {
  const endpoint = 'http://localhost:3001/products';
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err.message));
}

function fetchCheckout({ email, totalPrice, deliveryAddress, deliveryNumber, itens }) {
  const endpoint = 'http://localhost:3001/checkout';
  const checkoutData = { email, totalPrice, deliveryAddress, deliveryNumber, itens };
  return fetch(
    endpoint,
    {
      method: 'POST',
      headers,
      body: JSON.stringify(checkoutData),
    },
  )
    .then((response) => response.json())
    .then((data) => data);
}

const fetchGetOrders = (userEmail) => {
  const endpoint = 'http://localhost:3001/orders';
  const email = { email: userEmail };
  return fetch(
    endpoint,
    {
      method: 'POST',
      headers,
      body: JSON.stringify(email),
    },
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

const fetchGetSalesProducts = (id) => {
  const endpoint = `http://localhost:3001/orders/${id}`;
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data);
};

const fetchAdminOrders = (id) => {
  const endpoint = `http://localhost:3001/adminorders/${id}`;
  return fetch(
    endpoint,
  )
    .then((response) => response.json())
    .then((data) => data);
};

const fetchChangeOrderStatus = () => {
  // trocar endpoint
  const endpoint = 'http://localhost:3001/adminorders/changestatus';
  return fetch(
    endpoint,
  )
    .then((response) => response.json())
    .then((data) => data);
};

export {
  fetchLogin,
  fetchRegister,
  fetchUser,
  fetchGetProducts,
  fetchCheckout,
  fetchGetOrders,
  fetchGetSalesProducts,
  fetchAdminOrders,
  fetchChangeOrderStatus,
};
