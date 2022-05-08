import { Icon } from '@iconify/react';
const Footer = () => {
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
          </footer>
      </>
  )
}
export default Footer;