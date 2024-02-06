import React from "react";
import { useState } from "react";
import "./style.css";

export const SearchComponent = () => {
  const [cidade, setCidade] = useState("");
  const Search = () => {};

  console.log();

  return (
    <section>
      <div className="HeaderSpace">
        <div className="SearchField">
          <input placeholder="Digite a cidade" name="sm" id="sm" />
          <button onClick={Search} />
        </div>
      </div>
    </section>
  );
};
