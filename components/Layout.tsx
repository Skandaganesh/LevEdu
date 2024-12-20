// components/Layout.js

import Navbar from './Navbar';
import Sidebar from './SideBar';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
