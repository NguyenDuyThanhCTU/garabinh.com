"use client";

import { useData } from "@context/DataProviders";
import React, { useEffect } from "react";

const Storage = ({ ConfigData }: any) => {
  const { setConfig } = useData();
  useEffect(() => {
    setConfig(ConfigData);
  }, [ConfigData]);
  return <></>;
};

export default Storage;
