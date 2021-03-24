import React from "react";

/*List of Components */
import NavbarComp from "../component/Navbar/Navbar";
import MainBanner from "../component/Banner/MainBanner";
import Services from "../component/Services/Services";
import FooterComp from "../component/Footer/Footer";

function Home() {
  return (
    <div>
      <NavbarComp />
      <MainBanner />
      <Services />
      <FooterComp />
    </div>
  );
}
export default Home;
