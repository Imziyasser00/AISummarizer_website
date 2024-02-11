import { useState, useEffect } from 'react'
import { FaLink } from "react-icons/fa";
import { useLazyGetSummaryQuery } from '../services/article';
import { Rings } from 'react-loader-spinner'

const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary:'',
  })

  const [allArticles, setAllArticles] = useState([])

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem('articles')
    )
    if(articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage)
    }
  },[])

  const [getSummary, {error, isFetching }] = useLazyGetSummaryQuery();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(article.url);
    const { data } = await getSummary({ articleUrl : article.url})
    if(data?.summary) {
      const newArticle = { ...article, summary:data.summary}

      const updatedAllArticles = [newArticle, ...allArticles]

      setArticle(newArticle);
      setAllArticles(updatedAllArticles);

      localStorage.setItem('articles' , JSON.stringify(updatedAllArticles))

      console.log(newArticle);
    }
  
  }



  return (
    <section className='mt-16 w-screen max-w-full'>
      <div className='flex flex-col w-full gap-2'>
        <form className='relative flex flex-col justify-center items-center w-full'
              onSubmit={handleSubmit}
        >
          <div className='relative flex justify-center items-center w-3/5'>
              <FaLink className='absolute left-0 my-2 ml-3 w-5 text-gray-500'/>
              <input 
                  type='url'
                  placeholder='Enter a URL'
                  value={article.url}
                  onChange={(e) => {setArticle({ ...article, url: e.target.value })}}
                  required
                  className='bg-white w-[700px] border-0 h-12 w-full px-12 shadow-lg shadow-blue-400/30'
                />

          </div>
          
          <button className='text-[22px] mt-12 bg-amber-500 hover:bg-orange-600 px-6 py-1 text-white transition ease-in-out '
                  type='submit'
          >
            Submit
          </button>
        </form>
        <div className='my-10 max-w-full flex justify-center items-center'>
          {isFetching ? (
           <Rings
           visible={true}
           height="80"
           width="80"
           color="rgb(234 88 12)"
           ariaLabel="rings-loading"
           wrapperStyle={{}}
           wrapperClass=""
           />
          ) : error ? (
            <p className='font-inter font-bold text-black text-center'>
              Well, I am so  sorry, This wasn't supposed to Happen ...
              <br />
              <span className='font-satoshi font-normal text-gray-700'>
                {error?.data?.error}
              </span>
            </p>
          ):(
            article.summary && (
              <div className='flex flex-col gap-3 items-center justify-center'>
                <h2 className='text-[35px] font-bold'>Article <span className='text-blue-500'>Summary</span></h2>
                <div className='text-center font-inter font-semibold	bg-white py-10 px-20 w-[800px] isolate aspect-video  rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5'>
                  <p>{article.summary}</p>
                </div>
              </div>

            )
          )}
          </div>

      </div>
    </section>
)}

export default Demo
