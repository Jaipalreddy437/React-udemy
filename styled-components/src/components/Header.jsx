import logo from "../assets/logo.png";
import Classes from "./Header.module.css";

export default function Header() {
  return (
    <header className='flex flex-col mb-16 items-center justify-center'>
      <img src={logo} alt="A canvas" className='object-contain w-44 h-44 font-title' />
      <h1>ReactArt</h1>
      <p className={Classes.paragraph}>
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
