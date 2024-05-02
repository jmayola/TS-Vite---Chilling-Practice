import { useState } from "react";



function Blog({ title, desc }: { title: String; desc: String }) {
  const [Likes, setLikes] = useState(0);
  return (
    <>
      <div className="bg-gray-400 rounded-3xl flex flex-col text-center place-items-center m-10">
        <h1 className="text-5xl font-bold bg-gray-500 w-full">
          {title.toUpperCase()}
        </h1>
        <p className="text-xl m-10 p-5 bg-gray-300 rounded-2xl">{desc}</p>
        <img src="/Frameworks/electron.png" className="w-32 h-32" alt="" />

        <ul className="flex">
          <li
            className="p-3"
            onClick={() => {
              setLikes(Likes + 1);
            }}
          >
            Likes: {Likes}
          </li>
          <li onClick={()=>(setLikes(Likes+1))} className="p-3">Guardar</li>
          <li className="p-3">Compartir</li>
        </ul>
      </div>
    </>
  );
}

export default Blog;
