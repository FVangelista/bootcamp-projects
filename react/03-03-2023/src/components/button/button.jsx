import './index.css';

const Button = ({ text, clickFunction }) => {
  return (
    <div className="Button">
      <button className="btn" onClick={clickFunction}>
        {text}
      </button>
    </div>
  );
};

export default Button;
