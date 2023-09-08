import React from "react";
import styles from "./App.module.css";
import { SearchBar } from "./components/Search/SearchBar";

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Jamming</h1>
      </header>
      <SearchBar />
    </div>
  );
}

export default App;
