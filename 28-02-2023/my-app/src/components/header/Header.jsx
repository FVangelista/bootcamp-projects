import './index.css';

const Header = ({
  title,
  href_1,
  href_2,
  href_3,
  text_href_1,
  text_href_2,
  text_href_3,
}) => {
  return (
    <div className="Header">
      <h1 className="logo">{title}</h1>
      <ul className="list">
        <li>
          <a href={href_1} className="links">
            {text_href_1}
          </a>
        </li>
        <li>
          <a href={href_2} className="links">
            {text_href_2}
          </a>
        </li>
        <li>
          <a href={href_3} className="links">
            {text_href_3}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
