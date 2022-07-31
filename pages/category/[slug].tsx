import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react'
import { Categories, PostCard, PostWidget } from '../../components';
import { IPost } from '../../interface';
import { getCategories, getCategoryPost } from '../../services';

const CategoriesPosts = ({posts}: {posts: IPost[]}) => {
  
    return (
        <div className="container mx-auto px-10 mb-8">
          <Head>
            <title>Blog của Hoàng</title>
          </Head>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 col-span-1">
              {posts.map((post) => (
               <PostCard key={post.node.id} post={post} />
              ))}
            </div>
            <div className="lg:col-span-4 col-span-1">
              <div className="lg:sticky relative top-8 lg:w-4/5 lg:ml-6">
                <PostWidget />
                <Categories />
              </div>  
            </div>
          </div>
        </div>
      );
  
}

export default CategoriesPosts


export const getServerSideProps: GetServerSideProps<
  { posts: IPost[] },
  { slug: string }
 > = async (context) => {
   const posts = await getCategoryPost(context.params?.slug as string)
  return {
     props: {
        posts
    },
 }
}