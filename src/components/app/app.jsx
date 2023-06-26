import { Routes, Route } from 'react-router-dom';
import Layout from '../../pages/layout/layout'
import Main from '../../pages/maim/maim'
import Feed from '../../pages/feed/feed'
import Profile from '../../pages/profile/profile'
import NotFound404 from '../../pages/not-found/not-found'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound404 />} />
      </Route>
    </Routes>
  );
}

export default App;