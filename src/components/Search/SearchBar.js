import React, { useState } from "react";
import { data } from "../../data/data";
import styles from "./SearchBar.module.css";
import { SearchResults } from "./SearchResults";

export const SearchBar = () => {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = ({ target }) => {
    const { value } = target;
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let allTracks = [];
    data.filter((tracks) => {
      if (tracks.artist.includes(text)) {
        allTracks.push(tracks);
      }
      return setResults(allTracks);
    });
  };

  console.log(results);

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          id="search"
          className={styles.input}
        />
        <button className={styles.button}>Search</button>
      </form>
      <SearchResults results={results} />
    </>
  );
};
