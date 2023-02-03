import { Inter } from '@next/font/google'
import PostCard from '@/components/PostCard';
import PostWidget from '@/components/PostWidget';
import Category from '@/components/Category';
import { getPost } from '@/services';


const inter = Inter({ subsets: ['latin'] })



export async function getStaticProps() {
  const posts = await getPost() || []

  return {
    props: {
      posts,
    },
  }
}


export default function Home({ posts }) {



  return (
    <div className='container mx-auto px-10 mb-8 text-white'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {
            posts?.map((post) => {
              return (
                <PostCard key={post.title} post={post.node} />
              )
            }
            )
          }
        </div>
        <div className='lg:col-span-4 col-span-1 '>
          <div className='lg:static relative top-8'>
            <PostWidget />
            <Category />
          </div>
        </div>
      </div>
    </div>
  )
}

// just a test
