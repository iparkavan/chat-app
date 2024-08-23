'use client'

import { useAuthslice } from "@/store/slices/auth-slice";
import React from "react";

const page = () => {
  const { userInfo } = useAuthslice();
  console.log(userInfo)

  return <div className="text-4xl text-green-600">{userInfo?.email}</div>;
};

export default page;
