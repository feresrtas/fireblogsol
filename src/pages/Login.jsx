import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ggProvider, signIn } from '../helpers/firebase';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
  };

  const ggLogin = () => {
    ggProvider(navigate);
  };

  return (
    <div className="d-flex px-5">
      <form id="register" onSubmit={handleLogin}>
        <h2 className="form-title display-4">Login</h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email adress.."
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password.."
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="link">Forgot Password?</div>
        <input
          type="submit"
          className="btn btn-primary form-control mt-2"
          value="Login"
        />
        <input
          className="btn btn-primary form-control mt-3"
          defaultValue="Continue with Google🔍"
          onClick={ggLogin}
        />
      </form>
    </div>
  );
};

export default Login;
