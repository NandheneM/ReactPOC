import './Button.css';
import { useState } from 'react';

function MyButton({SectionName}) {
    const [count, setCount] = useState(0);
    function handleClick(){
        setCount(count + 1);
        alert('You clicked me and triggered EventHandler');
    }
  return (
    <button className="button-class" onClick={handleClick}>
      I'm a button you clicked from {SectionName} for {count} times. Count tracked by <code>UseState</code> hook.
    </button>
  );
}

export default MyButton;