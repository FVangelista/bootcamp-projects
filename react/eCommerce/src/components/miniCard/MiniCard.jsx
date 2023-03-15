import './index.css';

const MiniCard = ({ imgSrc, imgAlt }) => {
  const onHandleClick = () => window.open(imgSrc, '_blank');

  return (
    <img
      onClick={onHandleClick}
      className="MiniCard"
      src={imgSrc}
      alt={imgAlt}
    />
  );
};

export default MiniCard;
