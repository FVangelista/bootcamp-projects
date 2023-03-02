import './index.css';

const Footer = ({ user }) => {
  const onClickHandle = () => alert(`Welcome ${user}`);

  return (
    <div className="Footer">
      <div className="content-wrapper">
        <img
          src="https://picsum.photos/300/300"
          className="img"
          alt="random image"
        />
        <button onClick={onClickHandle} className="btn">
          click here
        </button>
        <p>&copy; Links</p>
      </div>
    </div>
  );
};

export default Footer;
