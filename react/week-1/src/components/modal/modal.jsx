import './index.css';

const Modal = ({ product, setDisplayModal }) => {
  return (
    <div className="Modal">
      <div className="Modal_content">
        <div className="modal-data-content">
          <h3>{product.title}</h3>
          <img className="modal-img" src={product.images[0]} alt="" />
          <p>{product.description.split(' ').splice(0, 12).join(' ')}</p>
        </div>
        <button className="btn-modal" onClick={() => setDisplayModal(null)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
