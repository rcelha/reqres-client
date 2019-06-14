import React from "react";

export default props => (
  <form>
    <label htmlFor="email" style={{ display: "block" }}>
      Email
    </label>
    <input id="email" placeholder="Enter your email" type="text" />
    <button type="button" className="outline">
      Reset
    </button>
    <button type="submit">Submit</button>
  </form>
);
