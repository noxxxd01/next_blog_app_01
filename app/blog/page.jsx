import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function fetchData() {
  const response = await fetch("https://bunbun.vercel.app/api/posts", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}

const Blog = async () => {
  const posts = await fetchData();
  return (
    <div className="text-scampi-900">
      {/* Breadcrumb */}
      <div className="px-4 md:px-[10%] bg-scampi-50 py-4 flex flex-row items-center gap-4">
        <Link href="/">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/blog">Blog</Link>
      </div>

      <div className="text-center px-4 md:px-[10%] py-16 md:py-32">
        <h1 className="text-3xl md:text-4xl font-extrabold">Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 md:mt-16">
          {posts.map((post) => (
            <div key={post._id} className="text-left space-y-2 shadow-lg">
              <div>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={400}
                  className="w-full h-[200px] sm:h-[300px] lg:h-[400px] object-cover rounded-t-xl"
                />
              </div>
              <div className="flex flex-col gap-3 px-3 pb-6">
                <h1 className="text-xl font-bold">{post.title}</h1>
                <p className="text-sm text-scampi-700">
                  <span>by {post.username}</span> |{" "}
                  <span className="text-xs text-scampi-700">
                    {new Date(post.createdAt).toDateString()}
                  </span>
                </p>
                <p>{post.desc.slice(0, 50)}...</p>
                <Link href={`/blog/${post._id}`}>
                  <button className="bg-scampi-800 mt-4 w-[150px] rounded-full px-6 py-2 text-scampi-50 hover:bg-scampi-900 transition-all ease-in-out duration-500">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
