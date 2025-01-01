"use client";
import { Rabbit } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const [error, setError] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "applicaiton/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        return setError(true);
      }

      response.status === 201 && router.push("/dashboard/sign-in?success");
    } catch (error) {
      setError(true);
    }
  };

  const password = watch("password");
  return (
    <div className="py-32">
      <div className="rounded-2xl shadow-lg px-8 py-12 w-[400px] border border-scampi-200 mx-auto text-scampi-900">
        <div>
          <h1 className="flex items-center text-3xl font-bold">
            <Rabbit className="w-8 h-8 mr-2" /> Sign Up to BunBun
          </h1>
          <p className="text-scampi-800 mt-2">Hopping into your world!</p>
        </div>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="john"
              className="px-4 py-2 border border-scampi-400 rounded-lg focus:outline-none"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">Name is required</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="example@example.com"
              className="px-4 py-2 border border-scampi-400 rounded-lg focus:outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Email is required</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="px-4 py-2 border border-scampi-400 rounded-lg focus:outline-none"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">Password is required</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              id="cpassword"
              type="password"
              placeholder="Confirm Password"
              className="px-4 py-2 border border-scampi-400 rounded-lg focus:outline-none"
              {...register("cpassword", {
                required: true,
                validate: (value) =>
                  value === password || "Password does not match",
              })}
            />
            {errors.cpassword && (
              <p className="text-red-500 text-sm">{errors.cpassword.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <button
              type="submit"
              className="px-4 py-2 bg-scampi-600 rounded-lg text-white hover:bg-scampi-700 transition-all ease-in-out duration-500"
            >
              Sign In
            </button>
            <div className="text-center my-3 text-sm text-red-500">
              {error && <p>Failed to create account</p>}
            </div>
            <p className="text-sm text-center mt-4">
              Already have an account?{" "}
              <Link
                href="/dashboard/sign-in"
                className="text-slate-600 font-bold"
              >
                Sign-in here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
