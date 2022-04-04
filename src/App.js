import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('lime');
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === 'lime' ? 'maroon' : 'lime';

  return (
    <div>
      Hello World<br/>

      <button>this is a button</button><br/>

      <button>another button</button><br/>

      <div className="blue-div" 
           style={{color: 'red', height: '50px',width: '150px', padding: '15px'}}>
           this div is blue</div>

      <button style={{backgroundColor: disabled ? 'gray' : buttonColor}} 
              disabled={disabled}
              onClick={() => setButtonColor(newButtonColor)}>
              Change color</button> <br/>

      <input type="checkbox" 
             id="disable-button-checkbox"
             defaultChecked={disabled}
             aria-checked={disabled}
             onChange ={ (e) => setDisabled(e.target.checked) }/>
             <label htmlFor='disable-button-checkbox'>Disable button</label>

    </div>
  );
}

export default App;