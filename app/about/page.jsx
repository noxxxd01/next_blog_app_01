import { ChevronRight, Star, StarHalf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import img1 from "../../public/img1.png";
import logo1 from "../../public/logo1.svg";
import logo2 from "../../public/logo2.svg";
import logo3 from "../../public/logo3.svg";
import logo4 from "../../public/logo4.svg";
import logo5 from "../../public/logo5.svg";

const logos = [logo1, logo2, logo3, logo4, logo5];

const About = () => {
  return (
    <div className="text-scampi-900">
      {/* Breadcrumb */}
      <div className="px-4 md:px-[10%] bg-scampi-50 py-4 flex flex-row items-center gap-4">
        <Link href="/">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/about">About</Link>
      </div>

      {/* About */}
      <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 px-4 md:px-[10%] gap-8 py-16 md:py-32">
        <div className="shadow-2xl">
          <Image
            src={img1}
            width={500}
            height={500}
            alt=""
            className="w-full h-[300px] md:h-[500px] rounded-2xl object-cover"
          />
        </div>
        <div className="flex flex-col justify-center xl:ml-32">
          <h1 className="text-3xl md:text-4xl font-bold">
            Welcome to BunBun Blog: Your Happy Place for Inspiration and
            Delight!
          </h1>
          <p className="mt-8">
            Welcome to BunBun Blog, your cozy corner of the internet where
            inspiration, creativity, and a love for all things delightful come
            to life! Whether you're here to explore helpful tips, discover fresh
            ideas, or simply enjoy a little slice of joy, you've found your
            perfect spot.
          </p>
        </div>
      </div>

      {/* Logo */}
      <div className="px-4 md:px-[10%] py-20 bg-scampi-100">
        <div className="flex flex-wrap justify-between px-8 md:px-32">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt=""
              width={300}
              height={300}
              className="w-12 h-12 opacity-70"
            />
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 text-scampi-900 flex flex-col gap-16 px-4 md:px-[10%]">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">What Readers Say</h1>
          <p>BunBun is my go-to for insightful content!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-row gap-2">
              <Star className="w-5 h-5" />
              <Star className="w-5 h-5" />
              <Star className="w-5 h-5" />
              <Star className="w-5 h-5" />
              <StarHalf className="w-5 h-5" />
            </div>
            <i className="font-medium">
              "BunBun has transformed my reading experience with its engaging
              articles! I always find something valuable here."
            </i>
            <div>
              <div className="flex items-center gap-2">
                <Image
                  src="/person1.jpg"
                  width={300}
                  height={300}
                  className="object-cover w-10 h-10 rounded-full"
                  alt=""
                />
                <div>
                  <h1 className="font-medium text-scampi-900">Emily Johnson</h1>
                  <p className="text-scampi-800">Editor, Daily News</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="flex flex-row gap-2">
              <Star className="w-5 h-5" />
              <Star className="w-5 h-5" />
              <Star className="w-5 h-5" />
              <Star className="w-5 h-5" />
              <StarHalf className="w-5 h-5" />
            </div>
            <i className="font-medium">
              "The variety of topics on BunBun keeps me coming back! I love the
              fresh perspectives offered in every post."
            </i>
            <div>
              <div className="flex items-center gap-2">
                <Image
                  src="/person2.jpg"
                  width={300}
                  height={300}
                  className="object-cover w-10 h-10 rounded-full"
                  alt=""
                />
                <div>
                  <h1 className="font-medium text-scampi-900">Michael Smith</h1>
                  <p className="text-scampi-800">Writer, Tech Blog</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="py-32 text-scampi-900 text-center px-4 md:px-[10%] bg-scampi-100">
        <h1 className="text-3xl md:text-4xl font-bold">
          Stay Updated with BunBun
        </h1>
        <p className="mt-6 w-full md:w-[560px] mx-auto">
          Subscribe to our newsletter for the latest updates and exclusive
          content delivered straight to you.
        </p>
        <div className="mt-10 flex flex-col md:flex-row gap-4 text-scampi-900 justify-center">
          <button className="border rounded-full border-scampi-400 px-6 py-2 hover:bg-scampi-400 transition-all ease-in-out duration-500">
            Subscribe
          </button>
          <button className="bg-scampi-800 rounded-full px-6 py-2 text-scampi-50 hover:bg-scampi-900 transition-all ease-in-out duration-500">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
