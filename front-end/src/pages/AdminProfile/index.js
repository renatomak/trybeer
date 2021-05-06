import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AdminSideBar from '../components/AdminSideBar';

function AdminProfile(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const getProfile = async () => {
    const { history } = props;
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) history.push('/login');
    else {
      setName(user.name);
      setEmail(user.email);
    }
  };

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <div>
      <AdminSideBar title="TryBeer" />
      <h1>Perfil</h1>
      <p data-testid="profile-name">
        Nome:
        {name}
      </p>
      <p data-testid="profile-email">
        Email:
        {email}
      </p>
    </div>
  );
}

export default AdminProfile;

AdminProfile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
