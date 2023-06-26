import { Routes, Route } from 'react-router-dom';
import Layout from '../../pages/layout/layout'
import Main from '../../pages/maim/maim'
import Feed from '../../pages/feed/feed'
import Profile from '../../pages/profile/profile'
import NotFound404 from '../../pages/not-found/not-found'
import Login from '../../pages/login/login'
import Register from '../../pages/register/register'
import ForgotPassword from '../../pages/forgot-password/forgot-password'
import ResetPassword from '../../pages/reset-password/reset-password'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound404 />} />
      </Route>
    </Routes>
  );
}

export default App;