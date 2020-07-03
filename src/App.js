import React,{useState} from 'react';
import './App.css';
import {Message} from'./message.js'

const App = () => {
    let [isLight, setLight] = useState(true)
    return(
    <div className={`room ${isLight ? 'lightOn':'lightOff'}`}>
        <Message light={isLight}/>
        <button onClick={()=>{setLight(!isLight)}}>Toggle Light</button>
    </div>
    )
}

export default App;
