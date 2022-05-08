import { Icon } from '@iconify/react';
import {useState} from "react";
const Footer = () => {
    const [isShow, setIsShow] = useState(false);

    const GetScrollPos = (e) => {
        const scrollPos = document.documentElement.scrollTop;
        const getScrollBtn = document.querySelector('.scroll-top-btn');
        console.log("scroll", getScrollBtn);
        if(scrollPos >= 150){
            setIsShow(true)
            getScrollBtn.classList.remove('animate-down');
            getScrollBtn.classList.remove('translate-y-[200%]');
            getScrollBtn.classList.add('animate-up');
        }
        else{
            setIsShow(false)
            getScrollBtn.classList.remove('animate-up');
            getScrollBtn.classList.add('animate-down');
            getScrollBtn.classList.add('translate-y-[200%]');
        }
    }
    window.addEventListener('scroll', GetScrollPos);
    const scrollTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

  return(
      <>
          <footer className={'bg-white dark:bg-black'}>
              <div className="container">
                  <div className="grid grid-cols-1">
                      <div>
                          <p className={'dark:text-white text-center py-1 flex items-center justify-end'}>Made in <Icon className={'mx-2'} icon="twemoji:flag-india" width={18} /> &copy; 2022</p>
                      </div>
                  </div>
              </div>
              <button onClick={(e)=>scrollTop(e)} className={`scroll-top-btn border-black dark:border-white translate-y-[200%] px-2 py-2 primary-btn fixed right-5 bottom-5`}>
                  <Icon icon="charm:chevrons-up" width="20" />
              </button>
          </footer>
      </>
  )
}
export default Footer;