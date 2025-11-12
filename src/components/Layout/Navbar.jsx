import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, Bell, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md">
      {/* === Promo Bar === */}
      <div className="bg-orange-500 text-white text-center text-sm py-2 flex items-center justify-center gap-2">
        <span>Don't have an account? To get a 25% discount 🎉</span>
        <Link
          to="/register"
          className="bg-white text-orange-500 px-4 py-1 rounded-full text-sm font-bold hover:bg-orange-200 transition flex items-center gap-2"
        >
          Register
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-1 -1 26 26"
            className="w-4 h-4"
            fill="none"
          >
            <path
              d="M4.92893 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.0222 21.4135 8.08879 20.3147 6.4443C19.2159 4.79981 17.6541 3.51808 15.8268 2.76121C13.9996 2.00433 11.9889 1.8063 10.0491 2.19215C8.10929 2.578 6.32746 3.53041 4.92893 4.92893"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 12L15.3904 11.6877L15.6403 12L15.3904 12.3123L15 12ZM3 12.5C2.72386 12.5 2.5 12.2761 2.5 12C2.5 11.7239 2.72386 11.5 3 11.5V12V12.5ZM11 7L11.3904 6.68765L15.3904 11.6877L15 12L14.6096 12.3123L10.6096 7.31235L11 7ZM15 12L15.3904 12.3123L11.3904 17.3123L11 17L10.6096 16.6877L14.6096 11.6877L15 12ZM15 12V12.5H3V12V11.5H15V12Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>

      {/* === Main Navbar === */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white relative">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          <span className="text-orange-500">Libur.</span>
          <span className="text-black">In</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {["/", "/menu", "/blog", "/contact"].map((path, index) => {
            const names = ["Home", "Menu", "Blog", "Contact"];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-semibold"
                    : "hover:text-orange-500"
                }
              >
                {names[index]}
              </NavLink>
            );
          })}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search (desktop only) */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-full py-1.5 pl-10 pr-16 text-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
            <Search
              size={18}
              className="absolute left-3 top-2.5 text-gray-400"
            />
          </div>

          {/* Notification (desktop only) */}
          <Link to="/notifikasi" className="relative hidden md:block">
            <Bell className="text-gray-600" size={22} />
            <span className="absolute -top-1 -right-2 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              2
            </span>
          </Link>

          {/* Login */}
          <Link
            to="/login"
            className="bg-orange-500 font-bold text-white px-5 py-1.5 rounded-full text-sm hover:bg-orange-600 transition"
          >
            Login
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* === Mobile Menu === */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden">
            {["/", "/menu", "/blog", "/contact"].map((path, index) => {
              const names = ["Home", "Menu", "Blog", "Contact"];
              return (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `py-2 text-gray-700 ${
                      isActive
                        ? "text-orange-500 font-semibold"
                        : "hover:text-orange-500"
                    }`
                  }
                >
                  {names[index]}
                </NavLink>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
