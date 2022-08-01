import React from "react";
import "./App.css";
import BootstrapModal from "./components/modals/BootstrapModal";

function App() {
  return (
    <div className="App">
      {/* <div className='yellow-block'></div> */}
      <div className="modal-container"> 
        <BootstrapModal />
      </div>
    </div>
  );
}

export default App;
