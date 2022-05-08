import {useEffect} from "react";

const HomeBanner = ()  =>{
    const position= ['HTML Developer', 'Web Developer', 'Web Designer', 'UI/UX Designer']
    // const positionChange;
    useEffect(() => {
            let i;
            for(i=0;i<position.length;i++){
                // console.log("test", i, position[i])

                setTimeout(()=>{
                    }, 1000)
                }
    },[])
    return (
        <>
            <section className={'min-h-[400px] md:min-h-[500px] h-full dark:bg-black bg-white dark:bg-opacity-90 text-black dark:text-white pt-[44px]'} >
                <div className={'container h-full'}>
                    <div className={'flex items-center justify-start h-full'}>
                        <div className={'max-w-2xl w-full flex justify-center flex-col text-left text-black dark:text-white'}>
                            <span className={' sm:text-xl inline-block mb-5'}>Hello, I'm</span>
                            <h1 className={'text-4xl sm:text-6xl mb-8'}>Jinita Patel</h1>
                            <p className={'text-xl sm:text-2xl'}>I am a HTML Developer</p>
                        </div>
                        {/*<div className={'w-1/2'}>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeBanner;