import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

import Main from "./Components/Main";

function App() {
  return (
    <div className="w-full min-h-[100vh]">
      <Main />
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
