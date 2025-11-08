// src/components/Layout/Layout.js
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {children} {/* This is where the page content will go */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
