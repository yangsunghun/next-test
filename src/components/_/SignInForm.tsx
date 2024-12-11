"use client";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

const signInSchema = z.object({
  email: z.string().email({ message: "invalid email" }),
  password: z.string(),
});

const SignInForm = () => {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "123",
      password: "",
    },
  });
  const onSubmit = (value: FieldValues) => {
    console.log(signInSchema.parse(value));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 p-5 items-center w-full m-auto"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          // type="email"
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
