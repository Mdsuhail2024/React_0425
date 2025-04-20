import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("1521");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) string += "1234567890";
    if (charAllowed) string += `~!@#$%^&*()-_=+|[{]}:;/?.>,<`;
    // console.log(string);
    for (let i = 0; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * string.length + 1);
      // console.log(randomIndex);
      pass += string.charAt(randomIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  
  const passwordRef = useRef(null)

  const copytoClipBoard = () => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 10)
    window.navigator.clipboard.writeText(password)
  }
  return (
    <>
      <div className="h-screen w-full bg-gray-900/70 text-center text-orange-400">
        <h1 className="text-center text-4xl font-bold py-12 text-black">
          Password Generator !
        </h1>
        <div className="max-w-md w-full mx-auto bg-gray-700 shadow-2xl rounded-lg px-3 py-4">
          <div className="w-full flex">
            <input
              ref={passwordRef}
              value={password}
              readOnly
              type="text"
              className="w-full outline-none border-none bg-gray-200 px-2 py-1 rounded-l-md"
            />
            <button onClick={copytoClipBoard} 
            className="bg-indigo-400 cursor-pointer hover:bg-indigo-500 px-2 py-0.5 rounded-r-md font-semibold text-white">
              Copy
            </button>
          </div>
          <div className="flex mt-5 gap-x-3">
            <div className="flex items-center">
              <input
                min={8}
                max={45}
                onChange={(e) => setLength(e.target.value)}
                type="range"
              />
              <span className="pl-1"> Length ({length})</span>
            </div>
            <div>
              <input
                // defaultChecked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                type="checkbox"
              />
              <span className="ml-1.5">Numbers</span>
            </div>
            <div>
              <input
                // defaultChecked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                type="checkbox"
              />
              <span className="ml-1.5">Characters</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
