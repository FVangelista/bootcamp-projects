import './index.css';

const Navbar = (props) => {
  const { inputValue, setInputValue, setCartVisible, cartListLength } = props;

  const onHandleInput = (e) => setInputValue(() => e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // TODO: trasmettere il valore della input (inputValue) all'elemento di ricerca
  };

  const handleClick = () => setCartVisible((prev) => !prev);

  return (
    <div className="Navbar">
      <ul>
        <li>Home</li>
        <li>Contacts</li>
        <li>About us</li>
      </ul>
      <form onSubmit={onHandleSubmit}>
        <input
          value={inputValue}
          onChange={onHandleInput}
          type="text"
          placeholder="Cerca prodotto ..."
          required
        />
      </form>
      <button onClick={handleClick}>🛒{cartListLength}</button>
    </div>
  );
};

export default Navbar;
