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
            <option>Пункт 2</option>
        </select>

        <button onClick={onClose}>Закрыть2</button>

        <iframe src="//6.annacdn.cc/8WaL3nf9VIyv/tv-series/13777" width="640" height="480" frameBorder="0"
                allowFullScreen></iframe>


    </div>
  );
}

export default App;
