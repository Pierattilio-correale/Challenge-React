import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtonComponent from "./ButtonComponent";
import ImgComponent from "./ImgComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ButtonComponent textbutton="Bottone di prova numero 2" />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ButtonComponent textbutton="Bottone di prova" />
      <div>
        <ImgComponent
          textalt="Foto Epicode"
          textsrc="data:image/jpeg;base64,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"
          class2="Altezza"
        />
      </div>
      <div>
        <ImgComponent
          textalt="Foto Goku Ultra istinct "
          textsrc="https://multiplayer.net-cdn.it/thumbs/images/2024/06/12/dbsz-goku-ultra-ist_jpg_1600x900_crop_q85.jpg"
          class2="Goku"
        />
      </div>
    </>
  );
}

export default App;
