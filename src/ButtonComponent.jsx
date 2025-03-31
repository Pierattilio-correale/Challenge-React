import { useEffect } from "react";
const ButtonComponent = function (props) {
  return (
    <div>
      <button id={props.idButton} className={props.classbutton}>
        {props.textbutton}
      </button>
    </div>
  );
};

// const myButton = document.getElementById("ciao");
// myButton.addEventListener("click", function () {
//   myButton.classList.toggle("newBG");
// });
// const mySecondButton = document.getElementById("ciaomio");
// mySecondButton.addEventListener("click", function () {
//   mySecondButton.classList.toggle("newBG2");
// });
export default ButtonComponent;
