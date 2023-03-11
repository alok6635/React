import React from "react";
import { NavBar, UlTag, LiTag, LinkTag } from "./GlobalCss";

const Nav = () => {
  return (
    <div>
      <NavBar>
        <UlTag>
          <LiTag>
            <LinkTag>Home</LinkTag>
          </LiTag>
          <LiTag>
            <LinkTag>About Us</LinkTag>
          </LiTag>
          <LiTag>
            <LinkTag>Services</LinkTag>
          </LiTag>
          <LiTag>
            <LinkTag>Gallary</LinkTag>
          </LiTag>
          <LiTag>
            <LinkTag>Contact Us</LinkTag>
          </LiTag>
          <LiTag>
            <LinkTag>Services</LinkTag>
          </LiTag>
          <LiTag>
            <LinkTag>Admissions</LinkTag>
          </LiTag>
        </UlTag>
      </NavBar>
    </div>
  );
};

export default Nav;
