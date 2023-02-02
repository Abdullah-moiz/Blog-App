import Category from '@/components/Category'
import PostWidget from '@/components/PostWidget'
import Author from '@/components/Author'
import CommentsFrom from '@/components/CommentsFrom'
import Comments from '@/components/Comments'
import PostDetails from '@/components/PostDetails'
import React from 'react'
import { getPost, getPostDetails } from '@/services'


// get static props
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug)

  return {
    props: {post : data}
  }
}


export async function getStaticPaths() {
  const posts = await getPost()
  return {
    paths: posts.map(({node : {slug}}) =>  ({ params: { slug } })),
    fallback: false,
  }
}

export default function PostDetail({post}) {  
  console.log()
  return (
    <div className='text-white container mx-auto px-10 mb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className="col-span-1 lg:col-span-8">
          <PostDetails post={post} />
          <Author author={post.map((post) => post.author)}/>
          <CommentsFrom slug={post.map((post) => post.slug)}/>
          <Comments slug={post.map((post) => post.slug)} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <PostWidget slug={post.map((post) => post.slug)}  categories={post.map((post) => post.cateogries?.map(category => category.slug))}/>
          <Category/>
        </div>
      </div>

    </div>
  )
}


