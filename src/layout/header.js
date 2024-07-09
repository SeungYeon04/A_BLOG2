import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex flex-col ">
      <header className="title header-color py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          미니 블로그
          <nav>
            <ul className="flex space-x-4 title-small">
              <Link to="/">Home</Link>
              <Link to="blog">blog</Link>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
export default Header;