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

        <img src="https://kartinkin.net/pics/uploads/posts/2022-07/1657199254_20-kartinkin-net-p-kanarskie-dogi-iz-grafstva-art-krasivo-20.jpg" alt="альтернативный текст">


    </div>
  );
}

export default App;
