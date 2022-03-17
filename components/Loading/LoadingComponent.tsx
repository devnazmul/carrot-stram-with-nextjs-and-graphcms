import React from "react";

export default function LoadingComponent() {
  return (
    <div className="w-full h-full">
      <div className="mb-3 flex justify-between items-center">
        <span className="animate-pulse w-8 h-8 bg-loadingColor flex items-center justify-center rounded-full"></span>{" "}
        <span className="hidden lg:block animate-pulse bg-loadingColor h-3 w-9/12 rounded-full"></span>
      </div>
      <div className="mb-3 flex justify-between items-center">
        <span className="animate-pulse w-8 h-8 bg-loadingColor flex items-center justify-center rounded-full"></span>{" "}
        <span className="hidden lg:block animate-pulse bg-loadingColor h-3 w-9/12 rounded-full"></span>
      </div>
      <div className="mb-3 flex justify-between items-center">
        <span className="animate-pulse w-8 h-8 bg-loadingColor flex items-center justify-center rounded-full"></span>{" "}
        <span className="hidden lg:block animate-pulse bg-loadingColor h-3 w-9/12 rounded-full"></span>
      </div>
    </div>
  );
}
