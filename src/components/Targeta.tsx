import React from "react";

function Targeta({
  titulo,
  desc,
  img,
  price,
}: {
  titulo: String;
  desc: String;
  img: string;
  price: number;
}) {
  return (
    <>
      <div className="m-auto bg-slate-300 p-5 rounded-lg w-[70vw] h-[70vh] place-content-center justify-center align-middle ">
        <h3 className="text-5xl font-mono font-bold underline">{titulo}</h3>
        <div className="flex flex-row">
          <img src={img} className="text-center block w-32 h-32 m-5" alt="" />
          <p className="text-2xl flex align-middle items-center">{desc}</p>
        </div>
        <div className="flex flex-end justify-end items-center">
          <span className="text-4xl">{price}$</span><button className="bg-blue-600 p-5 rounded-xl m-3">Comprar</button><button className="p-5 m-3 bg-gray-500 rounded-xl">Reservar</button>
        </div>
      </div>
    </>
  );
}

export default Targeta;
