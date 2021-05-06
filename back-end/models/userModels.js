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

const profileUser = async (name, email) => {
  await connection.execute('UPDATE users SET name=? WHERE email=?', [name, email]);
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
  profileUser,
  update,
  exclude,
};
