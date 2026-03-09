import { find } from "@lib/api";
import React from "react";
import Storage from "./Storage";

const Fetch = async () => {
  const ConfigData = await find("Config");

  return (
    <>
      <Storage ConfigData={ConfigData ? ConfigData : []} />
    </>
  );
};

export default Fetch;
