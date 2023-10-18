import Footer from "@/components/shared/footer/footer";
import Header from "@/components/shared/header/navbar";
import React from "react";

const WithLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default WithLayout;
