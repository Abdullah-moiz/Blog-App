import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getCategories } from '@/services'

export default function Category() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, [])


  return (
    <div className='bg-white text-black shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4 flex flex-col '>
        Categories
      </h3>
      {
        categories?.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`} className>
            <span className='cursor-pointer mb-4 block '>
              {category.name}
            </span>
          </Link>
        ))
      }
    </div>
  )
}
