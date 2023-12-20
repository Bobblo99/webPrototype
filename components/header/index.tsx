const Header: React.FC<IHeader> = ({ displayText }) => {
    return (
      <div className="flex items-center justify-center text-3xl text-black dark:text-white mb-8 bg-blue-gray-400 dark:border-darkHover border-t-4 py-2 border-b-4">
        {/* <div className="dark:bg-darkHover bg-blue-gray-400 h-min p-2 shadow-md rounded-2xl">
          <h1>{displayText}</h1>
        </div> */}
        <h1>{displayText}</h1>
      </div>
    );
  };
  
  export default Header;
  