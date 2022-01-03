import "./App.css"
import { useState } from "react"
import Popup from "./Popup/Popup"
import Header from "./Header/Header"
import Main from "./Main/Main"


function App() {
  const [pageYOffset, setPageYOffset] = useState(0)

  window.addEventListener('scroll', function() {
    setPageYOffset(window.pageYOffset)
  })

  return (
    <div className="app">
      <Popup />
      <Header pageYOffset={pageYOffset}/>
      <Main pageYOffset={pageYOffset}/>
    </div>
  );
}

export default App;
