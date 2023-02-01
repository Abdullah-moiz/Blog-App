import React from 'react'

import Link from 'next/link'

const category = [ {name : 'react' , slug : "react"},{name : "web development" , slug : "web Dev"}]


export default function Header() {
  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-green-400 py-8'>
            <div className="md:float-left block ">
                <Link href='/'><span className='cursor-pointer font-bold  text-4xl text-white'>CodeWithMoiz</span> </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {
                    category.map((cat) => {
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
