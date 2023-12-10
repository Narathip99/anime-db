import { Link } from 'react-router-dom';
import logo from '@/assets/react.svg';
import { BsFillSunFill } from "react-icons/bs";
import { BsMoonStarsFill } from "react-icons/bs";

export default function Header(props) {
  const { theme, setTheme } = props;
  function ToggleTheme() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <header className='header-wrap'>
      <div className="mx-36 p-4 flex justify-between items-center">
        <div className='logo flex'>
          <img src={logo} alt="" className='mx-4' />
          <Link to='/' className='text-2xl font-semibold'>AnimeDB</Link>
        </div>

        <div className="text-lg flex">
          <span onClick={ToggleTheme} className='cursor-pointer'> {theme == 'light' ? 'Light' : 'Dark'} </span>
          <span className="swap-theme text-2xl py-0.5  px-4 cursor-pointer" onClick={ToggleTheme} >
            {theme == "light" ? <BsFillSunFill /> : <BsMoonStarsFill />}
          </span>
        </div>
      </div>
    </header>
  );
}