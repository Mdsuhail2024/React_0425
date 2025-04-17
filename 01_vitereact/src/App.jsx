import React from "react";
import User from "./User";

const App = () => {
  const user = "Hitesh Choushary"
  return (
    <>
      <User />
      <div>Chai or React || Md Suhail</div>
      {user}
      <p>
        Create React App has been deprecated. that's why every developer use
        vite and Parsle tool
      </p>
    </>
  );
};

export default App;
