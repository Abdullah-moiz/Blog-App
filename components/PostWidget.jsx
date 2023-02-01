import React, { useEffect } from 'react'
import moment from 'moment/moment'
import Link from 'next/link'
import { getRecentPost , getSimilarPost } from '@/services'

export default function PostWidget({categories , slug}) {
  const [relatedPost, setRelatedPost] = React.useState([])

  useEffect(() => {
    if(slug)
    {
      getSimilarPost(categories, slug).then((result) => setRelatedPost(result));
    }
    else
    {
      getRecentPost(categories , slug).then((result) => setRelatedPost(result));
    }
  }, [slug])



  return (
    <div className='bg-white text-black shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4 '>
        {
          slug ? 'Related Post' : 'Recent Post'
        }
      </h3>
      {
        relatedPost.map((post) => (
          <div key={post.title} className="flex items-center w-full pb-4">
            <div className='w-16 flex-none'>
              <img alt={post.title}  height="50px" width="50px" src={post.featuredImage.url} className='align-middle rounded-full'/>
            </div>
            <div className='flex-grow ml-4'>
              <p className='text-gray-600 font-xs'>
                {moment(post.createdAt).format('DD MMMM YYYY')}
              </p>
              <Link href={`/post/${post.slug}`} key={post.title}  className="">
                {post.title}
              </Link>
            </div>
          </div>
        )
      )}
    </div>
  )
}
