import React from "react";
import Link from "next/link";

import Courses from "./components/Courses";
const HomePage = () => {
  return (
    <div>
      <h2>Welcome to Traversy Media !</h2>
      <Courses />
    </div>
  );
};

export default HomePage;
