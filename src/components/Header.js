import { FaBars } from "react-icons/fa";

function Header() {
    return (
      <header className="flex flex-row justify-between items-center pt-2 px-3 absolute top-0 w-screen lg:px-9 lg:pt-4 animate-appear">
        <div className="flex flex-row gap-1 items-center lg:gap-3">
          <FaBars/>
          <h1 className="text-base lg:text-xl">O'CLOCK</h1>
        </div>
        <div className="text-sm flex flex-row gap-2 items-center lg:text-lg lg:gap-7">
          <a href="https://www.linkedin.com/in/beatriz-trivillin/" className="hover:scale-110">about us</a>
          <a href="https://www.linkedin.com/in/beatriz-trivillin/" className="hover:scale-110">contact</a>
        </div>
        
      </header>
    );
  }
  
  export default Header;