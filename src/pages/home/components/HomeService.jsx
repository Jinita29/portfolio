import { Icon } from '@iconify/react';

const HomeService = () => {
    const services = [
        { name: 'UI/UX design', icon: 'eva:color-palette-outline' },
        { name: 'Web design', icon: 'fluent:design-ideas-24-regular' },
        { name: 'Fully Responsive design', icon: 'mdi:responsive' },
        { name: 'SEO Optimization', icon: 'fluent:mobile-optimized-24-regular' },
        { name: 'Animation', icon: 'clarity:animation-line' },
        { name: 'Design to HTML', icon: 'fa6-solid:laptop-code' },
    ]
    return (
        <>
            <section className={'py-24 h-full bg-[#f5f5f5] text-black dark:bg-black dark:bg-opacity-50 dark:text-white'} >
                <div className={'container h-full'}>
                    <h2 className={'text-black dark:text-white text-3xl sm:text-4xl lg:text-5xl mb-10 md:mb-16 lg:mb-20 font-normal'}>Service I Provide</h2>
                    <div className={'grid sm:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-5'}>
                        { services.map((service, item)=>{
                            return (
                                <div key={item} className={'text-left flex items-center'}>
                                    <span className={'inline-block mb-3 text-black dark:text-white mr-3'}><Icon icon={service.icon} width={'40'}/></span>
                                    <h3 className={'text-base md:text-lg font-normal mb-4'}>{service.name}</h3>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeService;