import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';

const Header = lazy(() => import('./Header/Header'));
const MainPage = lazy(() => import('pages/MainPage'));

const Footer = lazy(() => import('./Footer/Footer'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <MainPage />
        <Footer />
      </Suspense>
    </>
  );
};
