import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import Content from "./components/content/Content";
import Header from "./components/header/Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-slate-900 min-h-screen pb-5 md:pb-2">
        <header>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        </header>
        <main>
          <Content />
        </main>
        <Toaster position="bottom-right" />
      </div>
    </div>
  );
}

export default App;
