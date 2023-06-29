import { Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux";
import Layout from '../../pages/layout/layout'
import Main from '../../pages/maim/maim'
import Feed from '../../pages/feed/feed'
import Profile from '../../pages/profile/profile'
import NotFound404 from '../../pages/not-found/not-found'
import Login from '../../pages/login/login'
import Register from '../../pages/register/register'
import ForgotPassword from '../../pages/forgot-password/forgot-password'
import ResetPassword from '../../pages/reset-password/reset-password'
import Orders from '../../pages/orders/orders'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { isAuth } from '../../services/actions/user-actions'
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";

function App() {

  const isForgot = useSelector((store) => store.password.passwordForgot);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isAuth());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="login" element={<OnlyUnAuth component={<Login />} />} />
        <Route path="register" element={<OnlyUnAuth component={<Register />} />} />
        <Route path="forgot-password" element={<OnlyUnAuth component={<ForgotPassword />} />} />
        <Route path="reset-password" element={<OnlyUnAuth component={isForgot ? <ResetPassword /> : !isForgot && <Login />} />} />
        <Route path="feed" element={<OnlyAuth component={<Feed />} />} />
        <Route path="profile" element={<OnlyAuth component={<Profile />} />} />
        <Route path="profile/orders" element={<Orders />} />
        <Route path="*" element={<NotFound404 />} />
      </Route>
    </Routes>
  );
}

export default App;