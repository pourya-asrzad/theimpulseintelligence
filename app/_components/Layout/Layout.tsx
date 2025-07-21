import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import type {ReactNode} from 'react';
const Layout = ({children}: {children: ReactNode}) => {
  return (
    <div className="relative bg-gray-50">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
