function Footer() {
  return (
    <footer className="flex bg-gray-500 min-w-full p-5 justify-between items-center text-center">
      <div className="flex flex-row justify-center items-center p-3">
        <img
          src="./Frameworks/bash.png"
          className="w-16 h-16 mix-blend-color-burn border-r-2 border-gray-500"
          alt=""
        />
        <div className="flex flex-col p-2">
          <h3>Bash</h3>
          <p>La terminal de linux</p>
        </div>
      </div>
        <div>
            <p>GNU corporation, All rights belonge to their creators</p>
        </div>
      <ul className="">
        <li>
          <a href="www.instagram.com">Instagram</a>
        </li>
        <li>
          <a href="www.facebook.com">Facebook</a>
        </li>
        <li>
          <a href="github.com/jmayola">Github</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
