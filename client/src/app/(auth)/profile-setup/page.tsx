"use client";

import { axios } from "@/lib/axios";
import { useAuthslice } from "@/store/slices/auth-slice";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  const { userInfo, setUserInfo, setAccessToken } = useAuthslice();

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await axios.get(`/api/auth/get-userinfo`, {
          withCredentials: true,
        });
        if (response?.status === 200 && response.data.id) {
          setUserInfo(response.data);
        } else {
          setUserInfo(undefined);
        }
      } catch (error) {
        setUserInfo(undefined);
      } finally {
        setIsLoading(false);
      }
    };

    if (!userInfo) {
      getUserInfo();
    } else {
      setIsLoading(false);
    }
  }, [userInfo, setUserInfo]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div className="text-4xl text-green-600">{userInfo?.email}</div>;
};

export default page;
