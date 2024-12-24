"use client";
import React from "react";
import { useRouter } from "next-nprogress-bar";
import { usePathname } from "next/navigation";
import { useCheckAuthQuery } from "@/store/queries/auth";
import UserHeader from "@/components/layout/Header/UserHeader";
import AuthHeader from "@/components/layout/Header/AuthHeader";
import Reloading from "@/components/layout/Reloading";
const Layout = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, isSuccess } = useCheckAuthQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );
  return isLoading ? (
    <div>
      <Reloading />
    </div>
  ) : (
    <>
      {isSuccess ? <UserHeader data={data?.user} /> : <AuthHeader />}
      <div>{children}</div>
    </>
  );
};

export default Layout;
