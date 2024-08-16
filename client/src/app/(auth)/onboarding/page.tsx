"use client";
/* eslint-disable react-hooks/rules-of-hooks */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { routes } from "@/constants/routes";
import { useAuthslice } from "@/store/slices/auth-slice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FormEvent, FormEventHandler, useEffect } from "react";
import Cookies from "js-cookie";
import { ACCESS_TOKEN } from "@/lib/authentications";
import { axios } from "@/lib/axios";
import { OnboardingTypes } from "@/types/authentication-types";

const onboarding = () => {
  const router = useRouter();
  const { userInfo, setNewUser, setUserInfo, newUser, accessToken } =
    useAuthslice();

  useEffect(() => {
    if (!newUser && !userInfo?.email) {
      router.push(routes.login);
    } else if (!newUser && userInfo?.email) {
      router.push(routes.dashboard);
    }
  }, [newUser, router, userInfo?.email]);

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const { data } = await axios.post<OnboardingTypes>(
        `/api/auth/onboarding`,
        {
          firstName: userInfo?.firstName,
          lastName: userInfo?.lastName,
          email: userInfo?.email,
          profileImage: userInfo?.profileImage,
        }
      );

      if (data?.status) {
        setNewUser(false);
        setUserInfo({
          email: data?.user?.email,
          firstName: data?.user?.firstName,
          lastName: data?.user?.lastName,
          profileImage: data?.user?.profileImage,
          profileSetup: false,
          _id: data?.user?._id,
        });
      }

      console.log("USer created", data);
      if (data?.user) {
        Cookies.set(ACCESS_TOKEN, accessToken);
        router.push(routes.dashboard);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center py-12">
      <form className="mx-auto grid w-[350px] gap-6" onSubmit={onSubmitHandler}>
        <div className="grid justify-items-center">
          {userInfo?.profileImage && (
            <Image
              className="object-cover rounded-full"
              src={userInfo?.profileImage}
              alt={userInfo?.profileImage}
              width={200}
              height={200}
            />
          )}
        </div>
        <div className="mt-8">
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input
                  id="first-name"
                  value={userInfo?.firstName || undefined}
                  placeholder="Max"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  id="last-name"
                  placeholder="Robinson"
                  value={userInfo?.lastName || undefined}
                  required
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={userInfo?.email || undefined}
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Proceed
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default onboarding;
