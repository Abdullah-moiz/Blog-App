import React, { useEffect , useState } from 'react'
import { getCategories } from '@/services'
import Link from 'next/link'




export default function Header() {
    const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, [])


  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-green-400 py-8'>
            <div className="md:float-left block ">
                <Link href='/'><span className='cursor-pointer font-bold  text-4xl text-white'>CodeWithMoiz</span> </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {
                    categories?.map((cat) => {
                        return (
                            <Link href={`/category/${cat.slug}`} key={cat.slug}>
                                <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>{cat.name}</span>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
