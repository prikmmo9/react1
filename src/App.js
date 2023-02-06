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

       <code>{"nom":"555"}</code>



    </div>
  );
}

export default App;
