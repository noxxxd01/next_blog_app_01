"use client";
import Loader from "@/components/Loader";
import { Trash } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, isLoading, mutate } = useSWR(
    session?.data?.user?.name
      ? `/api/posts?username=${session.data.user.name}`
      : null,
    fetcher
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [success, setSuccess] = useState(null);

  const onSubmit = async (data) => {
    try {
      const postData = { ...data, username: session.data.user.name };

      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        setSuccess(false);
        throw new Error("Failed to create post");
      }
      mutate();
      setSuccess(true);
      reset();
      setSuccess(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status === "loading" || isLoading) {
    return <Loader />;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/sign-in");
    return null;
  }

  return (
    <div className="px-4 md:px-[10%] py-16 md:py-32 text-scampi-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-scampi-900">
            Your Published Post
          </h1>
          <p className="text-slate-600 mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            consequatur esse ducimus voluptatem.
          </p>
          <div className="grid grid-cols-1 mt-10 gap-6">
            {data?.map((post) => (
              <div className="flex flex-col md:flex-row gap-6" key={post._id}>
                <div>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={400}
                    className="w-full md:w-[18rem] h-[12rem] object-cover rounded-lg"
                  />
                </div>
                <div className="w-full">
                  <div className="flex justify-between items-center">
                    <h1 className="font-bold text-2xl">{post.title}</h1>
                    <button onClick={() => handleDelete(post._id)}>
                      <Trash className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                  <span className="text-xs text-scampi-700">
                    {new Date(post.createdAt).toDateString()}
                  </span>
                  <p className="mt-4 text-scampi-900">
                    {post.desc.slice(0, 100)}...
                  </p>
                </div>
              </div>
            ))}
            <hr className="mt-8" />
          </div>
        </div>

        <div>
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {success === true && (
              <div className="bg-green-400 text-white py-3 rounded-lg text-center">
                Post published successfully
              </div>
            )}
            {success === false && (
              <div className="bg-red-400 py-3 text-white rounded-lg text-center">
                Failed to publish post
              </div>
            )}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                placeholder="Title"
                className="px-3 py-2 border border-scampi-400 rounded-lg"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <p className="text-red-500">Title is required</p>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="desc">Short Description</label>
              <textarea
                id="desc"
                placeholder="Short Description"
                className="px-3 py-2 border border-scampi-400 rounded-lg"
                rows={5}
                {...register("desc", { required: true })}
              />
              {errors.desc && (
                <p className="text-red-500">Short Description is required</p>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="content">Content</label>
              <textarea
                id="content"
                placeholder="Content"
                className="px-3 py-2 border border-scampi-400 rounded-lg"
                rows={8}
                {...register("content", { required: true })}
              />
              {errors.content && (
                <p className="text-red-500">Content is required</p>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="image">Image Source</label>
              <input
                id="image"
                type="text"
                placeholder="Image Source"
                className="px-3 py-2 border border-scampi-400 rounded-lg"
                {...register("image", { required: true })}
              />
              {errors.image && (
                <p className="text-red-500">Image Source is required</p>
              )}
            </div>
            <div className="text-right">
              <button className="bg-scampi-700 rounded-full px-5 py-2 text-white hover:bg-scampi-800 transition-all ease-in-out duration-500">
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
