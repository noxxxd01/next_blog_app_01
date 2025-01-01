"use client";
import Loader from "@/components/Loader";
import { Rabbit } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <Loader />;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const onSubmit = (data) => {
    signIn("credentials", data);
  };
  return (
    <div className="py-32">
      <div className="rounded-2xl shadow-lg px-8 py-12 w-[400px] border border-scampi-200 mx-auto text-scampi-900">
        <div>
          <h1 className="flex items-center text-3xl font-bold">
            <Rabbit className="w-8 h-8 mr-2" /> Sign In to BunBun
          </h1>
          <p className="text-scampi-800 mt-2">Hopping into your world!</p>
        </div>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
          <div className="flex flex-col">
            <button
              type="submit"
              className="px-4 py-2 bg-scampi-600 rounded-lg text-white hover:bg-scampi-700 transition-all ease-in-out duration-500"
            >
              Sign In
            </button>
            <p className="text-sm text-center mt-4">
              Don't have an account yet?{" "}
              <Link
                href="/dashboard/sign-up"
                className="text-slate-600 font-bold"
              >
                Sign-up here
              </Link>
            </p>
          </div>
        </form>
        <hr className="mt-6" />
        <div className="mt-4">
          <button
            onClick={() => signIn("google")}
            className="py-2 border border-scampi-200 rounded-lg w-full hover:bg-scampi-200 transition-all ease-in-out duration-500"
          >
            Sign in using Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
