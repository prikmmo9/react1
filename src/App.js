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
            <option>Пункт 66</option>
            <option>Пункт 2</option>

        </select>

        <button onClick={onClose}>Закрыть2</button>




    </div>
  );
}

export default App;
