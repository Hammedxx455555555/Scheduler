// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Hamburger Menu */}
      <div className="md:hidden p-4 flex justify-between items-center bg-gray-800 text-white">
        <h2 className="text-xl font-semibold">My App</h2>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white w-64 min-h-screen fixed top-0 left-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <h2 className="text-xl font-semibold">Doorstep</h2>
        </div>
        <ul className="space-y-2">
          <li>
            <a  className="block px-4 py-2 hover:bg-gray-700" onClick={() => setIsSidebarOpen(false)}>Home</a>
          </li>
          <li>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="block w-full text-left px-4 py-2 hover:bg-gray-700 focus:outline-none"
            >
              Dropdown
              <span className="ml-2">▼</span>
            </button>
            {isDropdownOpen && (
              <ul className="space-y-2 pl-4">
                <li>
                  <a className="block px-4 py-2 hover:bg-gray-700" onClick={() => setIsSidebarOpen(false)}>Option 1</a>
                </li>
                <li>
                  <a  className="block px-4 py-2 hover:bg-gray-700" onClick={() => setIsSidebarOpen(false)}>Option 2</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a  className="block px-4 py-2 hover:bg-gray-700" onClick={() => setIsSidebarOpen(false)}>About</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
