import { useState } from 'react';
import './index.css';

const Carousel = () => {
  const images = [
    'https://picsum.photos/id/237/400/400',
    'https://picsum.photos/id/227/400/400',
    'https://picsum.photos/id/239/400/400',
    'https://picsum.photos/id/257/400/400',
  ];

  let [actualImg, setActualImg] = useState(0);

  return (
    <div className="Carousel">
      <div className="title">
        <h3>carousel</h3>
      </div>
      <div className="carousel">
        <img src={images[actualImg]} className="c-img" alt="" />
        <div className="btns">
          <button
            onClick={() => {
              setActualImg(actualImg - 1);
              if (actualImg <= 0) {
                setActualImg((actualImg = images.length - 1));
              }
            }}
          >
            {'<'}
          </button>
          <button
            onClick={() => {
              setActualImg(actualImg + 1);
              if (actualImg >= images.length - 1) {
                setActualImg((actualImg = 0));
              }
            }}
          >
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
