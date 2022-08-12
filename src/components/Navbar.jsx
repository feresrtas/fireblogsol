import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Logocw from '../assets/boot.png';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { AuthContext } from '../contexts/AuthContext';
import { logOut } from '../helpers/firebase';

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const navName = currentUser.displayName;
  // const spl = (navName?.split(" "))[0];

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <img src={Logocw} alt="navlogo" onClick={() => navigate('/')} />
          <h2 className='text-white' onClick={() => navigate('/')}>
            S Blog
          </h2>

          <div className="d-flex text-white align-items-center ">
            {currentUser ? (
              <>
                <DropdownButton id="dropdown-item-button" title={navName}>
                  <Dropdown.Item
                    as="button"
                    onClick={() => navigate('/newblog')}
                  >
                    Add New
                  </Dropdown.Item>
                  <Dropdown.Item
                    as="button"
                    onClick={() => navigate('/profile')}
                  >
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Item as="button" onClick={() => logOut(navigate)}>
                    Logout
                  </Dropdown.Item>
                </DropdownButton>
              </>
            ) : (
              <>
                <DropdownButton id="dropdown-item-button" title="Profile">
                  <Dropdown.Item as="button" onClick={() => navigate('/login')}>
                    Login
                  </Dropdown.Item>
                  <Dropdown.Item
                    as="button"
                    onClick={() => navigate('/register')}
                  >
                    Register
                  </Dropdown.Item>
                </DropdownButton>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;