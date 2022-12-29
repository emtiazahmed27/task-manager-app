import React from "react";
import "react-loader-spinner";
import { FallingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <FallingLines
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </div>
  );
};

export default Loader;
