//rrd imports
import { Outlet } from 'react-router-dom';

//Components imports
import { Header } from '../components/Header/header';
import { Footer } from '../components/Footer/Footer';

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
