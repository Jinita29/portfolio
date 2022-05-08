import { Icon } from '@iconify/react';
import {Link} from "react-router-dom";

const HomeAboutMe = () => {
    return (
        <>
            <section className={'py-24 h-full bg-white dark:bg-black dark:bg-opacity-90 text-black dark:text-white'} >
                <div className={'container h-full'}>
                    <h2 className={'text-black dark:text-white text-3xl sm:text-4xl lg:text-5xl mb-10 md:mb-16 lg:mb-20 font-normal'}>About Me</h2>
                    <div className={'grid grid-cols-1 md:grid-cols-3 grid-flow-row-dense gap-y-8 md:gap-5'}>
                        <div className={'col-span-1 md:col-span-2'}>
                            <div className={'max-w-xl w-full ml-0 mr-auto'}>
                                <p className={'mb-8 flex items-center opacity-90'}>
                                    <span className={'inline-block w-[35px] md:w-[60px] h-0.5 bg-black dark:bg-white mr-2 '}></span>
                                    <span className={'inline-block text-2xl'}>I'm Web Designer</span>
                                </p>
                                <h3 className={'text-2xl sm:text-3xl lg:text-4xl font-normal mb-5'}>I Can Design Anything You Want</h3>
                                <p className={'opacity-75 font-normal'}>Hello there! I'm a web designer, and I'm very passionate and dedicated to my work.In recent days, I’m learning new skills in React, Vue, Svelte. R&D on front-end technologies about how this works, their core functionalities and how they manage their lifecycle chains.
                                    Also I’m making some internal/personal projects for the community usage like some quick starter kits based on React, Vue, TailwindCSS and more.</p>
                           </div>
                        </div>
                        <div>
                            <div className={'flex md:justify-between max-w-[500px] w-full h-full'}>
                                <div className={'mr-10 md:mr-0 bg-gray-500 dark:bg-gray-200 bg-opacity-10 dark:bg-opacity-10 rounded-md border-2 max-w-[170px] w-full max-h-[110px] h-full text-center border-black dark:border-white p-4 flex flex-col justify-center items-center'}>
                                    <p className={'text-3xl mb-1 md:mb-2'}>3</p>
                                    <p className={'text-sm'}>Years of Experience</p>
                                </div>
                                <div className={'self-end bg-gray-500 dark:bg-gray-200 bg-opacity-10 dark:bg-opacity-10 rounded-md border-2 max-w-[170px] w-full max-h-[110px] h-full text-center border-black dark:border-white p-4 flex flex-col justify-center items-center'}>
                                    <p className={'text-3xl mb-2'}>10 <span>+</span></p>
                                    <p className={'text-sm'}>Projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default HomeAboutMe;