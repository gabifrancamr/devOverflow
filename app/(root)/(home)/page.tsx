import React from "react";
import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
