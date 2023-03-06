import { images } from '../../mocks/productList';

import './index.css';

const Gallery = () => {
  return (
    <div className="Gallery">
      <div className="title">
        <h3>Gallery</h3>
      </div>
      <div className="imgs">
        <img className="gl-img" src={images[0].image} alt="" />
        <img className="gl-img" src={images[1].image} alt="" />
        <img className="gl-img" src={images[2].image} alt="" />
        <img className="gl-img" src={images[3].image} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
