const connection = require('./connection');

const getByEmail = async (email) => {
  const [[user]] = await connection.execute('SELECT * FROM users WHERE email=?', [email]);
  return user;
};

const registerUser = async (name, email, password, role) => {
  await connection.execute(
    'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?);',
    [name, email, password, role],
  );
  return { name, email, role };
};

const insert = async (user) => {
  const { name, email, password, role } = user;
  await connection
  .execute('INSERT INTO users (name, email, password, role) VALUE (? ? ? ?)',
  [name, email, password, role]);
};

const update = async (user) => {
  const { id, name, email, password, role } = user;
  await connection
  .execute(
    'UPDATE users SET name=?, email=?, password=?, rolewhere=? WHERE id=?',
    [name, email, password, role, id],
);
};

const exclude = async (id) => {
  await connection.execute('DELETE FROM users where id=?', [id]);
};

module.exports = {
  getByEmail,
  registerUser,
  insert,
  update,
  exclude,
};
