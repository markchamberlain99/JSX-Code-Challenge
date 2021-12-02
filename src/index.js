//Create a react app from scratch.
import React from "react";
import ReactDom from "react-dom";
//It should display a h1 heading.
//ReactDom.render(<h1>Hellow World!</h1>, document.getElementById("root"));
// It should display an unordered list (bullet points).
ReactDom.render(
  <div>
    <h1>My heading</h1>
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
    </ul>
  </div>,
  document.getElementById("root")
);
// It should contain 3 list elements.
