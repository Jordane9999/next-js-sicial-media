import React from "react";
import MobileMenuComponent from "./MobileMenu";

export default function NavbarComponent() {
  return (
    <div className="">
      {/* LEFT */}
      <div className="">TogoLinked</div>
      {/* CENTER */}

      <div className=""></div>
      {/* RIGHT */}

      <div className="">
        <MobileMenuComponent />
      </div>
    </div>
  );
}
