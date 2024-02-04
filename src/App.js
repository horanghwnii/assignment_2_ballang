import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import MyPage from './pages/MyPage';
import SignInPage from './pages/SignInPage';
import CartPage from './pages/CartPage';
import DefaultContentLayout from './layouts/DefaultContentLayout/DefaultContentLayout';
import { AuthProvider } from './contexts/auth.context';

function App() {
  return (
    <AuthProvider>
      {/* <ProfileProvider> */}
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route element={<DefaultContentLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/product-detail/:id' element={<ProductDetailPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/user-info' element={<MyPage />} />
            <Route path='/sign-in' element={<SignInPage />} />
          </Route>
        </Route>
      </Routes>
      {/* </ProfileProvider> */}
    </AuthProvider>
  );
}

export default App;
