import React from "react";
import Header from "../components/header/header";
import SearchTopic from "./SearchTopic";
import Footer from "../components/footer/footer";

const Topics = async () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center">
            <SearchTopic />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Topics;
