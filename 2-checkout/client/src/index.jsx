import React from "react";
import { render } from "react-dom";
import Checkout from "./checkout.jsx";

render(
  <div>
    <p>Hello, World!</p>
    <p>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
    </p>
    <Checkout />
  </div>,
  document.getElementById("root")
);
