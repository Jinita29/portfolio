const HomeSkill = () => {
    const designskills = [
        { name: 'Bootstrap', value: '97%' },
        { name: 'TailwindCSS', value: '95%' },
        { name: 'Materialize UI', value: '94%' },
        { name: 'UIKIT', value: '87%' },
        { name: 'Bulma', value: '80%' },
        { name: 'Ant Design', value: '80%' },
        { name: 'Prime ng', value: '80%' },
    ];
    const designtools = [
        { name: 'XD', value: '97%' },
        { name: 'Figma', value: '94%' },
        { name: 'Framer', value: '95%' },
        { name: 'Photoshop', value: '97%' },
        { name: 'Adobe Illustrator', value: '90%' },
        { name: 'Invision App', value: '91%' },
        { name: 'Zeplin', value: '80%' },
    ];
    const frontEndFrameworks = [
        { name: 'React', value: '70%' },
        { name: 'Angular', value: '65%' },
        { name: 'Next JS', value: '70%' },
        { name: 'Vue', value: '65%' },
        { name: 'Nuxt JS', value: '65%' },
    ];
    const compilerTools = [
        { name: 'WebPack', value: '80%' },
        { name: 'Gulp', value: '90%' },
        { name: 'Grunt', value: '85%' },
        { name: 'Vite', value: '65%' },
        { name: 'SnowPack', value: '60%' },
    ];
    const miscellaneous = [
        { name: 'Javascript', value: '80%' },
        { name: 'jQuery', value: '85%' },
        { name: 'SAAS', value: '93%' },
        { name: 'CSS', value: '95%' },
        { name: 'GitHub / GitLab / SVN', value: '80%' },
    ];

    return (
        <>
            <section className={'py-24 h-full bg-white dark:bg-black dark:bg-opacity-90 text-black dark:text-white'} >
                <div className={'container h-full'}>
                    <h2 className={'text-black dark:text-white text-3xl sm:text-4xl lg:text-5xl mb-10 md:mb-16 lg:mb-20 font-normal'}>My Skill</h2>
                    {/*#### Design Frameworks ####*/}
                    <div className={'mb-12'}>
                        <p className={'mb-8 flex items-center opacity-90'}>
                            <span className={'inline-block w-[35px] md:w-[60px] h-0.5 bg-black dark:bg-white mr-2 '}></span>
                            <span className={'inline-block text-2xl'}>Design Frameworks</span>
                        </p>
                        <div className={'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-10'}>
                            {   designskills.map((skill, id) => {
                                return (
                                    <div key={id}>
                                        <h6 className={'mb-2 font-normal text-sm flex justify-between items-end'}>
                                            <span>{skill.name}</span>
                                            <span className={'text-xs'}>{skill.value}</span>
                                        </h6>
                                        <div className={'bg-gray-300 dark:bg-gray-500 rounded-sm overflow-hidden'}>
                                            <div className={'bg-black dark:bg-white p-1 text-center leading-tight flex items-center justify-center'} style={{width: skill.value}}>
                                            </div>
                                        </div>
                                    </div>
                                )
                                })
                            }
                        </div>
                    </div>
                    {/*#### Design Tools ####*/}
                    <div className={'mb-12'}>
                        <p className={'mb-8 flex items-center opacity-90 flex-wrap'}>
                            <span className={'inline-block w-[35px] md:w-[60px] h-0.5 bg-black dark:bg-white mr-2 '}></span>
                            <span className={'inline-block text-2xl'}>Design Tools</span>
                            <span className={'w-full block text-sm opacity-60 dark:opacity-40 mt-2'}>For extracting assets / converting it to HTML</span>
                        </p>
                        <div className={'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-10'}>
                            {   designtools.map((skill, id) => {
                                return (
                                    <div key={id}>
                                        <h6 className={'mb-2 font-normal text-sm flex justify-between items-end'}>
                                            <span>{skill.name}</span>
                                            <span className={'text-xs'}>{skill.value}</span>
                                        </h6>
                                        <div className={'bg-gray-300 dark:bg-gray-500 rounded-sm overflow-hidden'}>
                                            <div className={'bg-black dark:bg-white p-1 text-center leading-tight flex items-center justify-center'} style={{width: skill.value}}>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                    {/*#### FrontEnd Frameworks ####*/}
                    <div className={'mb-12'}>
                        <p className={'mb-8 flex items-center opacity-90 flex-wrap'}>
                            <span className={'inline-block w-[35px] md:w-[60px] h-0.5 bg-black dark:bg-white mr-2 '}></span>
                            <span className={'inline-block text-2xl'}>FrontEnd Frameworks</span>
                            <span className={'w-full block text-sm opacity-60 dark:opacity-40 mt-2'}>First Level Skills</span>
                        </p>
                        <div className={'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-10'}>
                            {   frontEndFrameworks.map((skill, id) => {
                                return (
                                    <div key={id}>
                                        <h6 className={'mb-2 font-normal text-sm flex justify-between items-end'}>
                                            <span>{skill.name}</span>
                                            <span className={'text-xs'}>{skill.value}</span>
                                        </h6>
                                        <div className={'bg-gray-300 dark:bg-gray-500 rounded-sm overflow-hidden'}>
                                            <div className={'bg-black dark:bg-white p-1 text-center leading-tight flex items-center justify-center'} style={{width: skill.value}}>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                    {/*#### Compiler Tools ####*/}
                    <div className={'mb-12'}>
                        <p className={'mb-8 flex items-center opacity-90 flex-wrap'}>
                            <span className={'inline-block w-[35px] md:w-[60px] h-0.5 bg-black dark:bg-white mr-2 '}></span>
                            <span className={'inline-block text-2xl'}>Compiler Tools</span>
                        </p>
                        <div className={'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-10'}>
                            {   compilerTools.map((skill, id) => {
                                return (
                                    <div key={id}>
                                        <h6 className={'mb-2 font-normal text-sm flex justify-between items-end'}>
                                            <span>{skill.name}</span>
                                            <span className={'text-xs'}>{skill.value}</span>
                                        </h6>
                                        <div className={'bg-gray-300 dark:bg-gray-500 rounded-sm overflow-hidden'}>
                                            <div className={'bg-black dark:bg-white p-1 text-center leading-tight flex items-center justify-center'} style={{width: skill.value}}>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                    {/*#### Miscellaneous ####*/}
                    <div className={'mb-12'}>
                        <p className={'mb-8 flex items-center opacity-90 flex-wrap'}>
                            <span className={'inline-block w-[35px] md:w-[60px] h-0.5 bg-black dark:bg-white mr-2 '}></span>
                            <span className={'inline-block text-2xl'}>Miscellaneous</span>
                        </p>
                        <div className={'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-10'}>
                            {   miscellaneous.map((skill, id) => {
                                return (
                                    <div key={id}>
                                        <h6 className={'mb-2 font-normal text-sm flex justify-between items-end'}>
                                            <span>{skill.name}</span>
                                            <span className={'text-xs'}>{skill.value}</span>
                                        </h6>
                                        <div className={'bg-gray-300 dark:bg-gray-500 rounded-sm overflow-hidden'}>
                                            <div className={'bg-black dark:bg-white p-1 text-center leading-tight flex items-center justify-center'} style={{width: skill.value}}>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeSkill;