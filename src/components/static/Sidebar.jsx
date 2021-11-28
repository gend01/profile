import React from "react";

function Sidebar() {
  return (
    <header>
      <ul>
        <li>
          <a href="/wallet">Wallet</a>
        </li>
        <li>
          <a href="/">Profile</a>
        </li>
        <li>
          <a href="/bonuses">Bonuses</a>
        </li>
      </ul>
    </header>
  );
}

export default Sidebar;
