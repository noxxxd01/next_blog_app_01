import React from "react";
import Image from "next/image";
import Link from "next/link";

async function fetchData(id) {
  const response = await fetch(`https://bunbun.vercel.app/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

async function fetchPosts() {
  const response = await fetch("https://bunbun.vercel.app/api/posts", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}

export async function generateMetadata({ params }) {
  const post = await fetchData(params.id);

  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await fetchData(params.id);
  const blogPosts = await fetchPosts();
  return (
    <div className="px-4 md:px-[10%] py-16 md:py-32 text-scampi-900">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold">{data.title}</h1>
        <p className="text-sm text-scampi-700 mt-4">
          <span>by {data.username}</span> |{" "}
          <span>{new Date(data.createdAt).toDateString()}</span>
        </p>
      </div>
      <div className="mt-10">
        <Image
          src={data.image}
          alt={data.title}
          width={800}
          height={400}
          className="w-full h-[600px] object-cover rounded-2xl"
        />
      </div>
      <div className="mt-10">
        <p className="text-lg">{data.desc}</p>
        <div className="mt-6 text-base leading-7">{data.content}</div>
      </div>

      <div className="py-20 text-scampi-900">
        <h1 className="text-3xl md:text-4xl font-bold">Recent Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {blogPosts.slice(0, 3).map((blog) => (
            <div key={blog._id} className="text-left space-y-2 shadow-lg">
              <div>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={400}
                  className="w-full h-[200px] sm:h-[300px] lg:h-[400px] object-cover rounded-t-xl"
                />
              </div>
              <div className="flex flex-col gap-3 px-3 pb-6">
                <h1 className="text-xl font-bold">{blog.title}</h1>
                <p className="text-sm text-scampi-700">
                  <span>by {blog.username}</span> |{" "}
                  <span className="text-xs text-scampi-700">
                    {new Date(blog.createdAt).toDateString()}
                  </span>
                </p>
                <p>{blog.desc.slice(0, 50)}...</p>
                <Link href={`/blog/${blog._id}`}>
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

export default BlogPost;
