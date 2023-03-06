import './index.css';

const SideMenu = () => {
  return (
    <div className="SideMenu">
      <div className="burger">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <img
        src="https://img.icons8.com/nolan/512/twitter.png"
        alt="twitter logo"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/6742/6742248.png"
        alt="sparkles image"
      />
    </div>
  );
};

export default SideMenu;
