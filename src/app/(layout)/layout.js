import Footer from "@/components/shared/footer/footer";
import Header from "@/components/shared/header/navbar";
import { getadmin } from "@/components/utlis/admin/getadmin";
import React from "react";

export const dynamic = "force-dynamic";

const WithLayout = async ({ children }) => {
  const admin = await getadmin();
  return (
    <div>
      <Header admin={admin?.data} />
      {children}
      <Footer />
    </div>
  );
};

export default WithLayout;
