import React, { useState } from "react";

const App = () => {
  // let counter = 1;
  // const update = () => {
  //   counter = counter + 1 ;
  //   console.log(counter, Date.now());
  // };
  const[counter, setCounter] = useState(15)

  const addCount = () => {
    if(counter < 30){
      setCounter(counter + 1)
    }
  }
  const dltCount = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }
  
  return (
    <div className="text-center py-12 h-screen bg-gray-400">
      <h1 className="text-4xl font-bold my-12">
        Using react hooks with the help of tailwindcss
      </h1>
      <p className="my-12 text-lg">Counter {counter} </p>
      <div className="flex justify-center space-x-4">
        <button onClick={addCount}
        className="bg-green-700 px-2 py-1 rounded-sm text-lg cursor-pointer hover:bg-green-800">
          Add count {counter}
        </button>
        <button onClick={dltCount}
        className="bg-red-700 px-2 py-1 rounded-sm text-lg cursor-pointer hover:bg-red-800">
          Remove count  {counter}
        </button>
      </div>
      <p className="mt-8 text-lg">Your current counter value is: {counter}</p>
    </div>
  );
};

export default App;
