import Copyright from "@components/layout/client/Copyright";
import Header from "@components/layout/client/Header";
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
      </div>

      <Copyright />
    </div>
  );
};

export default ClientLayout;
