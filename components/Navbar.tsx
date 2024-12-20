import { FaSearch } from "react-icons/fa";

const Navbar: React.FC = () => (
  <header className="sticky top-0 z-50 flex items-center justify-between bg-gray-800 p-4 shadow-md">
    {/* Logo */}
    <div className="text-xl font-bold text-red-500 flex items-center">
      <span className="mr-2">📹</span> LevEdu
    </div>

    {/* Search Bar */}
    <div className="relative w-full max-w-lg">
      <input
        type="text"
        placeholder="Search..."
        className="w-full rounded-full px-4 py-2 text-gray-900 focus:outline-none"
      />
      <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
    </div>

    {/* Placeholder for Profile */}
    <div className="text-white">👤</div>
  </header>
);

export default Navbar;
