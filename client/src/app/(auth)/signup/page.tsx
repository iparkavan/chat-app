/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  SignupFields,
  signupSchema,
} from "@/features/authentication/schemas/signup-schema";
import { zodResolver } from "@hookform/resolvers/zod";

const page = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignupFields>({ resolver: zodResolver(signupSchema) });

  const onSubmit: SubmitHandler<SignupFields> = async ({
    firstName,
    lastName,
    email,
    password,
  }) => {};

  return (
    <div className="flex items-center justify-center py-12">
      <form
        className="mx-auto grid w-[350px] gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-balance text-muted-foreground">
            Enter your information to create an account
          </p>
        </div>
        <div>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input
                  id="first-name"
                  {...register("firstName")}
                  placeholder="Max"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  id="last-name"
                  placeholder="Robinson"
                  {...register("lastName")}
                  required
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register("email")}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" {...register("password")} />
            </div>
            <Button type="submit" className="w-full">
              Create an account
            </Button>
            <Button variant="outline" className="w-full">
              Sign up with GitHub
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
