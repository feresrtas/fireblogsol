import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import Login from '../pages/Login';
import NewBlog from '../pages/NewBlog';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/newblog" element={<NewBlog />} />
        <Route path="/details/:id" element={<PrivateRouter />}>
          <Route path="" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
