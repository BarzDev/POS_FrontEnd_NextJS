import React from "react";

interface LoadingProps {
  height?: string;
  width?: string;
  fullScreen?: boolean;
}

export function Loading({
  height = "100vh",
  width = "100vw",
  fullScreen = false,
}: LoadingProps) {
  const styles = fullScreen
    ? { height: "100vh", width: "100vw" }
    : { height, width };

  return (
    <div
      className={`flex items-center justify-center bg-gray-100 bg-opacity-75 ${
        fullScreen ? "fixed inset-0 z-50" : "relative"
      }`}
      style={styles}
    >
      <div className="loader"></div>
    </div>
  );
}
