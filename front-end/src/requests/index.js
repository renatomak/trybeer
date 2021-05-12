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

/* function fetchGetOrders(email) {
  const endpoint = 'http://localhost:3001/orders';
  console.log(email);
  return fetch(
    endpoint,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err.message));
} */

const fetchGetOrders = (userEmail) => {
  const endpoint = 'http://localhost:3001/orders';
  const email = { email: userEmail };
  console.log(email);
  return fetch(
    endpoint,
    {
      method: 'POST',
      headers,
      body: JSON.stringify(email),
    },
  )
    .then((response) => response.json())
    .then((data) => data);
};

/**
 * delivery_address,
delivery_number,
id,
name,
price,
product_id,
quantity,
sale_date,
sale_id,
status,
total_price,
url_image,
user_id,
 */

const fetchAdminOrders = () => {
  const endpoint = 'http://localhost:3001/adminorders';
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
  fetchAdminOrders,
};
