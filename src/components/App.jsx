import React from "react";
import Sidebar from "./static/Sidebar";

import Profile from "./pages/Profile";
import Wallet from "./pages/Wallet";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Profile />
    </div>
  );
}

export default App;
