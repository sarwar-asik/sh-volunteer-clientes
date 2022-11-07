import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import Headers from "../pages/Headers";

const Main = () => {
  return (
    <div>
      <Headers />
     
      <div className="bg-slate-300 pt-3">
      <Outlet >
        {/* Children others components  */}
      </Outlet >
      </div>
      <Footer/>
    </div>
  );
};

export default Main;
