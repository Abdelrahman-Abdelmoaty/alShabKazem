import "./App.css";

const Header = () => {
  return (
    <header>
      <div className="background-image">
        <div className="links">
          <a className="link" href="#menu">
            المنيو
          </a>
          <a className="link" href="#adds">
            فروعنا
          </a>
          <a
            className="link"
            href="https://www.facebook.com/elshabkazem/"
            target="_blank"
          >
            فيسبوك
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
