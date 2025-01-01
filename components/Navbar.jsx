"use client";
import { ChevronDown, Menu, Rabbit, X } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Correct import for useRouter in Next.js 13
import React, { useEffect, useRef, useState } from "react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 4,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const dropdownRef = useRef(null);
  const router = usePathname();
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const session = useSession();

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="px-5 md:px-[10%] py-4 border-b border-scampi-100">
      <div className="flex justify-between items-center ">
        <div>
          <h1 className="flex items-center space-x-2">
            <Rabbit className="w-6 h-6 text-scampi-900" />{" "}
            <span className="font-semibold text-2xl text-scampi-900">
              BunBun
            </span>
          </h1>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="xl:flex flex-row gap-4 hidden">
            {links.map((link) => (
              <Link
                href={link.url}
                key={link.id}
                className={`px-6 py-2 rounded-full transition-all ease-in-out duration-500 font-medium ${
                  router === link.url
                    ? "bg-scampi-200 text-scampi-900"
                    : "hover:bg-scampi-200 text-scampi-900"
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>
          {session.status === "authenticated" && (
            <div>
              <p
                onClick={toggleDropdown}
                className="hover:bg-scampi-200 p-2 rounded-full cursor-pointer transition-all ease-in-out duration-500"
              >
                <ChevronDown className="w-5 h-5" />
              </p>
              {dropdown && (
                <div
                  ref={dropdownRef}
                  className="absolute right-20 mt-3 w-48 bg-white border border-scampi-200 rounded-lg shadow-lg"
                >
                  <ul className="py-2">
                    <li
                      onClick={signOut}
                      className="px-4 py-2 hover:bg-scampi-100 cursor-pointer"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}

          <div className="block xl:hidden">
            <p
              onClick={toggleSidebar}
              className="hover:bg-scampi-200 p-2 rounded-full cursor-pointer transition-all ease-in-out duration-500"
            >
              <Menu className="w-5 h-5" />
            </p>
          </div>
        </div>
      </div>

      {/* Sidebar for mobile screens */}
      {sidebar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 xl:hidden">
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50">
            <div className="flex justify-between items-center p-4 border-b border-scampi-100">
              <h1 className="flex items-center space-x-2">
                <Rabbit className="w-6 h-6 text-scampi-900" />{" "}
                <span className="font-semibold text-2xl text-scampi-900">
                  BunBun
                </span>
              </h1>
              <p
                onClick={toggleSidebar}
                className="hover:bg-scampi-200 p-2 rounded-full cursor-pointer transition-all ease-in-out duration-500"
              >
                <X className="w-5 h-5" />
              </p>
            </div>
            <div className="flex flex-col p-4 space-y-4">
              {links.map((link) => (
                <Link
                  href={link.url}
                  key={link.id}
                  className={`px-6 py-2 rounded-full transition-all ease-in-out duration-500 font-medium ${
                    router === link.url
                      ? "bg-scampi-200 text-scampi-900"
                      : "hover:bg-scampi-200 text-scampi-900"
                  }`}
                  onClick={toggleSidebar}
                >
                  {link.title}
                </Link>
              ))}
              {session.status === "authenticated" && (
                <button
                  onClick={() => {
                    signOut();
                    toggleSidebar();
                  }}
                  className="px-6 py-2 rounded-full bg-scampi-700 text-white hover:bg-scampi-800 transition-all ease-in-out duration-500 font-medium"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
