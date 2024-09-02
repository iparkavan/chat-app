"use client";

import React, { useEffect, useState } from "react";
import { axios } from "./axios";
import { useAuthslice } from "@/store/slices/auth-slice";
import RootLoading from "@/app/loading";

const ClientProviders = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { setUserInfo, userInfo } = useAuthslice();

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
    return <RootLoading />;
  }

  return <div>{children}</div>;
};

export default ClientProviders;
