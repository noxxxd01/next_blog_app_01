import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import port1 from "../../public/portfolio1.png";
import port2 from "../../public/portfolio2.jpg";
import port3 from "../../public/portfolio3.jpg";

export const metadata = {
  title: "BunBun - Portfolio",
  description: "Discover the works of BunBun",
};

const Portfolio = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="px-4 md:px-[10%] bg-scampi-50 py-4 flex flex-row items-center gap-4">
        <Link href="/">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/portfolio">Portfolio</Link>
      </div>

      {/* Portfolio */}
      <div className="px-4 md:px-[10%] text-center text-scampi-900 py-16 md:py-32">
        <h1 className="text-3xl md:text-4xl font-extrabold">Our Portfolio</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mt-20">
          <Link href="/portfolio/illustrations">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] bg-scampi-300 rounded-2xl relative group">
              <Image
                src={port1}
                alt=""
                width={500}
                height={500}
                className="absolute w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-white text-2xl md:text-3xl">
                  Illustrations
                </h2>
              </div>
            </div>
          </Link>
          <Link href="/portfolio/websites">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] bg-scampi-300 rounded-2xl relative group">
              <Image
                src={port2}
                alt=""
                width={500}
                height={500}
                className="absolute w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-white text-2xl md:text-3xl">Websites</h2>
              </div>
            </div>
          </Link>
          <Link href="/portfolio/applications">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] bg-scampi-300 rounded-2xl relative group">
              <Image
                src={port3}
                alt=""
                width={500}
                height={500}
                className="absolute w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-white text-2xl md:text-3xl">
                  Applications
                </h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
