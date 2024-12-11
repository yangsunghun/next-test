"use client";

import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const SignInForm = () => {
  console.log("sdaasdasdsda");

  const { register, handleSubmit, formState } = useForm();
  const onSubmit = (value: FieldValues) => {
    console.log(value);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 p-5 items-center w-full m-auto"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          {...register("email", {
            required: true,
          })}
          placeholder="Email"
          className="text-black"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          {...register("password", {
            required: true,
          })}
          placeholder="Password"
          className="text-black"
        />
      </div>
      <button
        className="bg-gray-800 text-white px-4 py-2 rounded-md"
        type="submit"
      >
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
