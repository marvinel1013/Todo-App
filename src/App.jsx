import React from "react";
import Content from "./components/content/Content";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Content />
      </main>
    </div>
  );
}

export default App;
