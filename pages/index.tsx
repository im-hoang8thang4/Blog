import Head from "next/head";
import { Categories, PostCard, PostWidget } from "../components";
import { IPost } from "../interface";
import FeaturedPosts from "../sections/FeaturedPosts";
import { getPosts } from "../services";
interface Props{
  posts: IPost[]
}
const Home = (props: Props)=> {
  return (
    <div className="container mx-auto md:px-10 px-3 mb-8">
      <Head>
        <title>Blog của Hoàng</title>
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-8 col-span-1">
          {props.posts.map((post) => (
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
};

export default Home;


export const getServerSideProps = async () => {
  const posts = await getPosts()
  return {
    props: {
      posts    
    },
  }
}