import logo from "img/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header h-12 flex justify-center items-center">
      <div className="header-Content w-1/2">
        <img src={logo}></img>
      </div>
      <ul className="category flex text-gray">
        {/* <li>
          <div className="p-4 hover:text-blue hover:cursor-pointer">Home</div>
          <div>
            <ol>
              <li>txs1</li>
              <li>txs2</li>
              <li>txs3</li>
            </ol>
          </div>
        </li> */}
        <Link to="/">
          <li className="p-4 hover:text-blue hover:cursor-pointer">Home</li>
        </Link>
        <Link to="/tx">
          <li className="category-item">Blockchain</li>
        </Link>
        <li className="category-item">Tokens</li>
        <li className="category-item">Resources</li>
        <li className="category-item">More</li>
      </ul>
    </div>
  );
};

export default Header;
