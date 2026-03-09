import Copyright from "@components/layout/client/Copyright";
import Footer from "@components/layout/client/Footer";
import Header from "@components/layout/client/Header";
import Hotline from "@components/layout/client/Hotline";
import OnTop from "@components/layout/client/OnTop";
import SideBar from "@components/layout/client/SideBar";
import { find } from "@lib/api";
import React from "react";

type ClientLayoutProps = {
  children: React.ReactNode;
};

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const containerStyle: React.CSSProperties = {
    position: "relative",
    marginTop: "64px",
    overflow: "hidden",
    zIndex: 40,
  };

  return (
    <div className="font-LexendDeca font-light">
      <div className="relative z-50">
        <Header />
      </div>
      <div style={containerStyle} className="z-40">
        <div className="mt-[64px]">{children}</div>

        {/* <SideBar /> */}
      </div>

      {/* <div className="relative z-50">
        <OnTop />
        <Hotline />
      </div> */}
      {/* <Footer /> */}

      <Copyright />
    </div>
  );
};

export default ClientLayout;
