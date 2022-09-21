import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Sider from './Sider';

const Layout = () => {
  return (
    <>
      <Sider />
      <div className='flex flex-col flex-1'>
        <Header />
        <main className="flex flex-1 ">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;