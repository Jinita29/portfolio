const HomeContact = () => {
  return (
      <>
          <section className={'py-24 h-full bg-[#f5f5f5] text-black dark:bg-black dark:bg-opacity-50 dark:text-white'} >
              <div className={'container h-full'}>
                  <h2 className={'text-black dark:text-white text-3xl sm:text-4xl lg:text-5xl mb-10 md:mb-16 lg:mb-20 font-normal'}>Contact Me</h2>
                  <form className={'max-w-4xl w-full'}>
                      <div className={'grid grid-cols-1 sm:grid-cols-2 gap-10'}>
                          <label className="block">
                              <span className="block text-sm font-medium dark:text-zinc-400 mb-2">Username</span>
                              <input type="text" placeholder={'Name'} className="form-control"/>
                          </label>
                          <label className="block">
                              <span className="block text-sm font-medium dark:text-zinc-400 mb-2">Email</span>
                              <input type="text" placeholder={'Email'} className="form-control"/>
                          </label>
                          <label className="block col-span-1 sm:col-span-2">
                              <span className="block text-sm font-medium dark:text-zinc-400 mb-2">Message</span>
                              <textarea type="textarea" placeholder={'Message'} rows={4} className="form-control resize-none"/>
                          </label>
                          <div className={'col-span-1'}>
                              <button type={'submit'}
                                  className="primary-btn">
                                  Submit
                              </button>
                          </div>
                      </div>
                  </form>
              </div>
          </section>
      </>
  )
}
export default HomeContact;