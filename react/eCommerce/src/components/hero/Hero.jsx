import './index.css';

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero__text">
        <h1>Vite Commerce</h1>
        <h3>Il miglior marketplace in Vite</h3>
      </div>
      <img
        src="https://cdn.pixabay.com/photo/2017/09/23/16/54/ludwigsburg-germany-2779468_640.jpg"
        alt="hero image"
      />
    </div>
  );
};

export default Hero;
