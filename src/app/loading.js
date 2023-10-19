import { Spinner } from "@nextui-org/react";
import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Spinner label="Loading..." color="default" labelColor="foreground" />
    </div>
  );
};

export default Loading;
