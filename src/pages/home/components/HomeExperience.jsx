const HomeExperience = () => {
    return (
        <>
            <section className={'py-24 h-full bg-[#f5f5f5] text-black dark:bg-black dark:bg-opacity-50 dark:text-white'} >
                <div className={'container h-full'}>
                    <h2 className={'text-black dark:text-white text-3xl sm:text-4xl lg:text-5xl mb-10 md:mb-16 lg:mb-20 font-normal'}>My Journey</h2>
                    <div className={'grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-2'}>
                        <div>
                            <p className={'mb-8 flex items-center opacity-90'}>
                                <span className={'inline-block w-[35px] md:w-[60px] h-0.5 bg-black dark:bg-white mr-2 '}></span>
                                <span className={'inline-block text-2xl'}>Experience</span>
                            </p>
                            <div className={'w-full flex justify-center flex-col text-left'}>
                                    <ul>
                                        <li className={'flex relative'}>
                                            <div className={'h-full w-0.5 bg-black dark:bg-white bg-opacity-70 absolute left-3 top-0 ' +
                                                'before:block before:w-3 before:h-3 before:rounded-full before:absolute before:top-0 before:-left-[5px] before:bg-white before:dark:bg-[#151515] before:border-2 before:border-black before:dark:border-white'}>
                                            </div>
                                            <div className={'pl-10'}>
                                                <span className={'text-sm opacity-70 mb-2 block'}>2021 to present</span>
                                                <h6 className={'text-xl mb-3'}>HTML / WEB Developer</h6>
                                                <p className={'pb-12'}>Inexture Solutions LLP</p>
                                            </div>
                                        </li>
                                        <li className={'flex relative'}>
                                            <div className={'h-full w-0.5 bg-black dark:bg-white bg-opacity-70 absolute left-3 top-0 ' +
                                                'before:block before:w-3 before:h-3 before:rounded-full before:absolute before:top-0 before:-left-[5px] before:bg-white before:dark:bg-[#151515] before:border-2 before:border-black before:dark:border-white ' +
                                                'after:block after:w-3 after:h-3 after:rounded-full after:absolute after:bottom-0 after:-left-[5px] after:bg-white  after:dark:bg-[#151515]  after:border-2 after:border-black after:dark:border-white'}>
                                            </div>
                                            <div className={'pl-10'}>
                                                <span className={'text-sm opacity-70 mb-2 block'}>2019 to 2021</span>
                                                <h6 className={'text-xl mb-3'}>Web Designer</h6>
                                                <p className={'pb-12'}>Tatvasoft PVT LTD</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                        </div>
                        <div>
                            <p className={'mb-8 flex items-center opacity-90'}>
                                <span className={'inline-block w-[35px] md:w-[60px] h-0.5 bg-black dark:bg-white mr-2 '}></span>
                                <span className={'inline-block text-2xl'}>Education</span>
                            </p>
                            <div className={'w-full flex justify-center flex-col text-left'}>
                                    <ul>
                                        <li className={'flex relative'}>
                                            <div className={'h-full w-0.5 bg-black dark:bg-white bg-opacity-70 absolute left-3 top-0 ' +
                                                'before:block before:w-3 before:h-3 before:rounded-full before:absolute before:top-0 before:-left-[5px] before:bg-white before:dark:bg-[#151515] before:border-2 before:border-black before:dark:border-white'}>
                                            </div>
                                            <div className={'pl-10'}>
                                                <span className={'text-sm opacity-70 mb-2 block'}>2015 to 2019</span>
                                                <h6 className={'text-xl mb-3'}>B.E.(IT) - 8.12(CGPA)</h6>
                                                <p className={'pb-12'}>GTU, Vishwakarma Govt. Engg. College, Ahmedabad</p>
                                            </div>
                                        </li>
                                        <li className={'flex relative'}>
                                            <div className={'h-full w-0.5 bg-black dark:bg-white bg-opacity-70 absolute left-3 top-0 ' +
                                                'before:block before:w-3 before:h-3 before:rounded-full before:absolute before:top-0 before:-left-[5px] before:bg-white before:dark:bg-[#151515] before:border-2 before:border-black before:dark:border-white'}>
                                            </div>
                                            <div className={'pl-10'}>
                                                <span className={'text-sm opacity-70 mb-2 block'}>2013 to 2015</span>
                                                <h6 className={'text-xl mb-3'}>HSC - 84.61%</h6>
                                                <p className={'pb-12'}>GSHEB</p>
                                            </div>
                                        </li>
                                        <li className={'flex relative'}>
                                            <div className={'h-full w-0.5 bg-black dark:bg-white bg-opacity-70 absolute left-3 top-0 ' +
                                                'before:block before:w-3 before:h-3 before:rounded-full before:absolute before:top-0 before:-left-[5px] before:bg-white before:dark:bg-[#151515] before:border-2 before:border-black before:dark:border-white ' +
                                                'after:block after:w-3 after:h-3 after:rounded-full after:absolute after:bottom-0 after:-left-[5px] after:bg-white  after:dark:bg-[#151515]  after:border-2 after:border-black after:dark:border-white'}>
                                            </div>
                                            <div className={'pl-10'}>
                                                <span className={'text-sm opacity-70 mb-2 block'}>2013</span>
                                                <h6 className={'text-xl mb-3'}>SSC - 85.50%</h6>
                                                <p className={'pb-12'}>GSEB</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeExperience;