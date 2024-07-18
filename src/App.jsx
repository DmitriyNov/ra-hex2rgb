import "./App.css"
import Converter from "./components/Сonverter"

function App() {
  const body = document.querySelector("html");
  body.style.backgroundColor = "#ff8870"; //Пришлось делать вот такой костыль, чтобы нормально задаь начальное значение

  return (
    <>
      <Converter/>
    </>
  )
}

export default App
