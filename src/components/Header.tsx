function Header() {
  return (
    <header className="flex flex-row justify-between bg-gray-500"> 
    <img className="p-5 w-24" src="../../public/vite.svg" alt="" />
      <ul className="flex flex-row p-5">
        <a href="" className="text-white bg-slate-800 rounded-md m-3 text-lg p-2   delay-500">Nosotros</a>
        <a href="" className="text-white bg-slate-800 rounded-md m-3 text-lg p-2   delay-500">Productos</a>
        <a href="" className="text-white bg-slate-800 rounded-md m-3 text-lg p-2   delay-500">Galeria</a>
        <a href="" className="text-white bg-slate-800 rounded-md m-3 text-lg p-2   delay-500">Contactos</a>
      </ul>
    </header>
  );
}

export default Header;
