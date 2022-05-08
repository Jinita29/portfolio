import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import { Icon } from '@iconify/react';

const Header = () => {
    const [darkMode, setDarkMode ] = useState(false);

    const getBody = document.querySelector('body');
    const handleDarkMode = () => {
        getBody.classList.toggle('dark')
        setDarkMode(!darkMode);
    }
    useEffect(()=>{
        localStorage.setItem('themeMode', JSON.stringify(darkMode));
    }, [darkMode])

    useEffect(()=>{
        const localThemeMode = JSON.parse(localStorage.getItem('themeMode'));
        if(localThemeMode){
            setDarkMode(localThemeMode)
        }
    },[])
  return(
      <header className="shadow-sm drop-shadow-lg py-1 bg-white dark:bg-black fixed top-0 left-0 right-0 z-30">
          <div className="container">
              <div className="flex items-center justify-between">
                  <Link to={'/'} className="text-3xl uppercase tracking-widest dark:text-white">J<sub className={'lowercase text-base -bottom-[1px]'}>inita</sub> P<sub className={'lowercase text-base -bottom-[1px]'}>atel</sub></Link>
                  <div className="menu py-1">
                      <ul className="flex items-center justify-end  dark:text-white">
                          {/*<li><Link className="flex px-2 py-3" to="/">Home</Link></li>*/}
                          {/*<li><Link className="flex px-2 py-3" to="/about">About</Link></li>*/}
                          <li className={'flex items-center justify-center ml-4'}>
                              <button className={'text-xl focus-visible:outline-0'} onClick={()=> handleDarkMode()}>
                                  {darkMode ? <Icon icon="octicon:sun-16" /> : <Icon icon="majesticons:moon-line" />}
                              </button>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </header>
  )
}
export default Header;