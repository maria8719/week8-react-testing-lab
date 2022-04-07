import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('lime');
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === 'lime' ? 'maroon' : 'lime';
  const [isDisabled, setIsDisabled] = useState(true);
    const [email, setEmail] = useState("");

    function handleChange(e){
        setEmail(e.target.value);
        setIsDisabled(e.target.value === "");
    }
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
             <label htmlFor='disable-button-checkbox'>Disable button</label><br /><br /><br />
             <form className="form">
                <label htmlFor="email">Email Address</label><br />
                <input className= "emailaddress" onChange={handleChange} type="email" id="email" name="email" placeholder="Email Address" value={email} />
                <button name="subscribe-button" type="submit" className="button" disabled={isDisabled} >Subscribe</button><br /><br />
                <input type="checkbox" name="agreement_checkbox" id="agreement_checkbox" />
                <label htmlFor="agreement_checkbox">I accept all the terms and conditions.</label>
                <a   href="https://google.com"  rel="example" target="_blank" >  Terms</a>
                <br /><br />
               
            </form>
            <div>
      <h3>List of Colors</h3>
      <ul className="colors"> 
        <li>Pink</li>
        <li>Red</li>
        <li>Green</li>
        <li>Blue</li>
        <li>White</li>
      </ul>
    </div>
    </div>
  );
}

export default App;