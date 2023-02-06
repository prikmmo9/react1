import './App.css';
import {useEffect} from "react";
const tg = window.Telegram.WebApp;

function App() {

    useEffect(() => {

        tg.ready();

    },[])

    const onClose = () =>{
        tg.close()

    }

  return (

    <div className="App">
        <select>
            <option>Пункт 1</option>
            <option>Пункт 2</option>

        </select>

        <button onClick={onClose}>Закрыть2</button>

       <p>123</p>


    </div>
  );
}

export default App;
