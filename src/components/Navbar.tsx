"use client";
import { ChevronDown} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavDrawer from "./NavDrawer";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"
const Navbar = () => {
  const router=useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = Cookies.get("token");
    console.log("Token from cookies:", token);
    setIsAuthenticated(!!token);
}, []);

  const menuItems = [
    { name: "Home", link: "/" },
    {
      name: "Tours",
      link: "/tours",
      subMenu: true,
      subMenuGridData: {
        row1: [
          { heading: "Tour 1", link: "/tour1" },
          { heading: "Tour 2", link: "/tour2" },
          { heading: "Tour 3", link: "/tour3" },
        ],
      },
    },
    {
      name: "Destination",
      link: "/destination",
      subMenu: true,
      subMenuGridData: {
        row1: [
          { heading: "Destination 1", link: "/destination1" },
          { heading: "Destination 2", link: "/destination2" },
          { heading: "Destination 3", link: "/destination3" },
        ],
      },
    },
    { name: "Deals", link: "/deals" },
    { name: "Careers", link: "/careers" },
    {
      name: "Pages",
      link: "/pages",
      subMenu: true,
      subMenuGridData: {
        row1: [
          { heading: "About Us", link: "/about" },
          { heading: "Contact", link: "/contact" },
        ],
      },
    },
  ];
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
 const handleLogout = async () => {
  try {
    const res = await fetch("/api/users/logout", {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();
    if (data.success) {
      Cookies.remove("token"); 
      setIsAuthenticated(false);  
      router.push("/login"); 
    }
  } catch (error) {
    console.error("Logout failed", error);
  }
};

 
  
 
  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black  z-50 ">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <h1 className="text-4xl text-sky-600 font-bold ">
              Travo<span className="text-black">.go</span>
            </h1>
          </Link>
        </div>

        {/* Navigation Menu */}
        <ul className="hidden lg:flex gap-x-8">
          {menuItems.map((item, index) => (
            <li key={index} className="relative px-4 py-2 group">
              <Link
                href={item.link}
                className="hover:text-sky-600 transition duration-300 text-lg font-medium flex items-center"
              >
                {item.name}
                {item.subMenu && (
                  <ChevronDown
                    size={16}
                    className="ml-1 transition-transform group-hover:rotate-180"
                  />
                )}
                <span className="absolute bottom-0 left-0 h-[2px] w-full items-center bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>

              {/* Dropdown Menu */}
              {item.subMenu && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-4 w-48 hidden group-hover:block">
                  {item.subMenuGridData.row1.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.link}
                      className="block px-4 py-2 hover:bg-sky-200 rounded-lg text-gray-800"
                    >
                      {subItem.heading}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        
         
        <div className="flex items-center gap-3">
  {isAuthenticated ? (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-6 py-2 rounded-full shadow-lg transition-all duration-300 hover:bg-red-600 hover:scale-105"
    >
      Logout
    </button>
  ) : (
    <>
      <Link href="/login">
        <button className="bg-sky-600 text-white px-6 py-2 rounded-full shadow-lg transition-all duration-300 hover:bg-sky-700 hover:scale-105">
          Login
        </button>
      </Link>

      <Link href="/signup">
        <button className="bg-sky-600 text-white px-6 py-2 rounded-full shadow-lg transition-all duration-300 hover:bg-sky-700 hover:scale-105">
          Register
        </button>
      </Link>
    </>
  )}
</div>

      </div>
      <NavDrawer
        isOpen={isMenuOpen}
        onClose={toggleMenu}
        menuItems={menuItems}
      />
    </nav>
  );
};

export default Navbar;
