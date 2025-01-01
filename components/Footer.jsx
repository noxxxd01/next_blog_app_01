import { Facebook, Instagram, Rabbit, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const socials = [
  {
    id: 1,
    icon: <Facebook />,
    url: "https://www.facebook.com",
  },
  {
    id: 2,
    icon: <Instagram />,
    url: "https://www.instagram.com",
  },
  {
    id: 3,
    icon: <Twitter />,
    url: "https://www.x.com",
  },
];

const Footer = () => {
  return (
    <div className="px-5 md:px-[10%] bg-scampi-900 text-scampi-50 pt-16 pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="flex items-center space-x-2">
            <Rabbit className="w-6 h-6 text-scampi-50" />{" "}
            <span className="font-semibold text-2xl text-scampi-50">
              BunBun
            </span>
          </h1>
          <p className="text-sm pt-2">&copy;2024 Logo All rights reserved.</p>
        </div>
        <div className="flex items-center gap-6">
          {socials.map((social) => (
            <Link
              key={social.id}
              href={social.url}
              className="w-4 h-4 hover:text-scampi-700 transition-all ease-in-out duration-500"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
