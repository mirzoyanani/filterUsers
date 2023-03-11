import React, { useState } from "react";
import { userData } from "./userData";

export const FilterUsers = () => {
  const [filter, setFilter] = useState("");
  return (
    <div>
      <input
        type="search"
        name=""
        required
        id=""
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      <ul>
        <form >
          {userData
            .filter((user) => (user.name).toLowerCase().includes(filter.toLowerCase()))
            .map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
        </form>
      </ul>
    </div>
  );
};
