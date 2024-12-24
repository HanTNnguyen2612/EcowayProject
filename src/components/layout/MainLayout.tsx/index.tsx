import React from "react";
import bg from "@/public/images/bg.png";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-cover bg-center bg-repeat-y">
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center bg-repeat-y"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      {children}
    </main>
  );
};

export default MainLayout;
