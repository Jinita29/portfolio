import {useState} from 'react';
const HomeContact = () => {
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [errorMessages, setErrorMessages] = useState([]);

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        let errors = {}

        if(formData.email === ''){
            errors.email = 'Email address is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email address is invalid ID';
        }else{
            setErrorMessages([]);
            errors.email = ''
        }

        if(formData.name === ''){
            errors.name = 'I like to know your good name.'
        }else{
            setErrorMessages([])
            errors.name = ''
        }

        setErrorMessages(errors)
        console.log("form data",formData, errorMessages);
    }
  return (
      <>
          <section className={'py-24 h-full bg-[#f5f5f5] text-black dark:bg-black dark:bg-opacity-50 dark:text-white'} >
              <div className={'container h-full'}>
                  <h2 className={'text-black dark:text-white text-3xl sm:text-4xl lg:text-5xl mb-10 md:mb-16 lg:mb-20 font-normal'}>Contact Me</h2>

                  <form className={'max-w-4xl w-full'} onSubmit={(e)=>onSubmit(e)} >
                      <div className={'grid grid-cols-1 sm:grid-cols-2 gap-10'}>
                          <label className="block">
                              <span htmlFor={'name'} className="block text-sm font-medium dark:text-zinc-400 mb-2">Name</span>
                              <input type="text" placeholder={'Name'} name={'name'} value={formData.name} className="form-control" onChange={(e)=> handleOnChange(e)} />
                              {errorMessages.name && <span className={'text-red-500 text-xs inline-block mt-2'}>{errorMessages.name}</span>}
                          </label>
                          <label htmlFor={'email'} className="block">
                              <span className="block text-sm font-medium dark:text-zinc-400 mb-2">Email</span>
                              <input type="text" placeholder={'Email'}  name={'email'} value={formData.email} className="form-control"  onChange={(e)=> handleOnChange(e)} />
                              {errorMessages.email && <span className={'text-red-500 text-xs inline-block mt-2'}>{errorMessages.email}</span>}
                          </label>
                          <label htmlFor={'message'} className="block col-span-1 sm:col-span-2">
                              <span className="block text-sm font-medium dark:text-zinc-400 mb-2">Message</span>
                              <textarea type="textarea" placeholder={'Message'} name={'message'} value={formData.message} rows={4} className="form-control resize-none"  onChange={(e)=> handleOnChange(e)} />
                          </label>
                          <div className={'col-span-1'}>
                              <button type={'submit'} className="primary-btn"> Submit </button>
                          </div>
                      </div>
                  </form>
              </div>
          </section>
      </>
  )
}
export default HomeContact;