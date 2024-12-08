import React from "react";
import Header from "../components/header/header";
import SearchTopic from "./SearchTopic";
import Footer from "../components/footer/footer";

const Topics = async () => {
  return (
    <div className="relative">
      
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex flex-col items-center justify-center lg:m-16 p-4">
          <div className="flex items-center justify-center">
            <SearchTopic />
          </div>
        </div>
      </div>

      <div className="relative">
        <Footer />
      </div>
    </div>
  );
};

export default Topics;
