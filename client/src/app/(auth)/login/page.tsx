/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useLogin } from "@/features/authentication/hooks/authentication-hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  LoginFields,
  loginSchema,
} from "@/features/authentication/schemas/login-schema";
import { ReloadIcon } from "@radix-ui/react-icons";
// import { useAuth } from "@/store/auth-store";
import { useRouter } from "next/navigation";
import { signInWithGoogle } from "@/lib/authentications";
import { useAuthslice } from "@/store/slices/auth-slice";

const page = () => {
  const router = useRouter();

  const { mutate, isPending } = useLogin();
  const { setNewUser, setUserInfo, setAccessToken } = useAuthslice();
  // const { login } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFields>({ resolver: zodResolver(loginSchema) });

  const onSubmit: SubmitHandler<LoginFields> = async ({
    Useremail,
    Password,
  }) => {
    // const data = await postLoginAction({ Useremail, Password });
    // if (data) {
    //   // console.log(data);
    //   login(data, router);
    // }
    // mutate(
    //   { Useremail: Useremail.toLocaleLowerCase(), Password },
    //   {
    //     onSuccess: (data) => {
    //       login(data, router);
    //     },
    //   }
    // );
  };

  const handleGoogleSubmit = () => {
    // signInWithGoogle({ router, setNewUser, setUserInfo, setAccessToken });
  };

  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              {...register("Useremail")}
            />
            {errors.Useremail && (
              <span className="text-red-500 text-sm">
                {errors.Useremail.message}
              </span>
            )}
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                href="/forgot-password"
                className="ml-auto inline-block text-sm underline"
              >
                Forgot your password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              {...register("Password")}
            />
            {errors.Password && (
              <span className="text-red-500 text-sm">
                {errors.Password.message}
              </span>
            )}
          </div>

          <Button disabled={isPending} type="submit" className="w-full">
            {isPending && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
            Login
          </Button>
        </form>
        <Button
          variant="outline"
          className="w-full"
          onClick={handleGoogleSubmit}
        >
          Login with Google
        </Button>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
