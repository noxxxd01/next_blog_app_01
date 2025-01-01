import Image from "next/image";
import React from "react";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className="px-4 md:px-[10%] text-scampi-900 py-16 md:py-32">
      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold">Our Works</h1>
        <h2 className="text-xl capitalize mt-4">{params.category}</h2>
      </div>

      <div className="grid grid-cols-1 gap-10 md:gap-20 mt-10">
        {data.map((item) => (
          <div
            className="grid grid-cols-1 md:grid-cols-2 items-center"
            key={item.id}
          >
            <div className="space-y-6 mt-4 md:pr-10">
              <h1 className="text-2xl font-bold">{item.title}</h1>
              <p className="mr-0 md:mr-10">{item.desc}</p>
              <button className="bg-scampi-800 rounded-full px-6 py-2 text-scampi-50 hover:bg-scampi-900 transition-all ease-in-out duration-500">
                Learn More
              </button>
            </div>
            <div className="flex justify-center items-center mt-4 md:mt-0">
              <Image
                src={item.image}
                alt=""
                width={400}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
