import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className='flex flex-col mb-16 items-center justify-center'>
      <img src={logo} alt="A canvas" className='object-contain w-44 h-44 font-title' />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
