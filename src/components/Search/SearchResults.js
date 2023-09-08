import React from "react";

export const SearchResults = ({ results }) => {
  console.log(results);
  return (
    <main>
      {results.length > 0 && (
        <div>
          {results.map((item) => (
            <ul key={item.id}>
              <li>
                <p>{item.name}</p>
              </li>
            </ul>
          ))}
        </div>
      )}
    </main>
  );
};
