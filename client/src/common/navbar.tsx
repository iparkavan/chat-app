"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/store/auth-store";
import React from "react";
import LogoutIcon from "&/icons/nav-bar-icons/logout-icon.svg";
import { useRouter } from "next/navigation";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { ThemeModeToggle } from "@/features/dashboard/components/theme-mode-menu";
import { signOut } from "@/lib/authentications";

const Navbar = () => {
  const router = useRouter();
  const { logout } = useAuth();

  const logoutHanlder = () => {
    signOut(router);
  };

  return (
    <div className="flex items-center justify-end h-full">
      <div className="flex items-center justify-center gap-4">
        <div>
          <ThemeModeToggle />
        </div>
        <Button variant={"destructive"} size={"icon"} onClick={logoutHanlder}>
          <ChevronRightIcon className="" />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
