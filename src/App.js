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
      
        {"nom":"555"}



    </div>
  );
}

export default App;
