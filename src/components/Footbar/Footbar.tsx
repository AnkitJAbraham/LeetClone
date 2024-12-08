import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4 sticky bottom-0">
      <div className="container mx-auto flex justify-start items-center">
        <a href="https://www.ankitjohn.com">
          <p className="text-base transform transition duration-200 hover:scale-110">Developed by Ankit John Abraham</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
