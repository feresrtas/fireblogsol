import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const navName = currentUser.displayName;

  return <div>
    <div className='d-flex p-5 justify-content-center'>
      Merhaba {navName}, blog sitesine hoş geldin
    </div>
  </div>
};

export default Profile;
