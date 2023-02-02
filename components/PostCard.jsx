import React from 'react'
import moment from 'moment/moment'
import Link from 'next/link'
import { BsFillCalendarMonthFill } from 'react-icons/bs';


export default function PostCard({ post }) {
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <img src={post.featuredImage.url} alt={post.title} className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg  " />
      </div>
      <h1 className='transition duration-700 text-center mb-8 cursor-pointer hover:text-green-400 font-semibold text-3xl  text-black'>
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className='block lg:flex text-center items center justify-center mb-8 w-full'>
        <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
          <img alt={post.author.name} height="30px" width="30px" className='align-middle rounded-full' src={post.author.profileImage.url} />
          <p className='inline text-gray-800 ml-2 text-lg align-middle'>{post.author.name}</p>
        </div>
        <div className='font-medium text-gray-700 '>
          <BsFillCalendarMonthFill className='h-6 w-6 inline mr-2  text-xl text-green-500' />
          <span>
            {moment(post.date).format('MMMM Do YYYY')}
          </span>
        </div>

      </div>
      <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8 '>{post.excerpt}</p>
      <div className="text-center">
        <Link href={`/posts/${post.slug}`}><span className='transition duration-500 tranform hover:-translate-y-1 inline-block bg-green-400 font-medium rounded-full text-white py-3 px-8 cursor-pointer'>Continue Reading</span></Link>
      </div>
    </div>
  )
}
