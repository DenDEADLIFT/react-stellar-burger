import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from '../modal/modal'
import IngredientDetails from '../ingredient-details/ingredient-details'
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
import IngredientPage from '../../pages/ingredient-page/ingredient-page'
import OrderInfo from '../order-info/order-info'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { isAuth } from '../../services/actions/user-actions'
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import { getServerdata } from "../../services/actions/data-actions";




function App() {

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;
  const { ingredients } = useSelector(state => state.rootReducer.ingredients);
  const handleModalClose = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getServerdata());
    dispatch(isAuth());
  }, [dispatch]);

  return (ingredients.length !== 0 &&
    <>
      <Routes location={background && location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/login" element={<OnlyUnAuth component={<Login />} />} />
          <Route path="/register" element={<OnlyUnAuth component={<Register />} />} />
          <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPassword />} />} />
          <Route path="/reset-password" element={<OnlyUnAuth component={<ResetPassword />} />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/feed/:id" element={<OrderInfo />} />
          <Route path="/profile" element={<OnlyAuth component={<Profile />} />} />
          <Route path="/ingredients/:id" element={<IngredientPage data={ingredients} />} />
          <Route path="/profile/orders" element={<Orders />} />
          <Route path="/profile/orders/:id" element={<OrderInfo />} />
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
      {ingredients.length !== 0 &&
        background && (
          <Routes>
            <Route
              path='/ingredients/:id'
              element={
                <Modal onClose={handleModalClose}>
                  <IngredientDetails data={ingredients}>
                    {<CloseIcon onClick={handleModalClose} />}
                  </IngredientDetails>
                </Modal>
              }
            />
          </Routes>
        )
      }
      {ingredients.length !== 0 &&
        background && (
          <Routes>
            <Route
              path='/profile/orders/:id'
              element={
                <Modal onClose={handleModalClose}>
                  <OrderInfo >
                    {<CloseIcon onClick={handleModalClose} />}
                  </OrderInfo>
                </Modal>
              }
            />
          </Routes>
        )
      }
      {
        background && (
          <Routes>
            <Route
              path='/feed/:id'
              element={
                <Modal onClose={handleModalClose}>
                  <OrderInfo >
                    {<CloseIcon onClick={handleModalClose} />}
                  </OrderInfo>
                </Modal>
              }
            />
          </Routes>
        )
      }
    </>
  );
}

export default App;