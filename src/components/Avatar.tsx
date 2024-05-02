import { Icon } from '@iconify/react';
function AvatarPer({ nombre, nacion }: { nombre: String; nacion: String }) {
  return (
    <>
      <li className="flex flex-row bg-slate-500 m-5 align-middle justify-center">
        Nombre: {nombre} de la nacion: {
            
            nacion =='Agua' ? <Icon icon="mdi:water-opacity" width="48" height="48" /> : <Icon icon="mdi:fire" width="48" height="48" />
        }
      </li>
    </>
  );
}
function Avatar() {
  return (
    <>
      <ul className="list-none bg-gray-400 h-full w-fit flex flex-col justify-center align-middle m-auto p-5 rounded-xl">
        <AvatarPer nombre="Katara" nacion="Agua" />
        <AvatarPer nombre="Zuko" nacion="Agua" />
        <AvatarPer nombre="Azula" nacion="Fuego" />
        <AvatarPer nombre="Korra" nacion="Agua" />
        <AvatarPer nombre="Sokka" nacion="Agua" />
      </ul>
    </>
  );
}

export default Avatar;
