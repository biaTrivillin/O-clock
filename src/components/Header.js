import { FaBars } from "react-icons/fa";

function Header() {
    return (
      <header className="flex flex-row justify-between items-center pt-2 px-3 absolute top-0 w-screen">
        <div className="flex flex-row gap-1 items-center">
          <FaBars />
          <h1 className="text-base">O'CLOCK</h1>
        </div>
        <div className="text-sm flex flex-row gap-2 items-center">
          <a href="https://www.linkedin.com/in/beatriz-trivillin/" className="hover:scale-110">about us</a>
          <a href="https://www.linkedin.com/in/beatriz-trivillin/" className="hover:scale-110">contact</a>
        </div>
        
      </header>
    );
  }
  
  export default Header;