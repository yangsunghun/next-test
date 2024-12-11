"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

const signInSchema = z.object({
  email: z.string().email("invalid email").min(1, {
    message: "email required",
  }),
  password: z.string(),
});

console.log(signInSchema);

const SignInForm = () => {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "123",
      password: "",
    },
    resolver: zodResolver(signInSchema),
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
          {...register("email")}
          placeholder="Email"
          className="text-black"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          {...register("password")}
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
