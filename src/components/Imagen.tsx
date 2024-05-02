import React, { useState, useEffect } from "react";

function Imagen() {
  const [Text, setText] = useState("");
  useEffect(() => {
    return () => {
      fetch("/texts/bash.md")
        .then((res) => {
          res.text().then((r) => setText(r.toString()));
        })
        .catch((rw) => {
          console.log(rw);
        });
    };
  }, []);
  console.log(Text);
  return (
    <div className="p-5 m-10 bg-gray-200 rounded-lg flex justify-between flex-col min-h-[70vh] items-center">
      <h1 className="text-4xl m-auto text-center">Bash y su Uso desde 1970</h1>
      <div className="flex flex-row justify-between p-5 h-full">
        <img
          className="w-32 h-32 "
          src="/Frameworks/bash.png"
          alt=""
        />
        <p className="text-lg text-justify p-5 grid gap-5">{Text}</p>
      </div>
    </div>
  );
}

export default Imagen;
