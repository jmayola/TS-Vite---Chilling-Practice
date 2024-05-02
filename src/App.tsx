import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Note from "./Note.tsx";
import Blog from "./components/Blog.tsx";
import "./global.css"
import Imagen from "./components/Imagen.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Avatar from "./components/Avatar.tsx";
import Targeta from "./components/Targeta.tsx";
import State from "./components/State.tsx"
function App() {
  const router = createBrowserRouter([
    { path: "/", element:<Imagen></Imagen> },
    { path: "/hola", element: <Note></Note> },
    { path: "/Avatar", element: <Avatar></Avatar> },
    { path: "/Targeta", element: <Targeta titulo="Mortal Kombat" desc="Juego de lucha con vista en 2D para consolas de segunda y tercera generacion, elige tu destino y preparate para enfrentarte a otros luchadores de otros mundos para defender a la tierra." img="descarga.jpeg" price={200}></Targeta> },
    { path: "/blog/:itemId", element: <Blog title="hola" desc="hola"></Blog>},
    { path: "/State", element: <State></State>}
  ]);
  return (
    <>
      <Header></Header>
      <RouterProvider router={router}></RouterProvider>
      <Footer></Footer>
    </>
  );
}

export default App;
