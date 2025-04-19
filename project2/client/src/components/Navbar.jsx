import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center mb-6">
        <NavLink to="/">
          <img alt="MongoDB logo" width="200px" className="h-10 inline" src="https://raw.githubusercontent.com/mongodb-developer/mern-stack-example/603144e25ba5549159d1962601337652a7bfa253/mern/client/src/assets/mongodb.svg"></img>
        </NavLink>
      </nav>
    </div>
  );
}