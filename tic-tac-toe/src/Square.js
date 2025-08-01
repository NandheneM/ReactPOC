
import './Square.css';

function Square({value, onSquareClick}) {

  return (
    <>
        <button className="square square-style" onClick={onSquareClick}>{value}</button>
    </>
  );
}

export default Square;