import React from "react";

interface IHeader {
  displayText: string;
}

const Header: React.FC<IHeader> = ({ displayText }) => {
  return (
    <div className="flex items-center justify-center text-3xl text-black dark:text-white mb-8">
      <h1>{displayText}</h1>
    </div>
  );
};

export default Header;
