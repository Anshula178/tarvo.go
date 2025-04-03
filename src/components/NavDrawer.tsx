import { ChevronDown, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

interface MenuItem {
  name: string;
  link: string;
  subMenu?: boolean;
  subMenuGridData?: {
    row1: {
      heading: string;
      link: string;
    }[];
  };
}

interface NavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

const NavDrawer: React.FC<NavDrawerProps> = ({ isOpen, onClose, menuItems }) => {
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);

  const handleToggleSubMenu = (index: number) => {
    setOpenSubMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
     
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      >
        
        <div
          className={`fixed top-0 left-0 h-full w-72 md:w-96 bg-white shadow-lg z-50 transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out`}
          onClick={(e) => e.stopPropagation()}
        >
        
          <div className="flex items-center justify-between p-4 border-b">
          <div className='text-2xl font-bold'>
          <Link href='/'>
            <h1 className='text-xl text-sky-600 font-bold '>Travo<span className='text-black'>.go</span></h1>
          </Link>
        </div>
            <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
              <X size={24} />
            </button>
          </div>

         
          <div className="overflow-auto h-full">
            <ul className="p-4 space-y-4">
              {menuItems.map((item, index) => (
                <li key={index} className="relative">
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => handleToggleSubMenu(index)}
                  >
                    <Link href={item.link} onClick={onClose} className="text-lg text-black hover:text-purple-600">
                      {item.name}
                    </Link>
                    {item.subMenu && (
                      <ChevronDown
                        size={16}
                        className={`ml-2 transition-transform ${
                          openSubMenuIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </div>

                  
                  {item.subMenu && openSubMenuIndex === index && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.subMenuGridData?.row1.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.link}
                          onClick={onClose}
                          className="block text-gray-700 hover:text-purple-600"
                        >
                          {subItem.heading}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavDrawer;
