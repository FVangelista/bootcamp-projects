import { useContext } from 'react';
import { GlobalCtx } from '../store';

import './index.css';

function Counter() {
  //   const [value, setValue] = useState(0);

  //   const handleClick = (e) => {
  //     switch (e.target.className) {
  //       case 'increment':
  //         setValue((prev) => prev + 1);
  //         break;
  //       case 'decrement':
  //         setValue((prev) => prev - 1);
  //         break;
  //       case 'reset':
  //         setValue(0);
  //         break;

  //       default:
  //         setValue(0);
  //         break;
  //     }
  //   };
  //   const counter = useContext(CounterCtx);

  const { state, dispatch } = useContext(GlobalCtx);

  const handleClick = (e) => dispatch({ type: e.target.className });

  return (
    <div className="Counter">
      {/* {console.log(state)} */}
      {/* <button onClick={handleClick} className="decrement">
        decrement
      </button>
      <button onClick={handleClick} className="reset">
        reset
      </button>
      <button onClick={handleClick} className="increment">
        increment
      </button>
      <h1>{value}</h1> */}

      <button onClick={handleClick} className="decrement">
        decrement
      </button>
      <button onClick={handleClick} className="reset">
        reset
      </button>
      <button onClick={handleClick} className="increment">
        increment
      </button>
      <h1>{state.value}</h1>
    </div>
  );
}

export default Counter;
