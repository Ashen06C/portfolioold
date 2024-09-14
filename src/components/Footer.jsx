import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-row justify-between">
      <h2 className="m-8 text-center pb-10  ">
        © 2024 Ashen Wjiesinghe. All rights reserved.
      </h2>
      <div className="m-8 flex items-center justify-between gap-4">
        <a href="https://www.linkedin.com/in/ashen-wijesinghe-18329a264/">
          <FaLinkedin className="text-4xl mx-2" />
        </a>
        <a href="https://github.com/Ashen06C">
          <FaGithub className="text-4xl mx-2" />
        </a>
        <a href="https://www.hackerrank.com/profile/ashencharanga99">
          <FaHackerrank className="text-4xl mx-2" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
