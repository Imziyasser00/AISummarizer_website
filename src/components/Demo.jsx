import { useState, useEffect } from 'react'
import { FaLink } from "react-icons/fa";



const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary:'',
  })

  const handleSubmit = async (e) =>{
    
  }

  return (
    <section className='mt-16 w-screen max-w-xl'>
      <div className='flex flex-col w-full gap-2'>
        <form className='relative flex flex-col justify-center items-center w-full'
              onSubmit={handleSubmit}
        >
          <div className='relative flex justify-center items-center'>
              <FaLink className='absolute left-0 my-2 ml-3 w-5 text-gray-500'/>
              <input 
              type='url'
              placeholder='Enter a URL'
              value={article.url}
              onChange={(e)=>{setArticle({ ...article, url: e.target.url })}}
              required
              className='bg-white w-[600px] border-0 h-12 w-full px-12 shadow-lg shadow-blue-400/30'
            />
          </div>
          
          <button className='text-[22px] mt-12 bg-amber-500 hover:bg-orange-600 px-6 py-1 text-white transition ease-in-out '
                  type='submit'
          >
            Submit
          </button>
        </form>

      </div>
    </section>
  )
}

export default Demo
