import React from "react";
import Header from "./Header";
import NextNProgress from "nextjs-progressbar"; 
type Children = {
    children?: React.ReactNode;
}
const Layout = ({ children }: Children) => {
  return (
    <>
    <NextNProgress color="linear-gradient(to right, #b2fefa, #0ed2f7)"
  startPosition={0.3}
  stopDelayMs={200}
  height={6}
  showOnShallow={true}/>
      <Header />
      {children}
    </>
  );
};

export default Layout;
