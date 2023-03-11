import React, { useState } from "react";
import { userData } from "./userData";

export const FilterUsers = () => {
  const [filter, setFilter] = useState("");
  return (
    <div>
    <form action="">
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
      </form>
      <ul>
       
          {userData
            .filter((user) =>
              user.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
       
      </ul>
    </div>
  );
};
