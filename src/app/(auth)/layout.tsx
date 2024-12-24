import React from "react";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <div className=" text-default-foreground absolute inset-0 z-0 flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
