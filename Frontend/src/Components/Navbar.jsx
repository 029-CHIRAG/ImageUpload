import React from "react";
import { Link,NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand / Logo */}
        <div className="text-2xl font-bold text-blue-600">ImageApp</div>

        {/* Navigation Buttons */}
        <div className="flex space-x-6 items-center">
          <div className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition">
            <Link to='/gallery'>            Gallery
</Link>
          </div>
          <div className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition">
            <Link to='/myimages'>            My Images
</Link>
          </div>
          <div className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition">
            <Link to='/upload'>            Upload
</Link>
          </div>
          <div className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition">
            <Link to='/login'>            Login
</Link>
          </div>
          <div className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 text-sm cursor-pointer transition">
            <Link to='/signup'>            Sign Up
</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
