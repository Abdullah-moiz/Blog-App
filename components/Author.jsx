import React from 'react'

export default function Author({ author }) {
  const image = author?.map((author) => author.profileImage.url);
  const name = author?.map((author) => author.name);
  const bio = author?.map((author) => author.bio);


  return (
    <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-white text-black'>
      <div className='absolute left-0 right-2 -top-14'>
        <img unoptimized src={image} alt={author.name} height="100px" width="100px" className="align-middle rounded-full" />
      </div>
      <h3 className='text-gray-700 my-4 text-xl font-bold'>{name}</h3>
      <p className='text-gray-900 text-lg'>{bio}</p>
    </div>
  )
}
