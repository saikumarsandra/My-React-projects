import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <div className=" row justify-content-center">
        <div className="col-md-6">
          <h3>You clicked {count} times</h3>
          <button
            className="btn btn-primary"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setCount(count - 1 > 0 ? count - 1 : 0)}
          >
            decrement
          </button>
          <button className="btn btn-warning" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
export default Counter;
