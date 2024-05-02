import { useState } from "react";
function State() {
  const [usuario, setUsuario] = useState([
    {
      email: "",
      contraseña: "",
    },
  ]);
  const handleSubmit = (res: any) => {
    res.preventDefault();
    // interesante====> para ver ==>>>console.log(res.target[0].name)
    // guardamos valores respentando los pasados
    setUsuario( [...usuario,{
      email: res.target[0].value,
      contraseña: res.target[1].value,
    }]);
  };
  return (
    <>
      <form
        method="POST"
        onSubmit={(env) => handleSubmit(env)}
        className="bg-slate-400 rounded-3xl self-center justify-center m-20 w-1/2 p-5"
      >
        <h1 className="text-6xl p-4 underline">Login</h1>
        <div className="flex flex-row p-3 align-items-middle items-center  bg-slate-300 rounded-2xl mb-5">
          <label className="p-2">Email:</label>
          <input
            type="email"
            className="rounded-xl bg-slate-200 p-2 align-middle"
            name="email"
            id=""
            aria-describedby="emailHelpId"
            placeholder="abc@mail.com"
          />
        </div>

        <div className="flex flex-row p-3 align-items-middle items-center  bg-slate-300 rounded-2xl mb-5">
          <label className="p-2">Contraseña: </label>
          <input
            type="password"
            className="rounded-xl bg-slate-200 p-2 align-middle"
            name="contraseña"
            id=""
            placeholder="********"
          />
        </div>
        <button
          type="submit"
          className="p-5 self-center justify-center align-middle items-center m-auto rounded-xl flex bg-slate-200 m-30"
        >
          Ingresar
        </button>
        <button onClick={() => console.log(usuario)}>obtener</button>
      </form>
    </>
  );
}

export default State;
