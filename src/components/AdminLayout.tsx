import React, { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full ">
        <Header />

        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
